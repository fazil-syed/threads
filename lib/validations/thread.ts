import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "MINIMUM 3 CHARACTERS" })
    .max(1000, { message: "MAXIMUM 1000 CHARARCTERS" }),
  accountId: z.string(),
});
export const CommentValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "MINIMUM 3 CHARACTERS" })
    .max(1000, { message: "MAXIMUM 1000 CHARARCTERS" }),
});
