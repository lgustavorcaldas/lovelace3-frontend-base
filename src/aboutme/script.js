const serverAddress = `http://localhost:8080`
let dados;
const body = document.getElementById("body")

window.addEventListener("scroll", function(){
    let offset = this.window.pageYOffset;
    body.style.backgroundPositionY = (offset * 0.7) + "px";
})

function getData(){
    fetch( serverAddress )
        .then(response => response.json())
        .then(data =>{
            dados = data;
            const fristLetter = dados.greeting[0]
            const greetingWithoutFristLetter = dados.greeting.substring(1)
            
            const fristLetterAboutMe = dados.aboutMe[0]
            const greetingWithoutFristLetterAboutMe = dados.aboutMe.substring(1)

            $("#greeting").html(`<span class="fristletter">${fristLetter}</span> ${greetingWithoutFristLetter}`)
            $("#aboutMe").html(`<span class="fristletter">${fristLetterAboutMe}</span> ${greetingWithoutFristLetterAboutMe}`)
            $("#reminder").html(dados.reminder)
        })
        .catch(err => console.log(err))
}

getData()


$("#pigeon").on("click", function (){
    window.location.href = `mailto:${dados.email}`;
})
$("#fone").on("click", function (){
    window.open(`https://whatsa.me/${dados.mobileNumber}`, "_blank").focus()
})
$("#logo").on("click", function (){
    window.open(`${dados.linkedin}`, "_blank").focus()
})
