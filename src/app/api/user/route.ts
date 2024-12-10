import { prisma } from "@/lib/prisma";
import { UserProfileSchema } from "@/schemas/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthroized", { status: 401 });
    }

    const body = await req.json();
    const validatedData = UserProfileSchema.parse(body);

    const user = await prisma.user.upsert({
      where: { id: userId },
      update: validatedData,
      create: {
        id: userId,
        ...validatedData,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}
