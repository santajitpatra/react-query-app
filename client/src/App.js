import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery(["todo"], async () =>
    (await fetch("http://localhost:8000/todo")).json()
  );
  console.log("data:" ,data)
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
