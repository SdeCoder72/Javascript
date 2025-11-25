const container = document.getElementsByClassName('container');

parent.addEventListener('click', (e) => {
    const child = e.target;
    document.body.style.backgroundColor = child.id;

})