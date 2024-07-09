function cambiarCaja(){
    let boton=document.getElementById("botonChat")
    let ChatCaja=document.getElementById("ChatCaja")

    if(ChatCaja.style.display=='none'|| ChatCaja.style.display==''){
        ChatCaja.style.display="block"
    }else{
        ChatCaja.style.display="none"
    }
}
