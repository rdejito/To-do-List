// Function to toggle the Add Task form visibility
function toggleAddTask() {
    const addTaskDiv = document.getElementById('addTask');
    addTaskDiv.classList.toggle('hidden');
}

// Function to save the task (Placeholder logic)
function saveBtn() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Here you would normally add the task to a list
    console.log("Task Saved: " + taskText);
    
    // Clear input and hide form
    taskInput.value = "";
    toggleAddTask();
    alert("Task Saved Successfully!");
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