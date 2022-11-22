import React, { useEffect, useState } from "react";

function UseEffect(props) {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((response) => response.json())
      .then((json) => setItems(json));

    console.log("componentDidUpdate");
    return () => {
      //clean up task
      console.log("Unmount");
    };
  }, [content]); // if want to run this function when content state change else not then use like this
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Update Count {count}</button>
      <button onClick={() => setContent("posts")}>Posts</button>
      <button onClick={() => setContent("users")}>Users</button>
      <button onClick={() => setContent("comments")}>Comments</button>

      <h1>{content}</h1>

      <ul>
        {items &&
          items.map((item) => {
            return <l1 key={item.id}>{item.id}</l1>;
          })}
      </ul>
    </div>
  );
}

export default UseEffect;
