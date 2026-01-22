"use client";
import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

interface Todo {
  id: string;
  title: string;
  date: string;
}

const page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleEdit = (todo: Todo) => {
    router.push(`/todos/edit?id=${todo.id}`);
  };

  useEffect(() => {
    const getTodos = async () => {
      const resp = await fetch(`/api/todos`);
      const data = await resp.json();
      console.log(data);
      setTodos(data);
      setIsLoading(false);
    };
    getTodos();
  }, []);

  return (
    <section>
      <h1 className="text-center">
        {todos.length === 0 && (
          <p className="loader">
            {isLoading ? "Please wait" : "No todos to display"}
          </p>
        )}
        <div className="listContainer">
          <ul className="ul-list mb w-60 shadow-hover" role="list">
            {todos.map((todo: Todo) => (
              <li className="li-list" key={todo.id}>
                <div className="todo">
                  <p className="date">{formatDate(todo.date)}</p>
                  <h2>{todo.title}</h2>
                  <div>
                    <button
                      className="btn btn-update"
                      onClick={() => {
                        handleEdit(todo);
                      }}
                    >
                      <PencilSquareIcon style={{ width: "20px" }} />
                    </button>
                    <button className="btn btn-delete" onClick={() => {}}>
                      <TrashIcon style={{ width: "20px" }} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </h1>
    </section>
  );
};

export default page;
