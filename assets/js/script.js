const form = document.querySelector(".content__formFields")

const inputNumber = document.querySelector("#number")
const inputName = document.querySelector("#name")
const inputExpiration = document.querySelector("#validity")
const inputCVV = document.querySelector("#numberCVV")


const cardNumber = document.querySelector("#cardNumber")
const cardName = document.querySelector("#cardName")
const cardValidity = document.querySelector("#cardValidity")
const cardCVV = document.querySelector("#cardCVV")

const btnSubmit = document.querySelector("#btnSubmit")

inputNumber.addEventListener("keyup", (event) => {

    if(!event.target.value) {

        cardNumber.innerHTML = "*** *** **** ****"

    } else {

        const valuesOfInput = event.target.value.replaceAll(" ", "")

        if(event.target.value.length > 14) {
            event.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")

            cardNumber.innerHTML = event.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
        } else if (event.target.value.length > 9) {
            event.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")

            cardNumber.innerHTML = event.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")
        } else if (event.target.value.length > 4) {
            event.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2")

            cardNumber.innerHTML = event.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2")
        } else {
            cardNumber.innerHTML = valuesOfInput
        }

    }

})

inputName.addEventListener("keyup", (event) => {

    if(!event.target.value) {

        cardName.innerHTML = "Seu nome aqui"

    } else {

        cardName.innerHTML = event.target.value.toUpperCase()

    }

})

inputExpiration.addEventListener("keyup", (event) => {

    if(!event.target.value) {

        cardValidity.innerHTML = "**/**"

    } else {

        const valuesOfInput = event.target.value.replace("/", "")

        if(event.target.value.length > 2) {

            event.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2")
            cardValidity.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2")

        } else {

            cardValidity.innerHTML = valuesOfInput

        }

    }

})


/* CARD EFECT */

const contentElementsCard = document.querySelector(".content__bgCard")
const contentCreditCard = document.querySelector(".content__creditCard")

inputCVV.addEventListener("keyup", (event) => {

    if(!event.target.value) {

        cardCVV.innerHTML = "123"

    } else {

        cardCVV.innerHTML = event.target.value

    }

})