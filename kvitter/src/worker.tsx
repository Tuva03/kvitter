import { except, prefix, render, route } from "rwsdk/router";
import { defineApp, ErrorResponse } from "rwsdk/worker";
import { Document } from "@/app/document";
import { sessionMiddleware } from "./middleware/session";
import { postsRoutes } from "./routes/posts";

export type AppContext = {};

export default defineApp([
  except((error) => {
    if (error instanceof ErrorResponse) {
      return Response.json({ error: error.message }, { status: error.code });
    }
    console.error("Unexpected error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }),

  sessionMiddleware,

  prefix("/api/posts", postsRoutes),

  render(Document, [route("/", () => <h1>Velkommen til Kvitter!</h1>)]),
]);
