function sulfiteoptionSelect() {
    var selectelementGrammage = document.querySelector('.grammage');
    var selectelementSize = document.querySelector('.size');

    var selectelementgrammageIndex = selectelementGrammage.selectedIndex;
    var selectelementsizeIndex = selectelementSize.selectedIndex;

    var selectedgrammageOption = selectelementGrammage.options[selectelementgrammageIndex];
    var selectedsizeOption = selectelementSize.options[selectelementsizeIndex];

    var selectedgrammageValue = selectedgrammageOption.value;
    var selectedsizeValue = selectedsizeOption.value;

    if (selectedgrammageValue === '0' || selectedsizeValue === '0') {
        console.log('No options selected.');
        return;
    }

    var grammageText = '';
    switch (selectedgrammageValue) {
        case '1':
            grammageText = 'Gramatura: 60g,';
            break;
        case '2':
            grammageText = 'Gramatura: 75g,';
            break;
        case '3':
            grammageText = 'Gramatura: 105g,';
            break;
        case '4':
            grammageText = 'Gramatura: 135g,';
            break;
        case '5':
            grammageText = 'Gramatura: 180g,';
            break;
    }

    var sizeText = '';
    switch (selectedsizeValue) {
        case '1':
            sizeText = ' Tamanho: 3x4';
            break;
        case '2':
            sizeText = ' Tamanho: A5';
            break;
        case '3':
            sizeText = ' Tamanho: A4';
            break;
    }

    var orderText = "Oii, Gostaria da fazer um pedido de uma impressão nos papéis nas seguintes condições: " + grammageText + sizeText;
    var messageText = 'https://wa.me/5511954753523?text=' + encodeURIComponent(orderText);
    window.open(messageText);
}

function photographicoptionSelect() {
    var selectelementGrammage = document.querySelector('.grammage');
    var selectelementTexture = document.querySelector('.texture');
    var selectelementSize = document.querySelector('.size');

    var selectelementgrammageIndex = selectelementGrammage.selectedIndex;
    var selectelementtextureIndex = selectelementTexture.selectedIndex;
    var selectelementsizeIndex = selectelementSize.selectedIndex;

    var selectedgrammageOption = selectelementGrammage.options[selectelementgrammageIndex];
    var selectedtextureOption = selectelementTexture.options[selectelementtextureIndex];
    var selectedsizeOption = selectelementSize.options[selectelementsizeIndex];

    var selectedgrammageValue = selectedgrammageOption.value;
    var selectedtextureValue = selectedtextureOption.value;
    var selectedsizeValue = selectedsizeOption.value;

    if (selectedgrammageValue === '0' || selectedtextureValue === '0' || selectedsizeValue === '0') {
        console.log('No options selected.');
        return;
    }

    var grammageText = '';
    switch (selectedgrammageValue) {
        case '1':
            grammageText = 'Gramatura: 60g,';
            break;
        case '2':
            grammageText = 'Gramatura: 75g,';
            break;
        case '3':
            grammageText = 'Gramatura: 105g,';
            break;
        case '4':
            grammageText = 'Gramatura: 135g,';
            break;
        case '5':
            grammageText = 'Gramatura: 180g,';
            break;
    }

    var textureText = '';
    switch (selectedtextureValue) {
        case '1':
            textureText = 'Textura: Brilhoso,';
            break;
        case '2':
            textureText = 'Textura: Fosco,';
            break;
    }

    var sizeText = '';
    switch (selectedsizeValue) {
        case '1':
            sizeText = ' Tamanho: 3x4';
            break;
        case '2':
            sizeText = ' Tamanho: A5';
            break;
        case '3':
            sizeText = ' Tamanho: A4';
            break;
    }

    var orderText = "Oii, Gostaria da fazer um pedido de uma impressão nos papéis nas seguintes condições: " + grammageText + textureText + sizeText;
    var messageText = 'https://wa.me/5511954753523?text=' + encodeURIComponent(orderText);
    window.open(messageText);
}
