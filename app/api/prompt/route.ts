import Prompts from "@/models/Prompt";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";


const handler = async (req: NextRequest) => {

  connectToDB();
  try{
    const prompts = await Prompts.find({}).populate('user');
    return NextResponse.json({
      status : 200,
      message: "all prompts",
      prompts : prompts
    })
  }
  catch (err : any) {
    console.log(err);
     return NextResponse.json({
      error : err.message,
    })
  }
};

export { handler as GET, handler as POST };



