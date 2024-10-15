import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

import "./App.css";

function App() {
  const { data } = useQuery("todos", () => {
    return axios
      .get("http://localhost:8080/todos")
      .then((response) => response.data);
  });
  return (
    <div className="app-container">
      <div className="todos">
        <h2>Todos & React Query</h2>
        {data.map((todo) => (
          <div
            onClick={() =>
              mutation.mutate({ todoId: todo.id, completed: !todo.completed })
            }
            className={`todo ${todo.completed && "todo-completed"}`}
            key={todo.id}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
