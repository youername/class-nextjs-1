"use client";
import Layout from "@/components/layout";
import Modal from "@/components/modals/modal";
import CheckGreen from "@/components/svg/checkGreen";
import CheckOutline from "@/components/svg/checkOutline";
import TodosLogo from "@/components/svg/todosLogo";
import { createTodoFatch } from "@/utils/fatch/createTodoFatch";
import { doneTodosFatch } from "@/utils/fatch/doneTodoFatch";
import { removeTodosFatch } from "@/utils/fatch/removeTodoFatch";
import { todosFatch } from "@/utils/fatch/todosFatch";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Todos = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");

  const [todos, setTodos] = useState<TodoType[]>([]);

  const addButtonHandle = async () => {
    if (newTodoInput.replace(/\s/g, "") !== "") {
      const newTodo = await createTodoFatch({ title: newTodoInput });
      setNewTodoInput("");
      if (newTodo) {
        setTodos([
          ...todos,
          { id: newTodo.id, title: newTodoInput, isDone: false, subTitle },
        ]);
        setShowModal(false);
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

  useEffect(() => {
    console.log(newTodoInput);
  }, [newTodoInput]);

  return (
    <Layout mobileFootLess={true}>
      <div className="w-full flex flex-col items-center ">
        {/* modal */}
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <div className="w-64 h-64 bg-emerald-600">
              <div>
                <label htmlFor="title ">할일</label>
                <input
                  onChange={(e) => setNewTodoInput(e.target.value)}
                  className="text-slate-800"
                  id="title"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="title ">내용</label>
                <input
                  onChange={(e) => setSubTitle(e.target.value)}
                  className="text-slate-800"
                  id="title"
                  type="text"
                />
              </div>
              <button onClick={addButtonHandle}>만들기</button>
            </div>
          </Modal>
        )}

        <div className="w-full px-12">
          <div className="max-w-[56rem] flex flex-col items-center mx-auto">
            {/* mobile */}
            <div className="w-full lg:hidden text-left m-8">
              <TodosLogo size={200} />
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex w-full justify-between font-extrabold mt-32 mb-12">
              <TodosLogo />
              <div
                onClick={() => setShowModal(!showModal)}
                className="inline text-center px-12 py-2 bg-blue-500 text-white text-[1.5rem] font-normal rounded-md"
              >
                Add new task
              </div>
            </div>
            <div className="h-[70vh] w-full flex flex-col items-center">
              <div className="h-full w-full flex items-center">
                <div className="w-full text-[2rem] flex flex-col gap-4">
                  {todos?.map((item, index) => {
                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-5">
                          {item.isDone ? <CheckGreen size={28} /> : null}
                        </div>
                        <div
                          onClick={() => doneHandle(item.id)}
                          className={`bg-gray-900 rounded-lg w-full pl-16 py-4 cursor-pointer text-white text-[1.1rem] ${
                            item.isDone && "line-through text-opacity-30"
                          }`}
                        >
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="lg:hidden">
                <div
                  onClick={() => setShowModal(!showModal)}
                  className="inline text-center px-12 py-2 bg-blue-500 text-white text-[1.5rem] font-normal rounded-md"
                >
                  Add new task
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
