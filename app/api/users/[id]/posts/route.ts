import Prompts from "@/models/Prompt";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const { params } = context;
  try {
    const res = await Prompts.find({ userId: params.id });
    return NextResponse.json(res);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({
      error: err.message,
    });
  }
}
