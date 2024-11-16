"use client";
import Layout from "@/components/layout";
import Modal from "@/components/modals/modal";
import CheckGreen from "@/components/svg/checkGreen";
import TodosLogo from "@/components/svg/todosLogo";
import { IoIosAddCircle } from "react-icons/io";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Todos = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [color, setColor] = useState<string>("#2d3748"); // 초기값: 다크 테마 색상
  const [colorShow, setColorShow] = useState<string>("");

  const [todos, setTodos] = useState<TodoType[]>([]);

  const addButtonHandle = async () => {
    if (newTodoInput.replace(/\s/g, "") !== "") {
      const newTodo = {
        id: Date.now(),
        title: newTodoInput,
        subTitle,
        color,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoInput("");
      setSubTitle("");
      setShowModal(false);
    }
  };

  const doneHandle = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const enterAddHandle = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addButtonHandle();
    }
  };

  return (
    <Layout mobileFootLess={true}>
      <div className="w-full flex flex-col items-center">
        {/* Modal */}
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <div
              className="w-96 h-auto rounded-lg shadow-lg p-6 flex flex-col justify-between text-gray-200"
              style={{ backgroundColor: color }} // 동적 배경색
            >
              <div className="border-b border-gray-700 pb-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold mb-1"
                  >
                    할일
                  </label>
                  <input
                    onChange={(e) => setNewTodoInput(e.target.value)}
                    value={newTodoInput}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-emerald-400"
                    id="title"
                    type="text"
                    placeholder="할일을 입력하세요"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subtitle"
                    className="block text-sm font-semibold mb-1"
                  >
                    내용
                  </label>
                  <input
                    onChange={(e) => setSubTitle(e.target.value)}
                    value={subTitle}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-emerald-400"
                    id="subtitle"
                    type="text"
                    placeholder="내용을 입력하세요"
                  />
                </div>
                <div className="flex gap-4 mt-8 justify-center">
                  {[
                    { color: "#FF0000", label: "빨강" },
                    { color: "#FFA500", label: "주황" },
                    { color: "#FFFF00", label: "노랑" },
                    { color: "#008000", label: "초록" },
                    { color: "#0000FF", label: "파랑" },
                  ].map(({ color: colorValue, label }) => (
                    <button
                      key={label}
                      onClick={() => {
                        setColor(colorValue);
                        setColorShow(label);
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-600 hover:scale-110 transition-transform"
                      style={{ backgroundColor: colorValue }}
                      aria-label={label}
                    ></button>
                  ))}
                </div>
                <div className="mt-4 text-sm">
                  현재 색: <span className="font-semibold">{colorShow}</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={addButtonHandle}
                  className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-500 transition-colors"
                >
                  만들기
                </button>
              </div>
            </div>
          </Modal>
        )}

        <div className="w-full px-12">
          <div className="max-w-[56rem] flex flex-col items-center mx-auto">
            {/* Mobile */}
            <div className="w-full lg:hidden text-left m-8">
              <TodosLogo size={200} />
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex w-full justify-between font-extrabold mt-32 mb-12">
              <TodosLogo />
              <IoIosAddCircle
                onClick={() => setShowModal(!showModal)}
                size={64}
                className="cursor-pointer hover:text-emerald-400 transition-colors"
              />
            </div>
            <div className="h-[70vh] w-full flex flex-col items-center">
              <div className="h-full w-full flex items-start">
                <div className="w-full text-[2rem] flex flex-col gap-4 relative">
                  {todos?.map((item, index) => (
                    <div key={index} className="relative h-fit">
                      <div
                        onClick={() => doneHandle(item.id)}
                        className={`bg-gray-300 ${
                          item.subTitle ? "rounded-t-lg" : "rounded-lg"
                        } w-full pl-16 py-4 cursor-pointer text-black text-[1.1rem] ${
                          item.isDone && "line-through text-opacity-30"
                        }`}
                      >
                        <div className="flex">
                          <div className="absolute left-2">
                            {item.isDone && <CheckGreen size={28} />}
                          </div>
                          <div
                            className="text-[16px] font-extrabold"
                            style={{ color: `${item.color}` }}
                          >
                            {item.title}
                          </div>
                        </div>
                      </div>
                      {item.subTitle && (
                        <div className="p-2 bg-gray-800 rounded-b-lg shadow-sm text-gray-200 text-sm font-medium">
                          {item.subTitle}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:hidden">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="px-12 py-2 bg-blue-500 text-white text-[1.5rem] font-normal rounded-md hover:bg-blue-400 transition-colors"
                >
                  Add new task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Todos;
