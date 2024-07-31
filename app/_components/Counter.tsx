"use client";
import { useState } from "react";

export interface UserProp {
  users: [];
}

export default function Counter({ users }: UserProp) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {users.length} on this cabin</p>
      <button onClick={() => setCount((c) => c + 1)}> click {count}</button>
    </div>
  );
}
