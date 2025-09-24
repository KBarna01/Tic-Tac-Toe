function TinyTable(){
    var ar=document.getElementById("Game");
    ar.innerHTML=""
    ar.className='Tiny'
    createGrid(3);
}

function MediumTable(){
    var ar=document.getElementById("Game");
    ar.innerHTML=""
    ar.className='Medium'
    createGrid(4);
}

function LargeTable(){
    var ar=document.getElementById("Game");
    ar.innerHTML=""
    ar.className='Large'
    createGrid(5);
}
let turn="X";
let X=new Array();
let O=new Array();

function createGrid(size) {
    for (let gi=0; gi<size; gi++) {
        for (let gj=0; gj<size; gj++) {
            let cell = document.createElement('div');
            cell.className='grid'
            cell.id = gi+'-'+gj;
            cell.addEventListener('click',()=>{
                gameT(cell, size)
            });
            document.getElementById("Game").appendChild(cell);
        }
    }
}

function gameT(c, s){
    if(turn=="X" && c.innerHTML==""){
        c.innerHTML=turn;
        turn="O";
    }
    else if (turn=="O" && c.innerHTML==""){
        c.innerHTML=turn;
        turn="X";
    }
    checkP(s);
}

function checkP(s){
    let gr=document.getElementById("Game")
    
    
    /*for (let gi=0; gi<s; gi++) {
        for (let gj=0; gj<s; gj++) {
                alert(gr.)
            };
        }
    }
    alert(i)
    let r=i.charAt(0);
    let co=i.charAt(2);
    let row=false;
    let column=false;
    let bishop=false;

    

    if(c.grid)
    for(let ir=0; ir<s;ir++){
        let v=c.innerHTML
        for(let ic=0; ic<s;ic++){
            if()
        }
    }

    for(let ic=0; ic<s;ic++){
        
    }

    for(let ib=0; ib<s;ib++){
        
    }*/
}