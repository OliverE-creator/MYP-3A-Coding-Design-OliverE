const facts = [
  "I love drawing and painting.",
  "My favorite sport is basketball.",
  "I enjoy reading.",
  "I like to bake."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", ("I love listening to music!") => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});
