let reload = document.getElementById('encuesta');

document.getElementById("btn").addEventListener("click", function(){
    let option = revisar_boton_x_boton('receta_favorita');
        if (option == 'Oreos') {
            alert("Respuesta Correcta!");
         } 
         else {
            alert ("Oops! Volve a intentar!");
            location.reload();
         }
})

function revisar_boton_x_boton(name_input) {
    var botones = document.getElementsByName(name_input);
    for (let i = 0; i < botones.length; i++) {
        if (botones[i].checked){ 
            return botones[i].value;
        }
    }
    return '';
}

let col = document.querySelectorAll('.img');


    for(let i =0; i<col.length; i++){
        if(col[i].addEventListener('click', function(){ 
            let ejemplo = document.querySelectorAll("#ejemplo");
            ejemplo[i].classList.toggle("visible");
         }));
    }
