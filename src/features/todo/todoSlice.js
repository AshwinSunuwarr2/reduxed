import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world!",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, text: action.payload.text };
          } else return todo;
        });
      }
    },

    toggleCompleted: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !completed };
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
