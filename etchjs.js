const container =document.querySelector('#container');
//const row =document.createElement('div');
const column=[];
const grid=[];
function etched(number){
for(let i=0;i<number;i++){
    column[i]=document.createElement('div');
    container.appendChild(column[i]);
    for(let y=0;y<number;y++){
        grid[y]=document.createElement('div');
        //grid[y].textContent=`${i}`;
        column[i].appendChild(grid[y]);
        grid[y].classList.add('grid');
    }
    column[i].classList.add('column');
}
hova();}

function hova(){
const grids=document.querySelectorAll('.grid');
grids.forEach((grid)=>{
    grid.addEventListener('mouseover',function(e){
    //e.target.classList.add('hovered')
    let red=0,blue=0,green=0;
    red= randomrgb(red);
    console.log(red);
    blue= randomrgb(blue);
    green= randomrgb(green);
    e.target.style.cssText = `background: rgb(${red}, ${blue}, ${green});`;   
}
    )
})}

const button =document.querySelector('button');
button.addEventListener('click',()=>{
    let numba= prompt("Please enter number of grids <100 and >0");
   let trunumba=Number(numba);
   if(trunumba <0 || trunumba>100 || (typeof trunumba) !=='number')
   return;
    //const trunumba=integer.valueOF
    etched(Number(numba));
})
function randomrgb(rgb){
    rgb=Math.floor(Math.random()*255)+1;
    return rgb;
}