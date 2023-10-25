"use client";
import { useState, useEffect } from "react";
import PromptCard from "../components/PromptCard";

const PromptCardList = ({ filteredPosts, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {filteredPosts?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const [tags, setTags] = useState("");

  const handleTagClick = (value) => {
    setTags(value);
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setTags("");
  };
  const checkInput = tags == "" ? searchText : tags;
  const filteredPosts = (posts ?? []).filter(
    (post) =>
      post.tag.toLowerCase().trim().includes(checkInput.toLowerCase().trim()) ||
      post.prompt.toLowerCase().trim().includes(checkInput.toLowerCase().trim())
  );

  return (
    <section className="feed">
      <form className="relative w-fullflex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={checkInput}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        filteredPosts={filteredPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
