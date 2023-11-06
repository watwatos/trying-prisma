import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();

    return new NextResponse(JSON.stringify(users), { status: 200 });

  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};