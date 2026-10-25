const noteField = document.getElementById("note");
const statusField = document.getElementById("status");
const saveButton = document.getElementById("save");
const clearButton = document.getElementById("clear");

// Load the previously saved note when the popup opens.
chrome.storage.local.get(["quickNote"], (result) => {
  noteField.value = result.quickNote || "";
});

// Save the note to local browser storage.
saveButton.addEventListener("click", () => {
  const note = noteField.value.trim();
  chrome.storage.local.set({ quickNote: note }, () => {
    statusField.textContent = "Note saved successfully.";
  });
});

// Remove the saved note.
clearButton.addEventListener("click", () => {
  chrome.storage.local.remove("quickNote", () => {
    noteField.value = "";
    statusField.textContent = "Note cleared.";
  });
});
