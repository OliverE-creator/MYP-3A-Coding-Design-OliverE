const facts = [
  "I love drawing and painting.",
  "My favorite sport is basketball.",
  "I enjoy reading.",
  "I like to bake."
];
background-color:#002366
const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});
