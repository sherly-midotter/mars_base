// Get the current date and time
let currentDate = new Date();

// Set the date to midnight for comparison
currentDate.setHours(0, 0, 0, 0);

// Store the current date as a string for comparison
let currentDateString = currentDate.toDateString();

// Get the input and list elements
const input = document.getElementById("priority-input");
const list = document.getElementById("priority-list");

// Check if there are any saved priorities
if (localStorage.getItem("priorities")) {
  // Get the saved priorities
  const savedPriorities = JSON.parse(localStorage.getItem("priorities"));

  // Check if the saved priorities were added today
  if (savedPriorities.date === currentDateString) {
    // Display the saved priorities
    displayPriorities(savedPriorities.list);
  } else {
    // Clear the saved priorities
    localStorage.removeItem("priorities");
  }
}

// Function to add a priority to the list
function addPriority() {
  // Get the priority text and trim whitespace
  const priority = input.value.trim();

  // Check if the input is not empty
  if (priority !== "") {
    // Create a new list item
    const li = document.createElement("li");
    li.innerText = priority;

    // Add a click event listener to mark the item as completed
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Add the item to the list
    list.appendChild(li);

    // Clear the input field
    input.value = "";

    // Save the priorities to local storage
    const priorities = {
      date: currentDateString,
    }
