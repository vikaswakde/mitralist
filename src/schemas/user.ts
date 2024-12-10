import * as z from "zod";

export const UserProfileSchema = z.object({
  username: z.string().min(3).max(30),
  bio: z.string().max(160).optional(),
  image: z.string().url().optional(),
  coverImage: z.string().url().optional(),
  name: z.string().min(3).max(30),
  email: z.string().email(),
});

export type UserProfileType = z.infer<typeof UserProfileSchema>;
