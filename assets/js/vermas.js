let btn1, btn2, btn3;
let ser1, ser2, ser3;
btn1 = document.querySelector('#btn1');
btn2 = document.querySelector('#btn2');
btn3 = document.querySelector('#btn3');

ser1 = document.querySelector('.servicio1 .servicio__body');
ser2 = document.querySelector('.servicio2 .servicio__body');
ser3 = document.querySelector('.servicio3 .servicio__body');

btn1.addEventListener('click',()=>{
    if(btn1.textContent === 'Ver menos'){
        btn1.addEventListener('click', ()=> {
            ser1.classList.remove('ver-completo')
            btn1.textContent = 'Seguir Leyendo';
        })
    }else{
        ser1.classList.add('ver-completo');
        btn1.textContent = 'Ver menos';
        ser1.focus;
    }
})

btn2.addEventListener('click',()=>{
    if(btn2.textContent === 'Ver menos'){
        btn2.addEventListener('click', ()=> {
            ser2.classList.remove('ver-completo')
            btn2.textContent = 'Seguir Leyendo'
        })
    }else{
        ser2.classList.add('ver-completo');
        btn2.textContent = 'Ver menos';
        ser2.focus;
    }
})

btn3.addEventListener('click',()=>{
    if(btn3.textContent === 'Ver menos'){
        btn3.addEventListener('click', ()=> {
            ser3.classList.remove('ver-completo')
            btn3.textContent = 'Seguir Leyendo'

        })
    }else{
        ser3.classList.add('ver-completo');
        btn3.textContent = 'Ver menos';
        ser3.focus;
    }
})
