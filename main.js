function nComentario(){
    let li=document.createElement("li");
    let valoringresado = document.getElementById(valoringresado);
    let text = document.createTextNode(valoringresado);
    li.appendChild(text);

    if(valoringresado ===''){
        alert("Ingrese un comentario")
    }
    else{
        document.getElementById("comentarios").appendChild(li);
    }
    document.getElementById("nuevoComentarios").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "Close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("Close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}