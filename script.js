
let btns = document.querySelectorAll('#btn');
let col = document.querySelectorAll('.col');

// btns.forEach((btn)=>{
//     btn.addEventListener('click', function(){    
//         let ejemplo = document.querySelectorAll('#ejemplo');
//         ejemplo.forEach((ejemplo)=>{
//             ejemplo.classList.toggle("visible");
//          });
//     });
// });
let columnas = 0;
    for(let i =0; i<btns.length; i++){
        if(btns[i].addEventListener('click', function(){ 
            let ejemplo = document.querySelectorAll("#ejemplo");
            ejemplo[i].classList.toggle("visible");
         }));
    }

