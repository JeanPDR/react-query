import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
//para realizar GET irei usar o useQuery, mas para fazer POST, PATCH, PUT e DELETE precisa utilizar o useMutation
import "./App.css";

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, error, refetch } = useQuery(
    "todos",
    () => {
      return axios
        .get("http://localhost:8080/todos")
        .then((response) => response.data);
    },
    {
      // retry: 3, //posso utilizar para repetir a requisição
      // refetchOnWindowFocus: true, //ele vem como false como padrão, o refetchOnWindowFocus faz a query seja refeita assim que usuário mudar de pagina.
      // refetchInterval: 5000, // ele refaz query de 5 em segundos conforme adicionado
      // initialData: [{ id: "1", title: "teste" }], // caso eu não queria deixar o tratamento de erros abaixo eu posso colocar o initialData para iniciar com esse valores e sempre que eu ele o Isloading será "false".
    }
  );

  if (isLoading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="loading">Algo deu errado!</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: ({ todoId, completed }) => {
      return axios
        .patch(`http://localhost:8080/todos/${todoId}`, { completed })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData("todos", (currentData) =>
        currentData.map((todo) => (todo.id === data.id ? data : todo))
      );
    },

    onError: (error) => {
      console.error(error);
    },
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
