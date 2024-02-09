import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddForm() {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(inputText));
        setInputText("");
      }}
      className="flex justify-center"
    >
      <input
        type="text"
        placeholder="Enter todo.."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="text-lgl font-sans px-4 py-[6px] rounded-l-md"
      />
      <button
        type="submit"
        className="bg-green-500 text-white text-xl font-mono font-semibold px-4 py-1 rounded-r-md"
      >
        Add
      </button>
    </form>
  );
}

export default AddForm;
