
// Personal Data
var name = window.document.querySelector("input#input_name")
var surname = window.document.querySelector("input#input_surname")
var email = window.document.querySelector("input#input_email")
var DDD = window.document.querySelector("input#input_ddd")
var telephone = window.document.querySelector("input#input_telephone")
var man = window.document.querySelector("input#option_man")
var woman = window.document.querySelector("input#option_woman")
var birth_date = window.document.querySelector("input#input_birth_date")

// Location Data
var CEP = window.document.querySelector("input#input_cep")
var address = window.document.querySelector("input#input_address")
var house = window.document.querySelector("input#input_house_number")
var neighborhood = window.document.querySelector("input#input_neighborhood")
var city = window.document.querySelector("input#input_city")
var state = window.document.querySelector("input#input_state")

// Professional Information
var frontEnd = window.document.querySelector("input#option_front_end")
var backEnd = window.document.querySelector("input#option_back_end")
var favoriteLanguage = window.document.querySelector("select#select_list_programming_languages")
var otherLanguages = window.document.querySelector("input#input_other_programming_languages")
var personalProjects = window.document.querySelector("textarea#input_personal_projects")

function sendData() {
    let DDD_number = checkDDD(DDD)
    let telephone_number = checkTelephone(telephone)
    let sex = checkChoice(man, woman)
    let house_number = checkHouse(house)
    let occupation_area = checkChoice(frontEnd, backEnd)
}

function checkHouse(house_number) {
    if (house_number.value.length === 0) {
        window.alert("Número da casa incorreto, por favor verifique e tente novamente.")
    } else if (Number(house_number.value) > 0 && Number(house_number.value) <= 999999) {
        return house_number.value
    } else {
        window.alert("Número da casa incorreto, por favor verifique e tente novamente.")
    }
}

function checkDDD(DDD_number) {
    if (DDD_number.value.length === 0) {
        window.alert("DDD incorreto, por favor verifique e tente novamente.")
    } else {
        if (DDD_number.value > 0 && DDD_number.value < 100) {
            return DDD_number.value
        } else {
            window.alert("DDD incorreto, por favor verifique e tente novamente.")
        }
    }
}

function checkTelephone(telephone_number) {
    if (telephone_number.value.length !== 9) {
        window.alert("Número de telefone incorreto, por favor verifique e tente novamente.")
    } else {
        if (Number(telephone_number.value) > 1 && Number(telephone_number.value) < 999999999) {
            return telephone_number.value
        } else {
            window.alert("Número de telefone incorreto, por favor verifique e tente novamente.")
        }
    }
}

function checkChoice(option_one, option_two) {
    if (option_one.checked) {
        return option_one.value
    } else if (option_two.checked) {
        return option_two.value
    }
}

function checkCep(cep_number) {
    if (cep_number.value.length !== 8) {
        window.alert("CEP inválido, por favor verifique e tente novamente.")
    } else if (Number(cep_number.value) > 0 && Number(cep_number.value) <= 99999999) {
        return cep_number.value
    } else {
        window.alert("CEP inválido, por favor verifique e tente novamente.")
    }
}

function getHTTP(url) {
    let http_request = new XMLHttpRequest()
    http_request.open("GET", url, false)
    http_request.send()
    return http_request
}

function getCepInformation(object) {
    return {
        address: object.logradouro,
        neighborhood: object.bairro,
        city: object.localidade,
        state: object.uf
    }
}

function parsingJSON(requisition_response) {
    return JSON.parse(requisition_response.response)
}

function updateAddressValues() {
    let url = `https://viacep.com.br/ws/${checkCep(CEP)}/json/`
    let requisitionResponse = getHTTP(url)
    let object = parsingJSON(requisitionResponse)
    if (object.erro) {
        window.alert("CEP inválido, por favor verifique e tente novamente.")
    } else {
        let information = getCepInformation(object)
        address.value = (information.address)
        neighborhood.value = (information.neighborhood)
        city.value = (information.city)
        state.value = (information.state)
    }
}

function refreshPage() {
    location.reload()
}

