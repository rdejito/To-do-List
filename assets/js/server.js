const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

//Get task from file
app.get("/tasks", (request, response) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) return response.json([]);
    response.json(JSON.parse(data));
  });
});

app.post("/tasks", (request, response) => {
  const newTask = request.body.task;

  fs.readFile("tasks.json", "utf8", (err, data) => {
    let tasks = [];

    if (!err) {
      tasks = JSON.parse(data);
    }

    tasks.push(newTask);

    fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), () => {
      response.json({ message: "Task Saved" });
    });
  });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
