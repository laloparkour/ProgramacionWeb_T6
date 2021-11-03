
const myUl = document.getElementById("contenedor");
const myButton = document.getElementById("btnClick");
const liReferences = [];

let contador = 1;

myButton.onclick = (event) => {

    const miLi =  document.createElement("li");

    const btn = document.createElement("button")
    btn.className = 'remove';


    miLi.innerText = `Elemento lista #${contador}`;

    btn.innerHTML = 'Eliminar';

    miLi.appendChild(btn);

    liReferences.push(miLi);
    myUl.appendChild(miLi);

    
    eliminar();
    
    contador++;
    
}

const eliminar = () => {
    
    let botones = document.getElementsByClassName("remove");
    for (let i = 0; i < botones.length; i++) {
        botones[i].onclick = function() {
        
            liReferences[i].remove()
            
        }
        
    }
    
}



