const button = document.querySelector(".b1")
const select = document.querySelector(".select-2")
function convertValues() {
    const inputvalue = document.querySelector(".input-1").value
    const valuetoconvert = document.querySelector(".value1")/*valor em real*/
    const valueconverted = document.querySelector(".value2")/*moedas diferentes*/
    const dolarToday = 5
    const euroToday = 6

    if (select.value == "dolar") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue / dolarToday)
    }
    if (select.value == "euro") {
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue / euroToday)
    }

    valuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputvalue)
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector("#currency-img")
    
    if (select.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src="./assets/eua-dolar.png"
    }
    if (select.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src="./assets/euro.png"
    }
convertValues()
}

select.addEventListener("ch0ange", changeCurrency)
button.addEventListener("click", convertValues)
