import React, { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "react-query";

export default function AppBody() {
  const { data, isLoading } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  console.log("data", data);

  if (isLoading) return "Loading...";

  return (
    <div className="App bg-gradient-to-b from-gray-700 to-gray-900">
      App goes here
    </div>
  );
}
