"use client";
import React, { useEffect, useState } from "react";
import Profile from "@/components/Profile";
const UserProfile = ({ params }: any) => {
  const [userPosts, setUserPosts] = useState<any>([]);

  const handleTagClick = () => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };
    fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userPosts[0]?.user?.name}
      desc={`Welcome to ${userPosts[0]?.user?.name}'s personalized profile page. Explore ${userPosts[0]?.user?.name}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
