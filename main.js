'use strict'

function getDogImages(num){
    if (Number.isNaN(Number(num))) {
        alert('Error: Enter a number')
    } else if (Number(num) <= 0 || Number(num > 50)){
        alert('Error: Enter a number between 1 and 50')
    } else {
        let fetchString = 'https://dog.ceo/api/breeds/image/random/' + num;
        fetch(fetchString)
            .then(response => response.json()) 
            .then(responseJson => showDogImages(responseJson, num))
            .catch(error => alert(`Error: ${error.message}`))
    }
}

function showDogImages(responseJson, num){
    console.log(responseJson);
    let htmlString = '';
    for (let i = 0; i < num; i++){
        htmlString += `<img src="${responseJson.message[i]}" alt="dog image number ${i+1}" class="dog-image"><br>`
    }
    $('.pic-result').html(htmlString);
}

function watchButton(){
    $('form').submit(event => {
        event.preventDefault();
        let num = $('#number').val();
        console.log("number is " + num);
        getDogImages(num);
        $('#number').val('3');
    })
}

$(watchButton);