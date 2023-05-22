let inputField = document.querySelector(".input-field");
let addBtn = document.querySelector(".add");
let tasks = document.querySelector(".tasks ul");
let allLists = document.querySelectorAll(".tasks ul li");
let warningText = document.querySelector(".warning");
let editBtn = document.querySelector("ul li small");




inputField.addEventListener("keypress", enterClicked);

function dataEntry() {
    if (inputField.value === "") {
        warningText.style.display = "block";
    } else {
        warningText.style.display = "none";
        let list = document.createElement("li");
        list.innerHTML = inputField.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);

        let edit = document.createElement("div");
        edit.classList.add("small");
        edit.innerHTML = "\u2B79";
        list.appendChild(edit);



        span.addEventListener('click', function (e) {
            if (e.target.tagName = "span") {
                e.target.parentElement.remove();

            }
        })

        tasks.appendChild(list);
    }
    inputField.value = "";
    storingInLocalStorage();

}

tasks.addEventListener('click', function (e) {
    if (e.target.tagName = "li") {
        e.target.classList.toggle("checked");
        storingInLocalStorage();
    }
})
function enterClicked(e) {
    if (e.key === "Enter") {
        dataEntry()
    }
};
function addTask(e) {
    dataEntry();
}

addBtn.addEventListener("click", addTask);


function storingInLocalStorage() {
    localStorage.setItem("datas", tasks.innerHTML)
}

function gettingItemsFromLocalStorage() {
    tasks.innerHTML = localStorage.getItem("datas");
}

gettingItemsFromLocalStorage();






