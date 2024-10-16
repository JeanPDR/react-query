
# React Query Project

Este projeto utiliza **React Query** para simplificar o gerenciamento de estados assíncronos, como chamadas de APIs e cache de dados.

## 📋 Funcionalidades Aprendidas

- **Data Fetching**: Uso do `useQuery` para buscar dados de forma eficiente.
- **Cache e Sincronização**: Configuração do cache automático para melhorar a performance e reduzir chamadas desnecessárias.
- **Mutations**: Implementação de operações com `useMutation` para alterar dados no servidor.
- **Polling e Revalidação**: Atualização automática de dados em intervalos regulares e ao focar na janela.
- **Query Invalidation**: Invalidação de queries para garantir que os dados estejam sempre atualizados.
- **Erro Handling**: Tratamento de erros com fallback UI e retries automáticos.

## 🚀 Tecnologias Utilizadas

- **React Query**: Gerenciamento de estado assíncrono.
- **Axios ou Fetch**: Para chamadas HTTP.
- **React**: Biblioteca principal para a interface do usuário.
- **TypeScript (opcional)**: Tipagem estática para maior segurança e manutenção do código.

## 🛠️ Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/JeanPDR/react-query.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd react-query
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute a aplicação:
   ```bash
   npm start
   ```

## 💡 Exemplos de Uso

### Fetching com `useQuery`

```javascript
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const { data } = await axios.get('/api/users');
  return data;
};

function Users() {
  const { data, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Mutação com `useMutation`

```javascript
import { useMutation } from 'react-query';
import axios from 'axios';

const createUser = async (user) => {
  const { data } = await axios.post('/api/users', user);
  return data;
};

function CreateUser() {
  const mutation = useMutation(createUser);

  return (
    <button
      onClick={() => mutation.mutate({ name: 'Novo Usuário' })}
    >
      Adicionar Usuário
    </button>
  );
}
```

## 📚 Documentação

- [React Query Documentation](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)

## 📝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.
