import { useQuery } from "@tanstack/react-query";
import Form from "./components/Form";

function App() {
  const { data , isFetching , status} = useQuery(["todo"], async () =>
    (await fetch("http://localhost:8000/todo")).json()
  );
  console.log("data:" ,data)

  if (isFetching) {
    return <h2>Loding...</h2>
  }
  return (
    <div className="App">
      <Form />
      <p>Status: {status}</p>
      {data && data.data && data.data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </div>
  );
}

export default App;
