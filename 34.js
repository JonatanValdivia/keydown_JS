//Eventos parte 3 (keydown). removeEventListener()
var px = 0;
var py = 0;

function move(){
  var obj = document.getElementById("caixaMove");
  var tecla = event.keyCode; //CÓDIGO DA TECLA PRESSIONADA
  //37 -> esquerda; 38 -> cima, 39 ->direita, 40 -> baixo
  if(tecla == 37){
    px -= 10; 
    obj.style.left = px+"px";
  }else if(tecla == 38){
    py -= 10; 
    obj.style.top = py+"px";
  }else if(tecla == 39){
    px += 10; 
    obj.style.left = px+"px";
  }else if(tecla == 40){
    py += 10; 
    obj.style.top = py+"px";
  }else if(tecla == 13){
    alert("Evento keydown removido");
    obj.style.backgroundColor = "white"
    this.removeEventListener("keydown", move);
  }
  console.log(tecla);
}

document.addEventListener("keydown", move);
document.getElementById("caixaMove").addEventListener("click", () =>{
  var obj = document.getElementById("caixaMove");
  alert("Evento keydown adicionado")
  obj.style.backgroundColor = "rgba(157, 255, 0, 0.733)"
  document.addEventListener("keydown", move);
})