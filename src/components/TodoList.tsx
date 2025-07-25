"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Todo } from "@/types/todo";
import { ClipLoader } from "react-spinners";

export default function TodoList() {
  const searchParams = useSearchParams();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = searchParams?.get("userId") || "";
  const completed = searchParams?.get("completed") || "";

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        let data: Todo[] = await response.json();

        if (userId) {
          data = data.filter((todo) => todo.userId === parseInt(userId));
        }

        if (completed) {
          data = data.filter(
            (todo) => todo.completed === (completed === "true")
          );
        }

        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [userId, completed]);

  if (loading) {
    return (
      <div className="text-center py-15">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="bg-purple-300 p-4 rounded-lg shadow-md">
      {todos.length === 0 ? (
        <div className="text-center py-8 text-gray-600 text-2xl">
          No todos found .
        </div>
      ) : (
        <ul className="divide-y divide-gray-400">
          {todos.map((todo) => (
            <li key={todo.id} className="py-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="h-5 w-5 text-blue-600 rounded mr-3"
                />
                <div>
                  <p
                    className={`text-md font-medium ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-900"
                    }`}
                  >
                    {todo.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    User ID: {todo.userId}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
