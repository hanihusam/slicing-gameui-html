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
});
navChatToggle.addEventListener("click", () => {
  chatRoom.classList.toggle("slide");
});
