// Function to toggle the Add Task form visibility
function toggleAddTask() {
  const addTaskDiv = document.getElementById("addTask");

  if (getComputedStyle(addTaskDiv).display === "none") {
    addTaskDiv.style.display = "flex";
  } else {
    addTaskDiv.style.display = "none";
  }
}

function loadTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((tasks) => {
      const container = document.getElementById("taskContent");
      container.innerHTML = "";

      tasks.forEach((task) => {
        let p = document.createElement("p");
        p.textContent = task;
        container.appendChild(p);
      });
    });
}

window.onload = loadTasks;

// Function to save the task (Placeholder logic)
function saveBtn() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Task: taskText }),
  }).then(() => {
    loadTasks();
    taskInput.value = "";
    toggleAddTask();
  });
}

// Placeholder functions for other icons
function setAlarm() {
  alert("Alarm feature coming soon!");
}

function colorTheme() {
  alert("Theme toggle clicked!");
  // Logic to switch between light/dark mode would go here
}

function sortMenu() {
  alert("Sort menu clicked!");
}
