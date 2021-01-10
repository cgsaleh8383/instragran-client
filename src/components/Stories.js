import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../Global/Context";

const Stories = () => {

  const { posts } = useContext(ContextProvider);
  return (
    <div className="stories">
      {posts.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.username}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
