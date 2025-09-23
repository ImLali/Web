import input from "./input.js";

let txt = await input("Kérek egy szöveget: ");

console.log(txt);

const elsoMegoldas = txt.substring(0, 5);
console.log(elsoMegoldas);

const masodikMegoldas = txt.substring(2, 8);
console.log(masodikMegoldas);

const harmadikMegoldas = txt.substring(5, );
console.log(harmadikMegoldas);

const negyedikMegoldas = txt.substring(4, 10);
console.log(negyedikMegoldas);

const otodikMegoldas = txt.toUpperCase();
console.log(otodikMegoldas);

let hatodikMegoldas = txt;
for (let i = 0;i < txt.length;i++){
    if(i % 2 != 0){
        hatodikMegoldas += txt[i].toUpperCase();
    }
    else{
        hatodikMegoldas = txt[i].toLowerCase();
    }
}
console.log(hatodikMegoldas);

const hetedikMegoldas = txt.replaceAll("e","E");
console.log(`Nagy E betűkkel: ${hetedikMegoldas}`);
const nyolcadik = txt.split('e');
console.log(nyolcadik)