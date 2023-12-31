"use client";
import { useState, useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`api/prompt/${id}`);
      const data = await response.json();
      setPost({ prompt: data.prompt, tag: data.tag });
    };
    if (id) getPromptDetails();
  }, [id]);

  const editPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!id) return alert("ID not found");
    try {
      const res = await fetch(`/api/prompt/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };
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
