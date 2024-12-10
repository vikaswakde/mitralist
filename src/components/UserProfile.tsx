import { useUpdateUser, useUser } from "@/hooks/use-user";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

const UserProfile = () => {
  const { data: user, isLoading, error } = useUser();
  const { mutate: updateUser, isPending, error } = useUpdateUser();
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) {
    return <Loader2 className="w-10 h-10 animate-spin" />;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return <div></div>;
};

export default UserProfile;
