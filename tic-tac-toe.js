function TinyTable(){
    var ar=document.getElementById("Game");
    ar.innerHTML=""
    ar.className='Tiny'
    createGrid(3);
    ch=3;
    p=true
}

function MediumTable(){
    var ar=document.getElementById("Game");
    ar.innerHTML=""
    ar.className='Medium'
    createGrid(4);
    ch=4;
    p=true
}

function LargeTable(){
    var ar=document.getElementById("Game");
    ar.innerHTML=""
    ar.className='Large'
    createGrid(5);
    ch=5;
    p=true
}
let turn="X";
let X=new Array();
let O=new Array();
var ch=0;
var p=true;
var szm=1;

function createGrid(size) {
    turn=="X";
    for (let gi=0; gi<size; gi++) {
        for (let gj=0; gj<size; gj++) {
            let cell = document.createElement('div');
            cell.className='grid'
            cell.id = gi+'-'+gj;
            cell.addEventListener('click',()=>{
                gameT(cell)
            });
            document.getElementById("Game").appendChild(cell);
        }
    }
}

function gameT(c){
    if(p==true){
        if(turn=="X" && c.innerHTML==""){
            c.innerHTML=turn;
            turn="O";
            X.push(c.id)
        }
        else if (turn=="O" && c.innerHTML==""){
            c.innerHTML=turn;
            turn="X";
            O.push(c.id)
        }
        checkP(X, ch, "X");
        checkP(O, ch, "O");
    }
    else if(szm==size*size && p==true){
        alert("Döntetlen")
        p=false
    }
}

function checkP(a,s,t){
    let row=new Array();
    let column=new Array();
    let bishop=new Array();
    if(a.length>2){
        for (let gi=0; gi<a.length; gi++) {
            if(a[gi].charAt(0)==a[gi].charAt(2) || a[gi].charAt(0)+a[gi].charAt(2)==s-1){
                bishop.push(a[gi]);
            }
            row.push(a[gi].charAt(0));
            column.push(a[gi].charAt(2));
        }
        row.sort();
        column.sort();
        for (let j=0; j<row.length-s+1;j++){
            let r1=row[j];
            let r2=row[j+1];
            let r3=row[j+2];
            if(r1==r2){
                if(r1==r3){
                    if(s>=4){
                        let r4=row[j+3];
                        if(r1==r4){
                            if(s==5){
                                let r5=row[j+4];
                                if(r1==r5){
                                    alert(t+" nyert")
                                    p=false
                                    X.clear()
                                    O.clear()
                                }
                            }
                            else{
                                aalert(t+" nyert")
                                p=false
                                X.clear()
                                O.clear()
                            }
                        }
                    }
                    else{
                        alert(t+" nyert")
                        p=false
                        X.clear()
                        O.clear()
                    }   
                }
            }
        }
        for (let j=0; j<column.length-s+1;j++){
            let c1=column[j];
            let c2=column[j+1];
            let c3=column[j+2];
            if(c1==c2){
                if(c1==c3){
                    if(s>=4){
                        let c4=column[j+3];
                        if(c1==c4){
                            if(s==5){
                                let c5=column[j+4];
                                if(c1==c5){
                                    alert(t+" nyert")
                                    p=false
                                    X.clear()
                                    O.clear()
                                }
                            }
                            else{
                                alert(t+" nyert")
                                p=false
                                X.clear()
                                O.clear()
                            }
                        }
                    }
                    else{
                        alert(t+" nyert")
                        p=false
                        X.clear()
                        O.clear()
                    }   
                }
            }
        }
        if(bishop.length>1){
            let b1=0;
            let b2=0;
            for (let j=0; j<bishop.length;j++){
                if(bishop[j].charAt(0)==bishop[j].charAt(2)){
                    b1++;
                }
                else if(bishop[j].charAt(0)+bishop[j].charAt(2)==s-1){
                    b2++;
                }
            }

            if(b1==s||b2==s){
                alert(t+" nyert")
                p=false
                X.clear()
                O.clear()
            }
        }
    }
}