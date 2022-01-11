
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

function send_data() {
    // let DDD_number = check_DDD(DDD)
    // let telephone_number = check_telephone(telephone)
    // let sex = check_sex(man, woman)
    // let house_number = check_house(house) 
} 

function check_house(house_number) {
    if (house_number.value.length === 0) {
        window.alert("Número da casa incorreto, por favor verifique e tente novamente.")
    } else if (Number(house_number.value) > 0 && Number(house_number.value) <= 999999) {
        return house_number.value
    } else {
        window.alert("Número da casa incorreto, por favor verifique e tente novamente.")
    }
}

function check_DDD(DDD_number) {
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

function check_telephone(telephone_number) {
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

function check_sex(man_option, woman_option) {
    if (man_option.checked) {
        return man_option.value
    } else if (woman_option.checked) {
        return woman_option.value
    }
}

function check_cep(cep_number) {
    if (cep_number.value.length !== 8) {
        window.alert("CEP inválido, por favor verifique e tente novamente.")
    } else if (Number(cep_number.value) > 0 && Number(cep_number.value) <= 99999999) {
        return cep_number.value
    } else {
        window.alert("CEP inválido, por favor verifique e tente novamente.")
    }
}

function http_get(url) {
    let http_request = new XMLHttpRequest()
    http_request.open("GET", url, false)
    http_request.send()
    return http_request
}

function get_cep_information(object) {
    return {
        address: object.logradouro,
        neighborhood: object.bairro,
        city: object.localidade,
        state: object.uf
    }
}

function parsing_JSON(requisition_response) {
    return JSON.parse(requisition_response.response)
}

function update_address_values() {
    let url = `https://viacep.com.br/ws/${check_cep(CEP)}/json/`
    let requisition_response = http_get(url)
    let object = parsing_JSON(requisition_response)
    if (object.erro) {
        window.alert("CEP inválido, por favor verifique e tente novamente.")
    } else {
        let information = get_cep_information(object)
        address.value = (information.address)
        neighborhood.value = (information.neighborhood)
        city.value = (information.city)
        state.value = (information.state)
    }
}
