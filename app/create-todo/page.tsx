"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const notifyError = () => toast.error("Fill all the fields please");
  const notifySuccess = () =>
    toast.success("Todo created succesfully", {
      onClose: () => router.push("/todos"),
    });

  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !date) {
      notifyError();
      return;
    }
    setIsDisabled(true);
    const response = await fetch(`/api/create-todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, date }),
    });
    if (response.ok) {
      notifySuccess();
    } else {
      alert("Error while creating the todo");
    }
  };

  return (
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
        theme="light"
      />
      <form className="form" onSubmit={handleCreateTodo}>
        <div className="title">
          <h1>Create a Todo</h1>
        </div>
        <div className="align-horizontal">
          <div className="todo-container">
            <label htmlFor="" className="placeholder">
              Tache
            </label>
            <input
              type="text"
              name=""
              id=""
              className="input"
              placeholder="Ecrivez le todo ici"
              autoComplete="off"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </div>
          <div className="date-container">
            <label htmlFor="" className="placeholder">
              Date
            </label>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              className="input"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="button-container">
          {!isDisabled && (
            <button type="submit" className="btn-success">
              Creer
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default page;
