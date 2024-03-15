"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Header from "../Header/Header";

const About = () => {
  const [picture, setpicture] = useState([]);
  const getImages = async () => {
    const imageslist = await axios.get("https://picsum.photos/v2/list");
    const imagesData = imageslist.data;
    console.log(imagesData);
    setpicture(imagesData);

    console.log("error fetching");
  };
  const notify = () => {
    toast("login successfull");
  };
  return (
    <>
      <div className="bg-green-700 text-center text-white w-full h-full text-lg  ">
        {/* <Header /> */}
        <h1 className="about"> About page </h1>
        <button
          onClick={() => {
            getImages();
          }}
        >
          Get Images
        </button>

        {picture.map((val, i) => {
          return (
            <>
              <img
                key={i}
                src={val.download_url}
                width={300}
                height={300}
                className="inline-block m-10 rounded"
              />
              {/* <p>{val.author}</p> */}
            </>
          );
        })}
        <button onClick={notify}>click</button>
        <ToastContainer />
      </div>
    </>
  );
};

export default About;
