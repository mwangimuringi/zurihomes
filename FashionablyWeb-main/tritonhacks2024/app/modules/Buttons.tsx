"use client";
import "../globals.css";

export default function StartButton() {

  async function test() {
    console.log("button clicked")
  }

  return (
    <form action={test}>
        <div className="w-full align-middle text-center ">
        <button 
        type="submit"
          className="border-4 rounded"
        > 
          Push Me
        </button>
      </div>
    </form>
  );
}