"use client";
import { Button } from "@/components/ui/button";
import useStore from "@/store/state";

const Counter = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div className="w-full flex justify-center items-center p-20 gap-5 flex-col">
      <h1>{count}</h1>

      <div className="flex gap-10">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
