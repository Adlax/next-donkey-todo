"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "next/router";

interface Todo {
  id: string;
  title: string;
  date: string;
}

const page = () => {
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const todoId = searchParams.get("id");

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsDisabled(true);
    if (!date || !title) {
      return alert("Fields missing");
    }
    const response = await fetch(`/api/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, date }),
    });
    const resp = await response.json();
    if (response.ok) {
      console.log("SUCCESS");
      toast.success("Todo updated!", {
        onClose: () => router.push("/todos"),
      });
    }
  };

  useEffect(() => {
    const getTodo = async () => {
      const resp = await fetch(`/api/todos/${todoId}`);
      if (resp.ok) {
        const todo = await resp.json();
        setTodo(todo);
        setTitle(todo.title);
        setDate(todo.date);
      } else {
        console.log("Error while fetching the todo");
        router.push("/todos");
      }
    };
    if (todoId) {
      getTodo();
    }
  }, [todoId]);

  console.log(todo);

  return todo ? (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">
          <h1>Change todo</h1>
        </div>
        <div className="align-horizontal">
          <div className="todo-container">
            <label htmlFor="" className="placeholder">
              Todo
            </label>
            <input
              type="text"
              value={title}
              className="input"
              placeholder="Write here"
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="date-container">
            <label htmlFor="" className="placeholder">
              Date
            </label>
            <input
              type="date"
              value={date}
              className="input"
              placeholder="Pick a date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
          <button
            className="btn btn-success"
            type="submit"
            disabled={isDisabled}
          >
            Update
          </button>
          <Link className="redirect-link" href={"/todos"}>
            Back to todos
          </Link>
        </div>
      </form>
    </>
  ) : (
    <p>Please wait...</p>
  );
};

export default page;
