const RESERVED = ["admin", "root"];

export function validateUsername(username: string): {
  ok: boolean;
  error?: string;
} {
  if (username.length < 3) return { ok: false, error: "For kort" };
  if (username.length > 20) return { ok: false, error: "For langt" };
  if (!/^[a-zA-Z0-9_]+$/.test(username))
    return { ok: false, error: "Ugyldige tegn" };
  if (RESERVED.includes(username.toLowerCase()))
    return { ok: false, error: "Reservert navn" };
  return { ok: true };
}

export function validatePost(content: string): { ok: boolean; error?: string } {
  if (content.length > 280) return { ok: false, error: "For langt" };
  if (content.length < 1) return { ok: false, error: "For kort" };
  if (/^\s+$/.test(content)) return { ok: false, error: "Tom tekst" };
  return { ok: true };
}

/*
export function formatTimestamp(date: Date): { ok: boolean; error?: string } {
  return { ok: true };
}
  */
