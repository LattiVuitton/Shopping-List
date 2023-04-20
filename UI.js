var itemText = document.getElementById("itemText");

function createItem() {
    const itemsList = document.getElementById("items");

    let text = itemText.value;

    const newP = document.createElement('p');
    newP.innerHTML = text + "";
    itemsList.append(newP);

    itemText.value = ""
}



itemText.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        createItem();
    }
});