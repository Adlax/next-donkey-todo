import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const resp = await prisma.todo.findUnique({
    where: { id: id },
  });
  return NextResponse.json(resp, { status: 200 });
}
