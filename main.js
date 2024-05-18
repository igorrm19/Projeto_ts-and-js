console.log('hello word')




//Alterando tema de fundo
const inputContainer = document.querySelector('input')
const rootElemen = document.documentElement


const lightTheme = { //tema claro

  '--text-color': '#000000', // cor do texto da logo preto
  '--background-color':'#C0C0C0', //cor do body branco cinzento
  '--color-back' : '#20B2AA', //cor do header ciano
}

const DarkTheme = { //tema escuro

    '--text-color': ' #993399', //branco
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

