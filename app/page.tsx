"use client";
import useStore from "@/store/state";
export default function Home() {
  const { count } = useStore();
  return (
    <div className="flex items-start p-10 justify-center min-h-screen ">
      <h1>{count}</h1>
    </div>
  );
}
