export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  return await res.json();
};

export const getRandomData = async () => {
  try {
    const res = await fetch("https://randomuser.me/api", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Something went wrong!  ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    return { error: error.message };
  } finally {
    console.log('Working...')
  }
};
