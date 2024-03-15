"use client";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
// import Header from "../Header/Header";
const Courses = () => {
  const fruits = [
    {
      type: "apples",
      pieces: 24,
    },
    {
      type: "pears",
      pieces: 21,
    },
    {
      type: "oranges",
      pieces: 20,
    },
    {
      type: "peaches",
      pieces: 4,
    },
  ];
  const [arr, setarr] = useState([]);

  const addItems = () => {
    // let totalfruits = arr.push(fruits);
    let totalfruits = [...arr, fruits];
    console.log("totalfruits", totalfruits);
    setarr(totalfruits);
    // addarr([...arr], fruits);
  };
  return (
    <>
      <div>
        <h1>Fruits Data</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Prices</th>
          </tr>

          {fruits.map((val) => {
            return (
              <>
                <tr>
                  <td>{val.type}</td>
                  <td>{val.pieces}</td>
                  <td>
                    <button
                      onClick={addItems}
                      className="bg-green-600 text-white px-4 py-3 rounded-md"
                    >
                      add to cart
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
        <div className="m-5 p-10 w-full bg-slate-300">
          <span className="text-white bg-red-500  w-8 h-8 font-bold mt-1 mr-5 flex justify-center rounded-full ">
            {arr.length}
          </span>
          <CiShoppingCart className="carticon" />
        </div>
      </div>
    </>
  );
};

export default Courses;
