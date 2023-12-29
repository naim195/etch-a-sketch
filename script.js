let container=document.querySelector('.container');

function createGrid(n){
    for(let i=0;i<n*n;i++){
        let div=document.createElement('div');
        div.className='square';
        if(n>16){ 
            div.style.width=960/n+'px';
            div.style.height=960/n+'px';            
        }
        container.appendChild(div);
    }

    let squares=document.querySelectorAll('.square');
squares.forEach(square=>{
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'white';

    });
    // square.addEventListener('mouseout', () => {
    //     square.style.backgroundColor = 'lightgray';
    // });
});
}

let button = document.querySelector('#button');
button.addEventListener('click', () => {
    let n = prompt('Enter the number of squares per side (up to 100):');
    n = parseInt(n);
    if (isNaN(n) || n <= 0 || n > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }
    createGrid(n);
});

