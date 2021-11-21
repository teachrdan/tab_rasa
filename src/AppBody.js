import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Body from "./Body";

export default function AppBody() {
  const { data = {}, isLoading } = useQuery("repoData", () =>
    fetch("http://localhost:3000/express_backend").then((res) => res.json())
  );

  console.log("data", data);
  const { message = "" } = data;

  if (isLoading) return "Loading...";

  return (
    <div className="App">
      <Body text={message} />
    </div>
  );
}
