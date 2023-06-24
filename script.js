const button = document.querySelector(".b1")
const select2 = document.querySelector(".select-2")
const select1 = document.querySelector(".select-1")
let dolarToday = 0
let euroToday = 0
let bitcoinToday = 0
let libraToday = 0
let realToday = 0

function convertValues() {
    const inputvalue = document.querySelector(".input-1").value
    const valuetoconvert = document.querySelector(".value1")/*valor em real*/
    const valueconverted = document.querySelector(".value2")/*moedas diferentes*/

    //todas as opçoes de moedas para converter//
    //dolar//

    if (select2.value == "dolar" && select1.value == "real1") {
        dolarToday = 0.21
        realToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * dolarToday)
    }

    if (select2.value == "dolar" && select1.value == "dolar1") {
        dolarToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue)
    }

    if (select2.value == "dolar" && select1.value == "euro1") {
        dolarToday = 1.10
        euroToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * dolarToday)
    }

    if (select2.value == "dolar" && select1.value == "libra1") {
        dolarToday = 1.27
        libraToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * dolarToday)
    }

    if (select2.value == "dolar" && select1.value == "bitcoin1") {
        dolarToday = 30069
        bitcoinToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * dolarToday)
    }

    //real//

    if (select2.value == "real" && select1.value == "real1") {
        realToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue)
    }
    if (select2.value == "real" && select1.value == "dolar1") {
        realToday = 4.77
        dolarToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue * realToday)
    }

    if (select2.value == "real" && select1.value == "libra1") {
        realToday = 6.09
        libraToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue * realToday)
    }
    if (select2.value == "real" && select1.value == "euro1") {
        realToday = 5.23
        euroToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue * realToday)
    }

    if (select2.value == "real" && select1.value == "bitcoin1") {
        realToday = 143988
        bitcoinToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue * realToday)
    }

    //euro//

    if (select2.value == "euro" && select1.value == "real1") {
        euroToday = 0.19
        realToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue * euroToday)
    }

    if (select2.value == "euro" && select1.value == "dolar1") {
        euroToday = 0.91
        dolarToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue * euroToday)
    }

    if (select2.value == "euro" && select1.value == "euro1") {
        euroToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue)
    }
    if (select2.value == "euro" && select1.value == "libra1") {
        euroToday = 1.16
        libraToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue * euroToday)
    }
    if (select2.value == "euro" && select1.value == "bitcoin1") {
        euroToday = 27511
        bitcoinToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue * euroToday)
    }

    //libra//

    if (select2.value == "libra" && select1.value == "real1") {
        libraToday = 0.16
        realToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue * libraToday)
    }

    if (select2.value == "libra" && select1.value == "dolar1") {
        libraToday = 0.79
        dolarToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue * libraToday)
    }

    if (select2.value == "libra" && select1.value == "euro1") {
        libraToday = 0.86
        euroToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue * libraToday)
    }

    if (select2.value == "libra" && select1.value == "libra1") {
        libraToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue)
    }

    if (select2.value == "libra" && select1.value == "bitcoin1") {
        libraToday = 23656
        bitcoinToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue * libraToday)
    }

    //bitcoin//

    if (select2.value == "bitcoin" && select1.value == "real1") {
        bitcoinToday = 0.0000070
        realToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * bitcoinToday)
    }

    if (select2.value == "bitcoin" && select1.value == "dolar1") {
        bitcoinToday = 0.000033
        dolarToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * bitcoinToday)
    }

    if (select2.value == "bitcoin" && select1.value == "euro1") {
        bitcoinToday = 0.000036
        euroToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * bitcoinToday)
    }

    if (select2.value == "bitcoin" && select1.value == "libra1") {
        bitcoinToday = 0.000042
        libraToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue * bitcoinToday)
    }

    if (select2.value == "bitcoin" && select1.value == "bitcoin1") {
        bitcoinToday = inputvalue
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue)
    }

    //configs//

    if (select1.value == "real1") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalue)
    }
    if (select1.value == "dolar1") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue)
    }
    if (select1.value == "euro1") {
        euroToday = inputvalue
        valuetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue)
    }
    if (select1.value == "libra1") {
        libraToday = inputvalue
        valuetoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue)
    }
    if (select1.value == "bitcoin1") {
        valuetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue)
    }

}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg2 = document.querySelector("#currency-img2")


    //parte de baixo, o value 2//

    if (select2.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg2.src = "./assets/real-br.png"
    }

    if (select2.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg2.src = "./assets/eua-dolar.png"
    }
    if (select2.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg2.src = "./assets/euro.png"
    }
    if (select2.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg2.src = "./assets/libra.png"
    }
    if (select2.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg2.src = "./assets/bitcoin.png"
    }


    convertValues()
}

function changeCurrency2() {
    const currencyName1 = document.querySelector("#currency-name1")
    const currencyImg1 = document.querySelector("#currency-img1")

    //parte de cima, o value 1//

    if (select1.value == "real1") {
        currencyName1.innerHTML = "Real"
        currencyImg1.src = "./assets/real-br.png"
    }

    if (select1.value == "bitcoin1") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImg1.src = "./assets/bitcoin.png"
    }
    if (select1.value == "dolar1") {
        currencyName1.innerHTML = "Dólar americano"
        currencyImg1.src = "./assets/eua-dolar.png"
    }
    if (select1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImg1.src = "./assets/euro.png"
    }
    if (select1.value == "libra1") {
        currencyName1.innerHTML = "Libra"
        currencyImg1.src = "./assets/libra.png"
    }
    convertValues()
}
function currencyChange3() {
    if (select1.value == "real1" && select2.value == "real") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escolha uma opção diferente para converter!'
        })
    }
    if (select1.value == "dolar1" && select2.value == "dolar") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escolha uma opção diferente para converter!'
        })
    }
    if (select1.value == "euro1" && select2.value == "euro") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escolha uma opção diferente para converter!'
        })
    }
    if (select1.value == "libra1" && select2.value == "libra") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escolha uma opção diferente para converter!'
        })
    }
    if (select1.value == "bitcoin1" && select2.value == "bitcoin") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escolha uma opção diferente para converter!'
        })
    }
}
button.addEventListener("click", currencyChange3)
select1.addEventListener("change", changeCurrency2)
select2.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)
