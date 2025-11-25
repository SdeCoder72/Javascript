const ele = document.getElementById("box1");
ele.addEventListener('click', ()=>{
    ele.textContent = "I'm clicked";
})
const container = document.getElementById("container");
for(let child of container.children) {
    child.addEventListener('click', ()=> {
        child.textContent = "I'm Clicked"
    })
}
console.log(container.children);

