import React from "react";
import withPageTransitions from "./withPageTransitions";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a brief description of Project 1.",
    },
    {
      title: "Project 2",
      description: "This is a brief description of Project 2.",
    },
    {
      title: "Project 3",
      description: "This is a brief description of Project 3.",
    },
    // Add as many projects as you want...
  ];

  return (
    <div className="flex flex-col items-center m-12 gap-4">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img
            className="w-full"
            src="https://via.placeholder.com/400"
            alt="Placeholder image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withPageTransitions(Portfolio);
