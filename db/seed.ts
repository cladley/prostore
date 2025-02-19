import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  // Clear the product table
  await prisma.product.deleteMany();
  // Create the products
  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully");
}

main();
