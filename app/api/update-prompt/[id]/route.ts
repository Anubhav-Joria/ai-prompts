import Prompts from "@/models/Prompt";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;
  const currentPrompt = await Prompts.findById(params.id);
  return NextResponse.json(currentPrompt);
}

export async function PATCH(req: any, context: any) {
  const d = await req.json();
  const { params } = context;
  await connectToDB();
  try {
    await Prompts.findByIdAndUpdate(params.id, d.post);
    return NextResponse.json({
        statusCode: 200,
        message: "Success"
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
        statusCode: 500,
        message: "Error"
    });
  }
}
