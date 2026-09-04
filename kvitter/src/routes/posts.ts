import { validatePost } from "@/lib/validation";
import { route } from "rwsdk/router";
import { ErrorResponse } from "rwsdk/worker";

let posts: Array<{
  id: string;
  text: string;
  authorId: string;
  createdAt: string;
}> = [];

let nextId = 1;

export const postsRoutes = [
  route("/", {
    get: () => Response.json(posts),
    post: async ({ request, ctx }) => {
      if (!ctx.session.isAuthenticated)
        throw new ErrorResponse(401, "Unauthorized");

      const { text } = await request.json();
      const validation = validatePost(text);
      if (!validation.ok) throw new ErrorResponse(400, validation.error);

      const post = {
        id: String(nextId++),
        text,
        authorI: ctx.session.usedId!,
        createdAt: new Date().toISOString(),
      };
      posts.unshift(post);
      return Response.json(post, { status: 201 });
    },
  }),

  route("/:id", {
    get: ({ params }) => {
      const post = posts.find((p) => p.id === params.id);
      if (!post) throw new ErrorResponse(404, "Post not found");
      return Response.json(post);
    },
    delete: ({ params, ctx }) => {
      if (!ctx.session.isAuthenticated)
        throw new ErrorResponse(401, "Unauthorized");
      const index = posts.findIndex((p) => p.id === params.id);
      if (index === -1) throw new ErrorResponse(404, "Post not found");
      //TODO: sjekk at ctx.session.userId === posts[index].authorId
      posts.splice(index, 1);
      return new Response(null, { status: 204 });
    },
  }),
];
