const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display notes
function displayNotes() {
    container.innerHTML = "";

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;

        container.appendChild(div);
    });
}

// Add note
addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
});

// Delete note
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

// Initial load
displayNotes();