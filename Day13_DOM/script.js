const ele = document.getElementById('first');
ele.textContent = "The text is changed by JS -  DOM Manipulation";

const un = document.createElement("ul");
ele.after(un);
const arr = ["Cricket", "Basket Ball", "Base Ball", "Hockey", "Tennis"];
const fragment = document.createDocumentFragment();
const store = [];
let i = 0;
for(let sport of arr) {
    const list = document.createElement("li");
    list.textContent = sport;
    fragment.append(list);
}
un.append(fragment);
ele.remove();

