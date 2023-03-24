import React, { useState } from "react";
import { useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

  return (
    <div className="homepage">
      {postLists.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.postText}</p>
            <span>@{post.author.name}</span>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button onClick={() => deletePost(post.id)}>Delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
