import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [editableText, setEditableText] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);

  const [isComplete, setIsComplete] = useState(false);

  const handleEdit = (e) => {
    setIsEditable((prev) => !prev);
    dispatch(updateTodo({ id: todo.id, text: e.target.value }));
    setIsComplete(false);
  };

  return (
    <>
      <div className="mt-4 p-4 flex justify-center items-center">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => {
            setIsEditable(false);
            setIsComplete((prev) => !prev);
          }}
          className="p-2 h-4 w-4 mx-2"
        />
        <textarea
          type="text"
          value={editableText}
          onChange={(e) => setEditableText(e.target.value)}
          readOnly={!isEditable}
          className={`${
            isEditable ? "bg-green-400" : ""
          } outline-none rounded-sm ${
            isComplete ? "line-through" : ""
          } resize-none px-1 h-10 w-[184px] md:w-[320px]`}
        />
        <button
          onClick={handleEdit}
          disabled={isComplete}
          className={`bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold py-2 px-2 rounded ml-2${
            isComplete
              ? " bg-blue-800/50 blur-[1px] hover:bg-blue-800/50 active:bg-blue-800/50"
              : ""
          } md:px-4`}
        >
          {isEditable ? "📁" : "✏️"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-500 hover:bg-red-700 active:bg-red-600 py-2 px-2 rounded ml-2 md:px-4"
        >
          🗑️
        </button>
      </div>
    </>
  );
}

export default TodoItem;
