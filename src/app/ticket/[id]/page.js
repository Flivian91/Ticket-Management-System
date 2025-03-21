import React from "react";

function page({ params }) {
  const id = params.id;
  return <div>This is the Ticket id {id}</div>;
}

export default page;
