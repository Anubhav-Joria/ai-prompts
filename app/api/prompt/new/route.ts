import Prompts from "@/models/Prompt";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

const handler = async (req: any) => {
  const res = await req.json();
  const { prompt, userId, tag, user } = res;
  await connectToDB();
  try {
    const newPrompt = new Prompts({
      prompt: prompt,
      userId: userId,
      tag: tag,
      user: user,
    });
    await newPrompt.save();

    return NextResponse.json(
      {
        message: "new Prompt added SuccessFully",
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

export { handler as GET, handler as POST };
