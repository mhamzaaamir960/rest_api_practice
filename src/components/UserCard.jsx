import React from "react";

function UserCard({ data }) {
  return (
    <div>
      <img src={data.picture.large} alt="image" width={200} />
      <h3>
        {data.name.title}. {data.name.first}
      </h3>
      <h5>{data.gender}</h5>
      <h5>{data.phone}</h5>

      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}

export default UserCard;
