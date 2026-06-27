import { prisma } from "./lib/prisma";

async function main() {
  // Create a new user with a post
//   const user = await prisma.user.create({
//     data: {
//       name: "Alicudon ffbekar",
//       email: "alicudon5@prisma.io",
//       posts: {
//         create: {
//           title: "Hello aligcudon bekar ",
//           content: "This is my alicuggdon post!",
//           published: true,
//         },
//       },
//     },
//     include: {
//       posts: true,
//     },
//   });
const newPost = await prisma.post.create({
    data: {
        authorId: 1,
        title: "Hello Wolrd 2",
        content: "This is second post as first user",
        published: true,

    },
});



  console.log("Created user:", newPost);

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });