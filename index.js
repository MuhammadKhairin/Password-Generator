let passwordLength =document.getElementById("passwordLength")
let password =document.getElementById("password")
let saveButton =document.getElementById("saveButton")

function generatePassword(len) {
    const lowerAlphabet ="abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric ="0123456789"
    const symbol ="!@#$%^&*()_+=-[]{}':;/?.,<>~`"

    const data =lowerAlphabet + upperAlphabet + numeric + symbol
    let genrator ='';
    for (let index = 0; index < len; index++){
        genrator += data[~~(Math.random() * data.length)];
    }
    return genrator;
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(()=>{
        alert('password has been genereted! ')

    }, 1000)
}

function savePassword(){
    document.title = password.value
    saveButton.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download','MypasswordGeneratorLOG.txt')
    setTimeout (() => {
        alert('berhasil disimpan')
    }, 1000)
}