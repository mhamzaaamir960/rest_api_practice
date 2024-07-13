import { useEffect, useState } from "react";
import { getPosts, getRandomData } from "./api/api";
import "./App.css";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   getPosts().then((posts) => setData(posts));
  // });

  useEffect(() => {
    const func = async () => {
      const result = await getRandomData();

      if (result.error) {
        setError(result.error);
      } else {
        setData(result.results[0]);
      }
    };

    func();
  }, []);

  return (
    <div className="posts">
      {data &&  <UserCard data={data}/>}
      <span>{error && error}</span>
      {/* {data
        ? data.map((posts) => (
            <PostCard key={posts.id} id={posts.id} title={posts.title} body={posts.body} />
          ))
        : "loading... "} */}
    </div>
  );
}

export default App;
