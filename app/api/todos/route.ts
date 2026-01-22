import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const response = await prisma.todo.findMany();
  return NextResponse.json(response, { status: 200 });
}
