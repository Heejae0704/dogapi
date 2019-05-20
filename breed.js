'use strict'

function getDogImage(breed){
    let fetchString = 'https://dog.ceo/api/breed/'+ breed + '/images/random';
    fetch(fetchString)
        .then(response => response.json()) 
        .then(responseJson => showDogImage(responseJson, breed))
}

function showDogImage(responseJson, breed){
    console.log(responseJson);
    if (responseJson.status === 'error'){
        alert('Error: ' + responseJson.message)
    } else {
        let htmlString = `<img src="${responseJson.message}" alt="${breed} picture" class="dog-image">`
        $('.pic-result').html(htmlString);
    }
}

function watchButton(){
    $('form').submit(event => {
        event.preventDefault();
        let breed = $('#breed').val();
        console.log(breed)
        if (breed === ''){
            alert('Please fill in the textbox!')
        } else {
            getDogImage(breed);
        }
        $('#breed').val('');
    })
}

$(watchButton);