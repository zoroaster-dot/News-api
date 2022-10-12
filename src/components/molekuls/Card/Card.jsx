import React from "react";

const Card = (props) => {
  return (
    <>
      {/* <div key={props.index} className="border-1 border-gray-700/30 rounded"> */}
      <p className="px-4 text-xs opacity-75 my-2">{props.source}</p>
      <img
        src={props.Image}
        // alt={props.titleImg}
        className="px-4 aspect-[4/2]"
      />
      <h1 className="text-lg px-4">{props.title}</h1>
      <p className="text-xs opacity-75 my-2 px-4">{props.author}</p>
      <p className="text-sm px-4">{props.description}</p>
      <div className="flex flex-row justify-between mt-4 px-4 py-2">
        <a
          href={props.url}
          target="_blank"
          className="bg-blue-300 py-2 px-4 rounded"
        >
        <button className ="bg-dark-700 text-white py-2 px-4 rounded">
          Read More
        </button>
        </a>
        <button className="bg-dark-700 text-white py-2 px-4 rounded">
          Save
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;