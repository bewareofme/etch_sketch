const container =document.querySelector('#container');
//const row =document.createElement('div');
const column=[];
const grid=[];
for(let i=0;i<16;i++){
    column[i]=document.createElement('div');
    container.appendChild(column[i]);
    for(let y=0;y<16;y++){
        grid[y]=document.createElement('div');
        //grid[y].textContent=`${i}`;
        column[i].appendChild(grid[y]);
        grid[y].classList.add('grid');
    }
    column[i].classList.add('column');
}
