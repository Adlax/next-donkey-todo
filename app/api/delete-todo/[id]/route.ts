import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const response = await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ message: "Delete successfull" }, { status: 200 });
}
