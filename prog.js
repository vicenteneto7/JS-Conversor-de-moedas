const button = document.querySelector(".b1")
const select = document.querySelector(".select-2")
const select1 = document.querySelector(".select-1")
function convertValues() {
    const inputvalue = document.querySelector(".input-1").value
    const valuetoconvert = document.querySelector(".value1")/*valor em real*/
    const valueconverted = document.querySelector(".value2")/*moedas diferentes*/
    const dolarToday = 5
    const euroToday = 6
    const bitcoinToday = 10
    const libraToday = 4.5

    //todas as opçoes de moedas para converter//
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

    if (select.value == "libra") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue / libraToday)
    }
    if (select.value == "bitcoin") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue / bitcoinToday)
    }

    //todas as opçoes de moedas para converter//

    if (select1.value == "real") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue)
    }
    if (select1.value == "dolar") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue / dolarToday)
    }
    if (select1.value == "euro") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue / euroToday)
    }
    if (select1.value == "libra") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue / libraToday)
    }
    if (select1.value == "bitcoin") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue / bitcoinToday)
    }


}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg2 = document.querySelector("#currency-img2")
    const currencyImg1 = document.querySelector("#currency-img1")

    //parte de baixo, o value 2//

    if (select.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg2.src = "./assets/eua-dolar.png"
    }
    if (select.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg2.src = "./assets/euro.png"
    }
    if (select.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg2.src = "./assets/libra.png"
    }
    if (select.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/bitcoin.png"
    }

    //parte de cima, o value 1//
    
    if (select1.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/bitcoin.png"
    }
    if (select1.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg1.src = "./assets/eua-dolar.png"
    }
    if (select1.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
    }
    if (select1.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg1.src = "./assets/libra.png"
    }
    if (select1.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/bitcoin.png"
    }

    convertValues()
}

select.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)
