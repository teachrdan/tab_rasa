import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppBody from "./AppBody";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppBody />
    </QueryClientProvider>
  );
};

export default App;
