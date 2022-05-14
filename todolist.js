const init = () => {
    form.addEventListener("submit", addTodoItem);
};
const form = document.querySelector(".todo-form");
const displayForm = ()=>{ 
    if (form.style.display == "block")
        form.style.display = "none";
    else form.style.display = "block";
};
const button = document.querySelector(".popup-button");
button.addEventListener("click", displayForm);




