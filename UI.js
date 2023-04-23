const itemText = document.getElementById("itemText");
const clearButton = document.getElementById("clear");
const settingsButton = document.getElementById("settings");

var items = []
var itemElements = []

class Item {
    constructor(name) {
        this.name = name;
    }
}

function clear() {
    console.log("Clearing")
    document.querySelectorAll('.ingredient').forEach(e => e.remove());
    items = []
}

function createItem() {
    const itemsList = document.getElementById("items");

    let text = itemText.value;

    const newItem = new Item(text);
    items.push(newItem);
    console.log(items)

    const newP = document.createElement('p');
    newP.innerHTML = text + "";
    newP.className = "ingredient"
    itemsList.append(newP);

    itemText.value = ""
    newP.style.backgroundColor = "red";
}



itemText.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        createItem();
    }
});

clearButton.addEventListener("click", function () {
    clear()
})


function slidePanel() {
    console.log("Sliding")
}

settingsButton.addEventListener("click", function () {
    slidePanel();
})
