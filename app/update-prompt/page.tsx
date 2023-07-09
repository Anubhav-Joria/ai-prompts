"use client";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const router = useRouter();
  const { data: session }: any = useSession();

  if (!session) router.push("/");

  //when url is /update-prompt?id=77979
  //create a route.js in update-prompt and we can get query parameters using the below code
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [post, setPost] = useState<any>();
  const [submitting, setSubmitting] = useState(false);

  const fetchPromptData = async () => {
    const data = await fetch(`api/update-prompt/${id}`);
    const parseData = await data.json();
    setPost(parseData);
  };

  const editPrompt = async (e: any) => {
    e.preventDefault();
    const data = await fetch(`api/update-prompt/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        post: post,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const parseData = await data.json();
    if (parseData.statusCode === 200) {
      router.push(`/`);
    } else {
      alert("Cannot edit right now");
    }
  };

  useEffect(() => {
    fetchPromptData();
  }, []);

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
    />
  );
};

export default UpdatePrompt;
