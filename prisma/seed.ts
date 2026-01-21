import { prisma } from "../lib/prisma";

export async function seedTodos() {
  console.log("Seed...");
  await prisma.todo.create({
    data: {
      title: "First Todo",
    },
  });
}

seedTodos()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Seed Done");
  });
