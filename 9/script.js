const list = document.getElementById("list");
let draggedItem = null;

const items = document.querySelectorAll("#list li");

items.forEach(item => {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });

    item.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    item.addEventListener("drop", () => {
        if (draggedItem !== item) {
            let temp = item.innerHTML;
            item.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
        }
    });

});