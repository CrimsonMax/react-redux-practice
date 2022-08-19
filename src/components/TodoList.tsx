import React, { useEffect } from "react";
import { useActions } from "../store/hooks/useActions";
import { useTypedSelector } from "../store/hooks/useTypedSelector";

export const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(state => state.todo)
  const { fetchTodos, setTodoPage } = useActions()

  const pages = [1, 2, 3, 4, 5]
  const pageStyle = (elem: number) => {
    return {
      border: elem === page ? '2px solid green' : '1px solid grey',
      padding: 10,
      cursor: 'pointer',
    }
  }

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div>
      {todos.map(elem => <div key={elem.id}>{elem.id} - {elem.title}</div>)}
      <div style={{display: 'flex', marginTop: 20}}>
        {pages.map(elem => <div onClick={() => setTodoPage(elem)} key={elem} style={pageStyle(elem)}>{elem}</div>)}
      </div>
    </div>
  )
}