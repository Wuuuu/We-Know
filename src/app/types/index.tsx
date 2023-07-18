import { Users } from "@prisma/client";

export type SafeUser = Omit<Users, "emailVerified"> & {
  // createdAt: string;
  // updatedAt: string;
  emailVerified?: string | null;
};
