import React, { useEffect } from "react";
import AddForm from "./AddForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function MainTodo() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>
        <AddForm />
      </div>
      <div>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
      </div>
    </>
  );
}

export default MainTodo;
