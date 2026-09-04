"use server";

import { requestInfo, serverAction } from "rwsdk/worker";

export const createPost = serverAction(async (formData: FormData) => {
  const { ctx } = requestInfo;

  if (!ctx.session.isAuthenticated)
    return { ok: false, error: "Ikke innlogget" };

  const content = formData.get("content") as string;
  if (!content || content.trim().length === 0) {
    return { ok: false, error: "Innlegget kan ikke være tomt" };
  }
  if (content.length > 280) {
    return { ok: false, error: "Maks 280 tegn" };
  }

  // TODO: lagre i databasen
  console.log("New post:", content);
  return { ok: true };
});
