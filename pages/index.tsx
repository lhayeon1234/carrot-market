import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen xl:place-content-center gap-10 xl:grid-cols-3 lg:grid-cols-2 bg-slate-400 py-20 px-6">
      <div className="rounded-2xl dark:bg-gray-800 dark:text-white bg-white p-10 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span> <span className="font-semibold">$99</span>
        </div>
        <div className="mt-5 rounded-xl bg-blue-500 p-3 text-center text-white">
          Checkout
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div>
          <div className="relative -top-5 rounded-3xl bg-white p-6">
            <div className="relative -top-16 flex items-end justify-between">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 rounded-full bg-zinc-200 group-hover:bg-orange-500 transition-colors" />
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Spent</span>
                <span className="font-medium">$2,310</span>
              </div>
            </div>
            <div className="relative -mb-5 flex flex-col items-center">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-400">미국</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️4.9dss</span>
            <span className="rounded-md p-2 shadow-xl">💖💖💖💖</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="mb-1.5 text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-2 mb-5 flex justify-between">
            <div>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="flex  aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-center">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-center">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">$450</span>
            <button className="justify-center rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
