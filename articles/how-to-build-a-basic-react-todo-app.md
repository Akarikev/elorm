---
id: "how-to-build-a-basic-react-todo-app"
title: "how to build a basic react todo app "
category: "Tech"
description: "learn to build a basic todo app using reactjs"
date: "03-06-2024"
image: "react-app.png"
---

## Introduction

Creating a simple Todo application is a great way to get started with React, as it covers fundamental concepts such as state management, component structure, and handling user input. In this guide, I'll walk through building a basic Todo app step by step.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [bun](https://bun.sh)

In this tutorial we'll be using bun, you can use any of the above package managers, I just feel bun is awesomely fast.
**You should also be familiar with JavaScript and basic concepts of React.**

## Step 1: Setting Up the React Project

First, we'll create a new React project using Create React App.

```bash
bunx create-react-app react-todo-app
cd react-todo-app
```

After the setup is complete, navigate to the project directory and start the development server.

```bash
bun start
```

Your new React application should now be running at `http://localhost:3000/`.

## Step 2: Cleaning Up the Project

Before we start building our Todo app, let's clean up the default files created by Create React App. Delete the following files in the `src` directory:

- `App.test.js`
- `logo.svg`
- `serviceWorker.js`
- `setupTests.js`

Next, update the `index.js` and `App.css` files to remove references to the deleted files.

`index.js` should look like this:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

`App.css` can be simplified or replaced with your own styles.

## Step 3: Creating the Todo App Structure

Now, let's start building our Todo app. First, update `App.js` to create the basic structure.

`src/App.js`:

```javascript
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => handleToggleComplete(index)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## Step 4: Adding Basic Styles

Let's add some basic styles to make our Todo app look better. Update `App.css` as follows:

_you can use tailwindcss for this too_

`src/App.css`:

```css
.App {
  text-align: center;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
}

button {
  padding: 10px;
  font-size: 16px;
  margin-left: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

li button {
  margin-left: 10px;
}
```

## Step 5: Running and Testing the App

At this point, your Todo app should be functional. You can add new todos, mark them as complete, and delete them.

To run your app, make sure you're in the project directory and use:

```bash
bun start
```

Your app should be running at `http://localhost:3000/`.

## Conclusion

Congratulations! You've built a basic Todo app using React. This project covered fundamental React concepts such as state management, handling user input, and updating the UI based on state changes.

This is just the basics of react!

> _Whiles I was still learning react I struggled with creating this, you should know that, learning how to code, takes process, it requires patience too, don't be scared to check the internet for help or ask others too. Take your time, relax and chill, learn at your own pace!_

Feel free to expand on this project by adding features like editing todos, persisting them in local storage, or integrating with an API backend. Happy coding!
