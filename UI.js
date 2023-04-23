const itemText = document.getElementById("itemText");
const clearButton = document.getElementById("clear");
const addButton = document.getElementById("add");
const settingsButton = document.getElementById("settings");
const downloadButton = document.getElementById("downloadText");

var downloadCount = 1;

const SETTINGS_WIDTH = 500;

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

    if (text.length > 0) {
        const newItem = new Item(text);
        items.push(newItem);
        console.log(items)
    
        const newP = document.createElement('p');
        newP.innerHTML = text + "";
        newP.className = "ingredient"
        itemsList.append(newP);
        
        var scroller = document.getElementById("items");
        scroller.scrollTop = scroller.scrollHeight;

        itemText.value = ""
    }   
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
    let screenWidth = SETTINGS_WIDTH;
    if (screen.width < SETTINGS_WIDTH + 200) {
        screenWidth = screen.width
    }
    
    document.getElementById("myNav").style.width = screenWidth + "px";;
    document.getElementById("downloadText").style.color = defaultColor
}

var defaultColor = document.getElementById("downloadText").style.color;
document.getElementById("downloadText").style = "color: #00000000;"

function close() {
    defaultColor = document.getElementById("downloadText").style.color;
    document.getElementById("downloadText").style = "color: #00000000;"
    document.getElementById("myNav").style.width = "0%";
    // setTimeout('document.getElementById("downloadText").style.color = defaultColor', 500);
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

    if (items.length > 0) {
            
        // Creation/writing
        const doc = new jsPDF();
        // Set font size and type
        doc.setFontSize(22);
        doc.setFont('courier', 'bold');

        // Add heading to the PDF
        doc.text("My Shopping List", 20, 20);

        // Set font size and type for the date
        doc.setFontSize(14);
        doc.setFont('courier', 'normal');

        // Get the current date and format it
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();

        // Add the date to the PDF on a new line
        doc.text(`Date: ${dateString}`, 20, 30);

        doc.setFontSize(12);
        doc.setFont('courier', 'normal');

        doc.lineHeight = 1.0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            doc.text(item.name, 20, 45 + (i * 7));
        }

        // Downloading
        doc.save("Shopping_List_" + downloadCount + ".pdf");
        downloadCount += 1;
    }

    else {
        console.log("No items");
    }
}

downloadButton.addEventListener("click", function () {
    download();
})

addButton.addEventListener("click", function () {
    createItem();
})