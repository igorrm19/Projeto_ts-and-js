
function a() {
    setTimeout(() => {console.log('2')}, 3000) //depois de 3 segundos execulta o numero dois
    console.log('1')
    return
}

a()
