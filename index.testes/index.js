 //chamando teclado testes
  document.onkeydown = teclado;

 function teclado(e) {
     if (e.keyCode == 38) {

         document.getElementById('jdm').innerHTML = 'deu certo';
         jdm.style.color = 'red';
        
         

     }else if(e.keyCode == 40){

         document.getElementById('jdm').innerHTML = 'deu certo 2';
         jdm.style.color = 'red';
        
         
        

     }else if(e.keyCode == 37){

        document.getElementById('jdm').innerHTML = 'deu certo 3';
        jdm.style.color = 'red';
        
        
        
     }else if(e.keyCode == 39){

        document.getElementById('jdm').innerHTML = 'deu certo 4';
        jdm.style.color = 'red';
         
      
   }
 } 

 
//Alterando tema de fundo
const inputContainer = document.querySelector('.theme')
const rootElemen = document.documentElement

const lightTheme = {
  '--text-color': '#1A1A1A',
  '--background-color':'#FFF',
}

const DarkTheme = {
    '--text-color': '#FFF',
    '--background-color':'#1A1A1A',
  }

inputContainer.addEventListener('change', function() {
   const isCheck = inputContainer.checked

   isCheck ? changeTheme(DarkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    rootElemen.style.setProperty('--background-color','#1A1A1A')
}