// Sidebar toggle
const menuToggle = document.querySelector(".hamburger input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// Chat Room toggle
const squareToggle = document.querySelector(".square .chat-btn input");
const navChatToggle = document.querySelector(".outside input");
const chatRoom = document.querySelector(".chat-room");

squareToggle.addEventListener("click", () => {
  chatRoom.classList.toggle("slide");
  document.querySelector(".main").classList.toggle("slide");
});
navChatToggle.addEventListener("click", () => {
  chatRoom.classList.toggle("slide");
  document.querySelector(".main").classList.toggle("slide");
});

// Dark/Light mode toggle
const darkModeToggle = document.querySelector("#dark input");

darkModeToggle.addEventListener("click", () => {
  // Main background
  document.querySelector(".main").classList.toggle("dark");
  document.querySelector(".chat-room").classList.toggle("dark");
  document.querySelector(".modal").classList.toggle("dark");
});
