const desctription=new IconInteraction();


const exercises_representation=new Exercises_Representation('.contener');

const quiz=[

    {
        desctription:'Utrwal znajomość stworzonego przez siebie słownika!',
        type:"WPISZ",
        id:"write"
    },
    {
        desctription:"Dopasuj kod Morse'a do odpowiadającej mu litery!",
        type:"DOPASUJ MORSE'A",
        id:"adjust_mors"
    },
    {
        desctription:"Dopasuj literkę do odpowiadającego mu kodu Morse'a!",
        type:"DOPASUJ LITERĘ",
        id:"adjust_letter"
    },
    {
        desctription:"Poćwicz poprzez tłuamczenie słówek na kod Morse'a",
        type:"PRZETŁUMACZ SŁOWO",
        id:"translateMors" 
    },
    {
        desctription:"Poćwicz poprzez tłuamczenie liter na kod Morse'a",
        type:"PRZETŁUMACZ MORSE'A",
        id:"translateLetters" 
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

desctription.addClassName('description','.descriptionTxt','click','description','description','65px',true);


const quizSystem=new Quiz_system('.sectionQuiz');
quizSystem.quiz_write(`.${quiz[0].id}`);
quizSystem.quiz_mors(`.${quiz[1].id}`,mors_code);
quizSystem.quiz_letter(`.${quiz[2].id}`,mors_code);
quizSystem.quiz_translate(`.${quiz[3].id}`,words_table);
quizSystem.quiz_translateMors(`.${quiz[4].id}`,words_table);


