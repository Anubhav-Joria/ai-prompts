import Prompts from "@/models/Prompt";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, context: any) {
  const { params } = context;
  connectToDB();
  try {
    await Prompts.findByIdAndDelete(params.id);
    return NextResponse.json({
      message: "Deleted Successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      message: "Cannot delete right now",
      error: err.message,
    });
  }
}
