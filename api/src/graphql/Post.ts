import { extendType, intArg, nonNull, objectType, stringArg } from "nexus"

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.dateTime("createdAt");
    t.nonNull.string("description");
    t.nonNull.string("title");
    t.dateTime("completedAt");
    t.field("navigator", {
      type: "User",
      resolve(parent, args, context) {
        return context.prisma.post
          .findUnique({ where: { id: parent.id } })
          .navigator();
      }
    })
    // navigator
    // driver
    // requiredSkill
    // message
  }
}) 

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Post",
      resolve(parent, args, context) {
        return context.prisma.post.findMany();
      }
    });
  }
});

export const PostMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("post", {
            type: "Post",
            args: {
                description: nonNull(stringArg()),
                title: nonNull(stringArg()),
                userId: nonNull(intArg())
            },
            resolve(parent, args, context) { 
                const newPost = context.prisma.post.create({
                    data: {
                        description: args.description,
                        title: args.title,
                        navigator: { connect: { id: args.userId } }
                    },
                });
                return newPost;
            },
        });
    },
});
