const itemText = document.getElementById("itemText");
const clearButton = document.getElementById("clear");
const settingsButton = document.getElementById("settings");

var items = []
var itemElements = []

var panelOpen = false;

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

function open()
{
    document.getElementById("myNav").style.width = "300px";
}

var defaultColor = document.getElementById("downloadText").style.color;

function close() {
    defaultColor = document.getElementById("downloadText").style.color;
    document.getElementById("downloadText").style = "color: #00000000;"
    document.getElementById("myNav").style.width = "0%";
    setTimeout('document.getElementById("downloadText").style.color = defaultColor', 500);
    // document.getElementById("downloadText").style.color = defaultColor;
}

function slidePanel() {
    if (panelOpen) {
        close()
    }
    else {
        open()
    }
    panelOpen = !panelOpen;
}

settingsButton.addEventListener("click", function () {
    slidePanel();
})

function download() {
    console.log("Downloading");
}