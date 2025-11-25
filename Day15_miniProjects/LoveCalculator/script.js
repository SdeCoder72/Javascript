const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const p1 = document.getElementById('person1');
    const p2 = document.getElementById('person2');
    const l1 = p1.value.length;
    const l2 = p2.value.length;

    const res = Math.pow(l1+l2, 4)%101;
    document.querySelector('h2').textContent = `Result: ${res}`;
    form.reset();
})