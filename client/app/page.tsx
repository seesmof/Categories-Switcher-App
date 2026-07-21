"use client";

import { create } from "zustand";

interface Cart {
  name: string;
  description: string;
  price: number;
}

interface IContext {
  cart: Cart[];
}

const useContext = create<IContext>((set) => ({
  cart: [],
}));

export default function IndexPage() {
  const cart = useContext((state) => state.cart);

  return (
    <div className="bg-linear-to-br to-sky-50 min-h-screen">
      <div className="p-3 max-w-md mx-auto w-full">
        <form className="bg-white rounded-md p-3">
          <div className="flex flex-col gap-1">
            <label htmlFor=""></label>
          </div>
        </form>
      </div>
    </div>
  );
}
