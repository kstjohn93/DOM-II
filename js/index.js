// Your code goes here
allH2 = document.querySelectorAll('h2');
// 1
let h2Click = allH2.forEach(event => {
    event.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green';
    })
});

