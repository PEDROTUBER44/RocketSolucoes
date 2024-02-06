function sulfiteoptionSelect() {
    // Obtém a referência para o elemento
    var selectelementGrammage = document.querySelector('.grammage');
    var selectelementSize = document.querySelector('.size');

    // Obtém o índice da opção selecionada
    var selectelementgrammageIndex = selectelementGrammage.selectedIndex;
    var selectelementsizeIndex = selectelementSize.selectedIndex; 

    // Obtém a opção selecionada usando o índice
    var selectedgrammageOption = selectelementGrammage.options[selectelementgrammageIndex];
    var selectedsizeOption = selectelementSize.options[selectelementsizeIndex];

    // Obtém o valor e o texto da opção selecionada
    var selectedgrammageValue = selectedgrammageOption.value;
    var selectedsizeValue = selectedsizeOption.value;

    var optionNumber = selectedgrammageValue + selectedsizeValue;

    switch (optionNumber) {
        case '00':
            console.log('No options selected.');
            break;
        case '01':
        case '10':
        case '10':
        case '10':
        case '10':
        case '10':
            console.log('One of the options was not selected.');
            break;
        
    }
}

function photographicoptionSelect() {
    // Obtém a referência para o elemento
    var selectelementGrammage = document.querySelector('.grammage');
    var selectelementTexture = document.querySelector('.texture');
    var selectelementSize = document.querySelector('.size');

    // Obtém o índice da opção selecionada
    var selectelementgrammageIndex = selectelementGrammage.selectedIndex;
    var selectelementtextureIndex = selectelementTexture.selectedIndex;
    var selectelementsizeIndex = selectelementSize.selectedIndex; 

    // Obtém a opção selecionada usando o índice
    var selectedgrammageOption = selectelementGrammage.options[selectelementgrammageIndex];
    var selectedtextureOption = selectelementTexture.options[selectelementtextureIndex];
    var selectedsizeOption = selectelementSize.options[selectelementsizeIndex];

    // Obtém o valor e o texto da opção selecionada
    var selectedgrammageValue = selectedgrammageOption.value;
    var selectedtextureValue = selectedtextureOption.value;
    var selectedsizeValue = selectedsizeOption.value;

    // Exibe os valores
    console.log("Texto selecionado:", selectedgrammageValue);
    console.log("Texto selecionado:", selectedtextureValue);
    console.log("Texto selecionado:", selectedsizeValue);
}