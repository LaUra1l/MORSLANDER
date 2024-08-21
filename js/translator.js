document.addEventListener('DOMContentLoaded',()=>{
    
console.log('zaladowalem')
//JEZYK:

// IKONA KSIĄŻKI Z REGUŁAMI:

    const bookIcon=new IconInteraction();
    bookIcon.addClassName('book','.reglasDiv','click','fa-solid fa-book book','fa-solid fa-book-open book','250px')


    // WYBÓR TRANSLATORA
    const transition_active=[...document.querySelectorAll('.span')];

    const translator=new Translator();

    function checkActive(){
        if(transition_active[0].style.color==='red'){
            console.log('to litery aktywne');
            translator.translate_letters(mors_code,'.input','.txtContener','.btnDesign');
        }
        else {
            console.log('to mors aktywne');
            translator.translate_chars(mors_code,'.input','.txtContener','.btnDesign')
        }
    }

    checkActive();


    translator.read_mors('.btnDesign','click','.txtContener',"../audio/short_morsSignal.MP3","../audio/long_morsSignal.MP3");
    const chooseTranslation=new IconInteraction();
    chooseTranslation.addClass('.choose_icon',"fa-solid fa-arrow-left icon choose_icon",'fa-solid fa-arrow-right icon choose_icon',"click",
        true,'.span',checkActive
    );



})