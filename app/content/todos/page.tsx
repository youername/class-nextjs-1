"use client";
import { createTodoFatch } from "@/utils/fatch/createTodoFatch";
import { doneTodosFatch } from "@/utils/fatch/doneTodoFatch";
import { removeTodosFatch } from "@/utils/fatch/removeTodoFatch";
import { todosFatch } from "@/utils/fatch/todosFatch";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Todos = () => {
  const [newTodoInput, setNewTodoInput] = useState<string>("");

  const [todos, setTodos] = useState<TodoType[]>([]);

  const addButtonHandle = async () => {
    if (newTodoInput.replace(/\s/g, "") !== "") {
      const newTodo = await createTodoFatch({ title: newTodoInput });
      setNewTodoInput("");
      if (newTodo) {
        setTodos([
          ...todos,
          { id: newTodo.id, title: newTodoInput, isDone: false },
        ]);
      }
    }
  };

  const deleteHandle = (id: number) => {
    console.log(id);
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
    removeTodosFatch({ id });
  };

  const doneHandle = (id: number) => {
    const editTodos = todos.map(
      (todo) => {
        if (todo.id === id) {
          doneTodosFatch({ id, isDone: !todo.isDone });
          return { ...todo, isDone: !todo.isDone };
        } else {
          return { ...todo };
        }
      }
      //   todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
    );
    setTodos(editTodos);
  };

  useEffect(() => {
    todosFatch({ setTodos });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* <div className="m-8 mt-32">
        <Destructuring array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </div> */}

      <div className="title text-[5rem] font-extrabold mt-32">Todo</div>
      <div className="border-red-500">
        <input
          type="text"
          value={newTodoInput}
          placeholder="여기에 입력하세요"
          className="text-black text-3xl p-2 max-w-[26rem]"
          onChange={(e) => setNewTodoInput(e.target.value)}
        />

        {/* <button
          className="border bg-white text-black m-2 p-2 rounded-lg"
          onClick={() => {
            setInput("");
          }}
        >
          클리어
        </button> */}
      </div>

      <button
        className="border bg-white text-black m-2 p-2 rounded-lg"
        onClick={addButtonHandle}
      >
        할일 추가
      </button>
      <div className="text-[2rem]">
        {todos?.map((item, index) => {
          return (
            <div key={index} className="relative">
              <div
                onClick={() => doneHandle(item.id)}
                className={`border w-[25rem] m-4 p-2 cursor-pointer text-white ${
                  item.isDone && "line-through opacity-50"
                }`}
              >
                {item.title}
              </div>
              <FaDeleteLeft
                onClick={() => deleteHandle(item.id)}
                className="absolute right-8 top-4"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;

const ex = {
  todos: [
    {
      id: 1,
      done: false,
      todo: "12",
    },
  ],
};

// const ex = { todos: ["동해물과", "백두산이"] };

// function addText(글자: string) {
//   console.log("클릭");
//   todos.push(글자);
// }
