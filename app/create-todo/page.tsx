"use client";
import React, { useState } from "react";

const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const page = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form className="form" onSubmit={handleCreate}>
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
  );
};

export default page;
