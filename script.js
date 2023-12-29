let container=document.querySelector('.container');

function createGrid(){
    for(let i=0;i<16*16;i++){
        let div=document.createElement('div');
        container.appendChild(div);
    }
}

createGrid();