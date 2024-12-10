"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProfileType } from "@/schemas/user";
import { useUserStore } from "@/store/use-user-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

async function fetchUserProfile() {
  try {
    const { data } = await axios.get("/api/user");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
}

async function updateUserProfile(data: UserProfileType) {
  const response = await axios.put("/api/user", data);
  return response.data;
}

export function useUser() {
  const { setUser } = useUserStore();

  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserProfile,
    // onSuccess in depriciated in v5
    // onSuccess: (data) => setUser(data),
  });
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);
  return { data, error, isLoading };
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
