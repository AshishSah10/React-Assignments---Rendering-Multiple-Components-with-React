import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const dreamProjects = [
    {
      name: "ToDoList App",
      description: "It will contain things we schedule for a day."
    },
    {
      name: "IMDB Movie App",
      description: "API based web app for searching about movies."
    }
  ];
  return (
    <ol>
      {dreamProjects.map((project, index) => (
        <li key={`${index}`}>
          <p data-ns-test="project-name">{project.name}</p>
          <p data-ns-test="project-description">{project.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default App;
