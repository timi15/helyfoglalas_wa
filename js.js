
// console.log("szia");

const nezoter= document.getElementById("szinhazterem");
const tabla= document.createElement("table"); //tábla lértehozása 
const szekek= new Array();
for (let i = 1; i <=10; i++) { //sorok

    szekek[i]=new Array();
    let sor= document.createElement("tr");

    for (let j = 1; j <=15; j++) { //ülések
       
        szekek[i][j]= j; //ülések száma
        let cella = document.createElement("td");
        cella.innerHTML= szekek[i][j];

        cella.className="szabad";
        cella.onclick= function(){
            if(this.className=="szabad"){
                this.className="foglalt";
            } else{
                this.className="szabad";
            }
            let foglaltszam= document.getElementsByClassName("foglalt");
            let szabadszam= document.getElementsByClassName("szabad");
            console.log(foglaltszam.length);
            document.getElementById("foglaltszam").innerHTML=foglaltszam.length;
            document.getElementById("szabadszam").innerHTML=szabadszam.length;

        }

        cella.id="szek"+i+j;

        sor.appendChild(cella)
    }
    
    tabla.appendChild(sor)
    
}
nezoter.appendChild(tabla);




