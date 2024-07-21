const notesContainer = document.querySelector(".notesContainer");
const createNotesBtn = document.querySelector(".notesBtn");

createNotesBtn.addEventListener("click", () => {
    // Create the note input box
    let inputBox = document.createElement("p");
    inputBox.classList.add("inputBox");
    inputBox.setAttribute("contentEditable", "true");

    // Create the delete button container
    let deleteBtnContainer = document.createElement("div");
    deleteBtnContainer.classList.add("delete-btn-container");

    // Create the delete button
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("ri-delete-bin-line", "delete-btn");

    // Append the delete button to the container
    deleteBtnContainer.appendChild(deleteBtn);

    // Append the input box and the delete button container to the notes container
    notesContainer.appendChild(inputBox);
    notesContainer.appendChild(deleteBtnContainer);

    // Add event listener to the delete button to remove the note
    deleteBtn.addEventListener("click", () => {
        inputBox.remove();
        deleteBtnContainer.remove();
    });
});
