"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Todo {
  id: string;
  title: string;
  date: string;
}

const page = () => {
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  const searchParams = useSearchParams();
  const todoId = searchParams.get("id");

  useEffect(() => {
    const getTodo = async () => {
      const resp = await fetch(`/api/todos/${todoId}`);
      const todo = await resp.json();
      setTodo(todo);
    };
    if (todoId) {
      getTodo();
    }
  }, [todoId]);

  console.log(todo);

  return <div>{todoId}</div>;
};

export default page;
