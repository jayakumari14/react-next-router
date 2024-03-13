"use client";
import React, { useState } from "react";
// import Header from "../Header/Header";
const Contact = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [arr, setarr] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const addedTask = [...arr, { task, desc }];
    setarr(addedTask);
    console.log(setarr);
    settask("");
    setdesc("");
  };
  const deleteTask = (i) => {
    let removeTask = [...arr];
    removeTask.splice(i, 1);
    setarr(removeTask);
    console.log("deleted");
  };
  let renderTask = <h2 className="text-center mb-5">No Task Available</h2>;
  if (arr.length > 0) {
    renderTask = arr.map((val, i) => {
      return (
        <>
          <ul className="flex justify-between items-center m-5">
            <li key={i}>{val.task}</li>
            <li>{val.desc}</li>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-md m-3"
              onClick={() => {
                deleteTask(i);
              }}
            >
              Delete
            </button>
          </ul>
        </>
      );
    });
  }

  return (
    <>
      <div className="bg-gray-200">
        <h1 className="text-center mt-5 font-semibold">TODO LIST</h1>
        <div className="flex justify-center text-center m-10   bg-green-400">
          <form onSubmit={submitForm} className=" p-5 ">
            <input
              type="text"
              placeholder="enter your task name"
              className="m-5"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="enter task description"
              className="m-4"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
            <button className="bg-green-800 text-white px-3 py-2 rounded-md m-3">
              ADD
            </button>
          </form>
        </div>
        <div>{renderTask}</div>
        {}
      </div>
    </>
  );
};

export default Contact;
