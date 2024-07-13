export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  return await res.json();
};

export const getRandomData = async () => {
  const res = await fetch("https://randomuser.me/api", {
    method: "GET",
  });

  return await res.json();
};
