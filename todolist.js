const checkBox = document.querySelector(".check-box");
checkBox.addEventListener("click",todoCheck);
//check-box 누르면 check-icon을 추가하고, 글자 색 변경하는 todoCheck 함수
function todoCheck(){
    //check-box 누르면 check-icon 추가
    const check = document.querySelector(".check-icon");
    check.style.display == "block"? check.style.display = "none": check.style.display = "block"
    check.addEventListener("click",todoCheck);
    //check-box 누르면 글자색 변경
    // const newTodoText = 
};

const plusTodo = document.querySelector(".plus-button");
plusTodo.addEventListener("click",addTodoItem);

//plus-button 누르면 todo-form 추가하고, 버튼을 아래로 옮기는 addTodoItem 함수
function addTodoForm(){
};

















// var now = new Date();
// var month = now.getMonth();
// $(".month").text(month+1);
// var date = now.getDate()+1;
// const nowdate = document.querySelector("day");

// // $(".day").text(date+1);

// var day = now.getDay();
// $(".today").text(day);








