// console.log("szia");

const nezoter = document.getElementById("szinhazterem");
const tabla = document.createElement("table"); //tábla lértehozása 
const szekek = new Array();
for (let i = 1; i <= 10; i++) { //sorok

    szekek[i] = new Array();
    let sor = document.createElement("tr");

    for (let j = 1; j <= 15; j++) { //ülések

        szekek[i][j] = j; //ülések száma
        let cella = document.createElement("td");
        cella.innerHTML = szekek[i][j];

        cella.className = "szabad";
        cella.id = "szek" + i + j;

        sor.appendChild(cella)
    }

    tabla.appendChild(sor)

}
nezoter.appendChild(tabla);


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 15; j++) {

        document.getElementById("szek" + i + j).addEventListener("click", foglalas);

        function foglalas() {
            if (document.getElementById("szek" + i + j).className == "szabad") {
                document.getElementById("szek" + i + j).className = "foglalt";
            } else {
                document.getElementById("szek" + i + j).className = "szabad";
            }
            let foglaltszam = document.getElementsByClassName("foglalt");
          //  let szabadszam = document.getElementsByClassName("szabad");
            console.log(foglaltszam.length);
            document.getElementById("foglaltszam").innerHTML = foglaltszam.length;
          //  document.getElementById("szabadszam").innerHTML = szabadszam.length;

            if (foglaltszam.length > 0) {
                document.getElementById("osszesen").innerHTML = "";
                console.log("hello");
                let fizetendo = document.createElement("div");
                let kiir = document.createElement("p");
                fizetendo.appendChild(kiir);
                kiir.innerHTML = "fizetendő összeg: " + 2500 * foglaltszam.length+ " Ft";

                



                const osszesen=document.getElementById("osszesen");
                osszesen.appendChild(fizetendo);
            } else {

                document.getElementById("osszesen").innerHTML = "";

            }



        }


    }

}


function $(id){
    return document.getElementById(id);
}

const nev=$("nev");
const email=$("email");
const telefonszam=$("tel");
const gomb=$("gomb");

function vizsgal(){
    if(nev.value=="" || email.value=="" || telefonszam.value==""){
        window.alert("Adjon meg minden adatot")
    } else{
        window.alert("A rendelést elküldtük")
    }
}

gomb.addEventListener("click", vizsgal);







