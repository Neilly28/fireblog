import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase-config";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const handleSubmit = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="container">
        <h1>Create A Post</h1>
        <div className="inputGroup">
          <label htmlFor="">Title:</label>
          <input
            placeholder="Title..."
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="">Post</label>
          <textarea
            placeholder="Write something..."
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleSubmit}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
