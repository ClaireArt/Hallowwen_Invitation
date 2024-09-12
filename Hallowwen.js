//JavaScript

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

let text = document.getElementById('parallax_text');
let treeLeft = document.getElementById('tree_left');
let treeRight = document.getElementById('tree_right');
let gateLeft = document.getElementById('gate_left');
let gateRight = document.getElementById('gate_right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let textMaxMargin = 800;
    let treeMaxMovement = 500;
    let gateMaxMovement = 150;


    text.style.marginTop = Math.min(value * 2.5, textMaxMargin) + 'px';
    treeLeft.style.left = Math.min(value * -1.5, treeMaxMovement) + 'px';
    treeRight.style.right = Math.min(value * -1.5, treeMaxMovement) + 'px';
    gateLeft.style.left = Math.min(value * 0.5, gateMaxMovement) + 'px';
    gateRight.style.right = Math.min(value * 0.5, gateMaxMovement) + 'px';
});

