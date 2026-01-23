import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = {
  id: string;
};

export async function GET(_request: Request, { params }: { params: Params }) {
  const { id } = params;
  const resp = await prisma.todo.findUnique({
    where: { id: id },
  });
  return NextResponse.json(resp, { status: 200 });
}

export async function PATCH(_request: Request, { params }: { params: Params }) {
  const { id } = params;
  const { title, date } = await _request.json();
  const resp = await prisma.todo.update({
    where: { id: id },
    data: {
      title: title,
      date: date,
    },
  });
  return NextResponse.json(resp, { status: 200 });
}
