console.log("awards.js is loaded and running");
document.querySelectorAll('.awards__item').forEach(item => {
    item.addEventListener('mouseover', () => {
        console.log('Mouse over award item');
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', () => {
        console.log('Mouse out of award item');
        item.classList.remove('hovered');
    });
});