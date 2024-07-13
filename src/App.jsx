import { useEffect, useState } from "react";
import { getPosts, getRandomData } from "./api/api";
import "./App.css";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   getPosts().then((posts) => setData(posts));
  // });

  useEffect(() => {
    getRandomData().then((user) => setData(user.results[0]));
    getRandomData().then((user) => console.log(user.results[0]));
  }, []);

  return (
    <div className="posts">
      {data && <UserCard data={data} />}
      {/* {data
        ? data.map((posts) => (
            <PostCard key={posts.id} id={posts.id} title={posts.title} body={posts.body} />
          ))
        : "loading... "} */}
    </div>
  );
}

export default App;
