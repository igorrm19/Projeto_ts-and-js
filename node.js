
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

const mario =document.querySelector(' .mario ');
const pipe =document.querySelector(' .pipe ');
const twepipe =document.querySelector(' .twepipe ');
const song =document.querySelector(' .song ');
const botun = document.querySelector('.botun');
const jdm = document.querySelector('.jdm');
const menu = document.querySelector('.menu');



console.log('Bem vindo ao meu jogo do mario!');
start();



//pulo do mario
const jump = () => {
    mario.classList.add('jump');
    music.play()
    musica.play()
    

    setTimeout(() => {
        mario.classList.remove('jump');
        music.pause();


    },1000)

}
document.addEventListener('keydown',jump);

       

//cronometro
function start(){
    cron = setInterval(() => {timer();}, tempo);
}

function pause() {
    clearInterval(cron);
}

function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }


    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;



    setTimeout(() => {
    
        console.log('existe segundos dentro de ss?',ss)
          
    },1)

}


        
//colisao do mario com o negocio verde
const loop = setInterval(() => {

    
    
    
    
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    
    musica.pause();
    pause();
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    twepipe.style.animation = 'none';
    twepipe.style.left = `${pipePosition}px`;
     
    botun.style.visibility = 'visible';
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    
    mario.src = './css/image/image/game-over.png'
    mario.style.wigth = '35px'
    mario.style.heigth = '30px'
    mario.style.marginLeft = '-15px'
    

    clearInterval(loop);
}

},  10);



//colisao do mario com o segundo negocio verde
const loopi = setInterval(() => {

  
    
    
const pipePosition = twepipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
    musica.pause();
    pause();
    twepipe.style.animation = 'none';
    twepipe.style.left = `${pipePosition}px`;
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
   
    botun.style.visibility = 'visible';
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './css/image/image/game-over.png'
    mario.style.wigth = '35px'
    mario.style,heigth = '30px'
    mario.style.marginLeft = '-15px'
   

    clearInterval(loop);
}

}, 40);



        //efeito sonoro do pulo
        const music = new Audio('./css/image/image/salamisound-2659795-sfx-power-up-23-games.mp3');
        for (i = 0; i < 1; i++){
        music.play();
        music.loop =false;
        music.playbackRate = 2;
        music.pause();
        }

        //som do jogo
        const musica = new Audio('./css/image/image/SUPER MARIO BROS MÚSICAS.mp3');
        for (i = 0; i < 1; i++){
        musica.play();
        musica.loop =true;
        musica.playbackRate = 1;
        musica.pause();
        }

        //som de quando perde
        const songPerde = new Audio('./css/image/image/depositphotos_424803720-track-granulation-electronic-old-school-death.mp3');
        for (i = 0; i < 1; i++){
        songPerde.play();
        songPerde.loop =false;
        songPerde.playbackRate = 1;
        songPerde.pause();
        }
       
        
        //tecla de atalho para o menu
        const Delete_KEY_CODE = 8
        const Enter_KEY_CODE = 13

        document.onkeydown = teclado;

        function teclado(e){
            console.log(e.keyCode)
            if (e.keyCode == Enter_KEY_CODE) {
                menu.style.visibility = 'visible';
                music.pause();
                musica.pause();
                mario.classList.remove('jump');
                

            }else if (e.keyCode == Delete_KEY_CODE) {
                menu.style.visibility = 'collapse';
                music.pause();
                musica.pause();
                mario.classList.remove('jump');
                
            }
                
        }    

       
        //função para o botão para chamar o menu ao clikar
        function menus() {
            menu.style.visibility = 'visible';
        }



//Alterando tema de fundo
const inputContainer = document.querySelector('input')
const rootElemen = document.documentElement

const lightTheme = { //tema claro

  '--text-color': '#000000', // cor do texto da logo preto
  '--background-color':'#C0C0C0', //cor do body branco cinzento
  '--color-back' : '#20B2AA', //cor do header ciano
}

const DarkTheme = { //tema escuro

    '--text-color': '#FFF', //branco
    '--background-color':'#000000', //preto
    '--color-back' : '#1C1C1C', //cinza
    
  }

inputContainer.addEventListener('change', function() {
   const isCheck = inputContainer.checked

   isCheck ? changeTheme(DarkTheme) : changeTheme(lightTheme) //condicional
})

function changeTheme(theme) {
   console.log(theme)
    for (let prop in theme) {
        changeProperty(prop, theme[prop])
        
    }
}

function changeProperty(property, value) {
    rootElemen.style.setProperty(property, value)
}