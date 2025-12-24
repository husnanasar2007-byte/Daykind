function generateInsight() {
  const text = document.getElementById("reflection").value;
  const output = document.getElementById("output");

  if (text.trim() === "") {
    output.textContent = "Please write something about your day.";
    return;
  }

  // Demo insight (replace with Gemini API later)
  output.textContent =
    "It sounds like today carried emotional weight. Take a moment to acknowledge your feelings and be kind to yourself.";
}
