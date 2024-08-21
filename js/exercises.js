document.addEventListener('DOMContentLoaded',()=>{
    const desctription=new IconInteraction();


    const exercises_representation=new Exercises_Representation('.contener');

    const quiz=[
        {
            description: '<span data-pl="Utrwal znajomość stworzonego przez siebie słownika!" data-es="¡Refuerza el conocimiento del diccionario que has creado!" data-en="Reinforce your knowledge of the dictionary you created!">Utrwal znajomość stworzonego przez siebie słownika!</span>',
            type: '<span data-pl="WPISZ" data-es="ESCRIBE" data-en="WRITE">WPISZ</span>',
            id: 'write'
        },
        {
            description: '<span data-pl="Dopasuj kod Morse\'a do odpowiadającej mu litery!" data-es="¡Empareja el código Morse con la letra correspondiente!" data-en="Match the Morse code to the corresponding letter!">Dopasuj kod Morse\'a do odpowiadającej mu litery!</span>',
            type: '<span data-pl="DOPASUJ MORSE\'A" data-es="EMPAREJA MORSE" data-en="MATCH MORSE CODE">DOPASUJ MORSE\'A</span>',
            id: 'adjust_mors'
        },
        {
            description: '<span data-pl="Dopasuj literkę do odpowiadającego mu kodu Morse\'a!" data-es="¡Empareja la letra con el código Morse correspondiente!" data-en="Match the letter to the corresponding Morse code!">Dopasuj literkę do odpowiadającego mu kodu Morse\'a!</span>',
            type: '<span data-pl="DOPASUJ LITERĘ" data-es="EMPAREJA LETRA" data-en="MATCH LETTER">DOPASUJ LITERĘ</span>',
            id: 'adjust_letter'
        },
        {
            description: '<span data-pl="Poćwicz poprzez tłumaczenie słówek na kod Morse\'a" data-es="Practica traduciendo palabras al código Morse" data-en="Practice by translating words into Morse code">Poćwicz poprzez tłumaczenie słówek na kod Morse\'a</span>',
            type: '<span data-pl="PRZETŁUMACZ SŁOWO" data-es="TRADUCE PALABRA" data-en="TRANSLATE WORD">PRZETŁUMACZ SŁOWO</span>',
            id: 'translateMors'
        },
        {
            description: '<span data-pl="Poćwicz poprzez tłumaczenie liter na kod Morse\'a" data-es="Practica traduciendo letras al código Morse" data-en="Practice by translating letters into Morse code">Poćwicz poprzez tłumaczenie liter na kod Morse\'a</span>',
            type: '<span data-pl="PRZETŁUMACZ MORSE\'A" data-es="TRADUCE MORSE" data-en="TRANSLATE MORSE CODE">PRZETŁUMACZ MORSE\'A</span>',
            id: 'translateLetters'
        }
    ]
    


    const quiz_words = [
        "Dom",
        "Szkoła",
        "Samochód",
        "Kwiat",
        "Książka",
        "Jabłko",
        "Stół",
        "Krzesło",
        "Okno",
        "Drzewo",
        "Pies",
        "Kot",
        "Rzeka",
        "Miasto",
        "Wieś",
        "Droga",
        "Most",
        "Góra",
        "Plaża",
        "Morze",
        "Słońce",
        "Księżyc",
        "Gwiazda",
        "Niebo",
        "Chmura",
        "Deszcz",
        "Śnieg",
        "Lód",
        "Wiatr",
        "Las",
        "Pole",
        "Łąka",
        "Ogród",
        "Kwiat",
        "Krzew",
        "Szkło",
        "Metal",
        "Drewno",
        "Piasek",
        "Kamień"
    ];

    //TWORZE MAPĘ TYLKO Z LIETRKAMI I TŁUMACZENIAMI MORSA: 
    const morsCodeMap = new Map(mors_code.map(elem => [elem.letter, elem.mors]));

    function translateToMorse(word) {
        return word.toLowerCase().split('').map(letter => morsCodeMap.get(letter) || '').join('/');
    }

    //FUNKCJA TWORZĄCA OBJEKT ZE SŁÓWEK I DLA NICH TŁUMACZENIA

    function object_morse_word(words_table=[]){
        let object=[];

        words_table.forEach((word,index)=>{

            object[index]={
                word: word,
                translation:translateToMorse(word)
            }
        });
        return object;
    }

    const words_table=object_morse_word(quiz_words)


    for(let i=0;i<quiz.length;i++){
        exercises_representation.create_divQuiz('box','title','type','description','descriptionTxt','div','p',quiz[i]);
    }

    // desctription.addClassName('description','.descriptionTxt','click','description','description','65px',true);


    const quizSystem=new Quiz_system('.sectionQuiz');
    quizSystem.quiz_write(`.${quiz[0].id}`);
    quizSystem.quiz_mors(`.${quiz[1].id}`,mors_code);
    quizSystem.quiz_letter(`.${quiz[2].id}`,mors_code);
    quizSystem.quiz_translate(`.${quiz[3].id}`,words_table);
    quizSystem.quiz_translateMors(`.${quiz[4].id}`,words_table);



})