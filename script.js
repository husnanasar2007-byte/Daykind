const prompts = [
  "What drained your energy today?",
  "What made you feel even slightly okay?",
  "Did you feel heard today?",
  "What is something you avoided?",
  "What do you wish tomorrow feels like?"
];

const insights = [
  "Noticing your feelings is already a step forward.",
  "You don’t need to fix everything today.",
  "Small awareness leads to real change.",
  "It’s okay if today wasn’t your best.",
  "Rest can be productive too."
];

const promptBox = document.getElementById("prompt");
const reflection = document.getElementById("reflection");
const result = document.getElementById("result");
const insightText = document.getElementById("insight");
const quoteText = document.getElementById("quote");

promptBox.textContent =
  prompts[Math.floor(Math.random() * prompts.length)];

document.getElementById("submit").onclick = async () => {
  if (!reflection.value.trim()) return;

  insightText.textContent =
    insights[Math.floor(Math.random() * insights.length)];

  // 🔹 REAL API USAGE (Quotes API)
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    quoteText.textContent = `"${data.content}" — ${data.author}`;
  } catch {
    quoteText.textContent = "A quiet moment can also be enough.";
  }

  result.classList.remove("hidden");
};

function goToScreen2() {
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
}

function goToScreen3() {
  document.getElementById("screen2").classList.remove("active");
  document.getElementById("screen3").classList.add("active");

  document.getElementById("insight").textContent =
    "It’s okay if today wasn’t your best. You showed up.";
}
