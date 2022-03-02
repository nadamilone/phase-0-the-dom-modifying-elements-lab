// Write your code here!

//  1) no longer has DOM node 'main#main'

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Nada is the champion!"
newHeader.className = "victory";
//  2) has a 'newHeader' variable that points to node 'h1#victory'
//  3) has a 'newHeader' variable that points to node 'h1#victory'
//  4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

