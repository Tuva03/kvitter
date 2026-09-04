export async function sessionMiddleware({ request, ctx }) {
  const authHeader = request.headers.get("Authorization");

  if (authHeader?.startsWith("Bearer ")) {
    const userId = authHeader.slice(7);
    // TODO: Slå opp bruker i databasen
    ctx.session = { userId, isAuthenticated: true };
  } else {
    ctx.session = { userId: null, isAuthenticated: false };
  }
}
