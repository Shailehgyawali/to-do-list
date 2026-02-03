let input = document.querySelector(".lists");
let addBtn = document.getElementById("submit");
let listBox = document.querySelector(".work");
let bulb = document.querySelector(".bulb");
let box = document.querySelector(".div2");

let arr = JSON.parse(localStorage.getItem("arr")) || [];


if (arr.length === 0) {
    listBox.innerHTML = "<p>No work pending!!!</p>";
} else {
    arr.forEach(x => addItem(x));
}

addBtn.onclick = function () {
    let val = input.value.trim();
    if (val === "") return;

    if (listBox.innerText.includes("No work")) {
        listBox.innerHTML = "";
    }

    addItem(val);
    arr.push(val);
    localStorage.setItem("arr", JSON.stringify(arr));
    input.value = "";
};

input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") addBtn.click();
});

function addItem(text) {
    let li = document.createElement("li");
    li.innerText = text;

    let btn = document.createElement("button");
    btn.innerText = "Del";

    btn.onclick = function () {
        li.remove();
        arr = arr.filter(a => a !== text);
        localStorage.setItem("arr", JSON.stringify(arr));

        if (arr.length === 0) {
            listBox.innerHTML = "<p>No work pending!!!</p>";
        }
    };

    li.appendChild(btn);
    listBox.appendChild(li);
}


let dark = false;
bulb.onclick = function () {
    dark = !dark;
    document.body.style.background = dark ? "#222" : "#e0dddd";
    box.style.background = dark ? "#555" : "#efe3e3";
};
