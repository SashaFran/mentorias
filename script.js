
let btns = document.querySelectorAll('#btn');
let col = document.querySelectorAll('.col');


    for(let i =0; i<col.length; i++){
        if(col[i].addEventListener('click', function(){ 
            let ejemplo = document.querySelectorAll("#ejemplo");
            ejemplo[i].classList.toggle("visible");
         }));
    }

