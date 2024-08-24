// DANE: 

const darkmode=[
    "rgb(255, 255, 255)",
    "rgb(50, 50, 50)",
    "rgb(141, 143, 167)",
    "rgb(4, 74, 66)"
];

const lightmode=[
    "rgb(238, 238, 238)",
    "rgb(141, 143, 167)",
    "rgb(50, 50, 50)",
    "rgb(13, 115, 119)"
];


const circle_icon = '<i class="fa-solid fa-circle circle mors_icon"></i> ';
const line_icon = '<i class="fa-solid fa-minus line mors_icon"></i> ';
const lineRotated_icon = '<i class="fa-solid fa-minus line-rotated mors_icon"></i> ';
const space_word_icon = '<i class="fa-solid fa-x break mors_icon"></i> ';

function createMorsIcon(mors) {
    let mors_icon = '';
    for (const char of mors) {
        if (char === '.') {
            mors_icon += circle_icon;
        } else if (char === '-') {
            mors_icon += line_icon;
        } else if (char === ' ') {
            mors_icon += lineRotated_icon + space_word_icon + lineRotated_icon;
        }
    }
    mors_icon += lineRotated_icon; // Dodaje lineRotated_icon na końcu każdego mors_icon
    return mors_icon;
}

const mors_code = [
    { letter: "a", mors: ".-", mors_icon: createMorsIcon(".-") },
    { letter: "ą", mors: ".-", mors_icon: createMorsIcon(".-") }, 
    { letter: "b", mors: "-...", mors_icon: createMorsIcon("-...") },
    { letter: "c", mors: "-.-.", mors_icon: createMorsIcon("-.-.") },
    { letter: "ć", mors: "-.-.", mors_icon: createMorsIcon("-.-.") }, 
    { letter: "d", mors: "-..", mors_icon: createMorsIcon("-..") },
    { letter: "e", mors: ".", mors_icon: createMorsIcon(".") },
    { letter: "ę", mors: ".", mors_icon: createMorsIcon(".") },
    { letter: "f", mors: "..-.", mors_icon: createMorsIcon("..-.") },
    { letter: "g", mors: "--.", mors_icon: createMorsIcon("--.") },
    { letter: "h", mors: "....", mors_icon: createMorsIcon("....") },
    { letter: "i", mors: "..", mors_icon: createMorsIcon("..") },
    { letter: "j", mors: ".---", mors_icon: createMorsIcon(".---") },
    { letter: "k", mors: "-.-", mors_icon: createMorsIcon("-.-") },
    { letter: "l", mors: ".-..", mors_icon: createMorsIcon(".-..") },
    { letter: "ł", mors: ".-..", mors_icon: createMorsIcon(".-..") },
    { letter: "m", mors: "--", mors_icon: createMorsIcon("--") },
    { letter: "n", mors: "-.", mors_icon: createMorsIcon("-.") },
    { letter: "ń", mors: "-.", mors_icon: createMorsIcon("-.") }, 
    { letter: "o", mors: "---", mors_icon: createMorsIcon("---") },
    { letter: "ó", mors: "---", mors_icon: createMorsIcon("---") },
    { letter: "p", mors: ".--.", mors_icon: createMorsIcon(".--.") },
    { letter: "q", mors: "--.-", mors_icon: createMorsIcon("--.-") },
    { letter: "r", mors: ".-.", mors_icon: createMorsIcon(".-.") },
    { letter: "s", mors: "...", mors_icon: createMorsIcon("...") },
    { letter: "ś", mors: "...", mors_icon: createMorsIcon("...") },
    { letter: "t", mors: "-", mors_icon: createMorsIcon("-") },
    { letter: "u", mors: "..-", mors_icon: createMorsIcon("..-") },
    { letter: "v", mors: "...-", mors_icon: createMorsIcon("...-") },
    { letter: "w", mors: ".--", mors_icon: createMorsIcon(".--") },
    { letter: "x", mors: "-..-", mors_icon: createMorsIcon("-..-") },
    { letter: "y", mors: "-.--", mors_icon: createMorsIcon("-.--") },
    { letter: "z", mors: "--..", mors_icon: createMorsIcon("--..") },
    { letter: "ż", mors: "--..", mors_icon: createMorsIcon("--..") }, 
    { letter: "ź", mors: "--..", mors_icon: createMorsIcon("--..") },
    { letter: " ", mors: " ", mors_icon: createMorsIcon(" ") }
];

const circleLetters='aei';
const lineLetters='ou';


const suggestion_table = new Map([
    ["A", ['Amor', 'Albo','Arbuz','Album','Azot']],
    ["B", ['Botanika','Boazeria']],
    ["C", ['Cocacola']],
    ["D", ['Dolina', 'Dobrawa','Dodawać']],
    ["E", ['Elf','Ełk']],
    ["F", ['Faszerować','Filantropia']],
    ["G", ['Gumowa','Gospoda']],
    ["H", ['Halabarda','Hahahaha']],
    ["I", ['Igła', 'Iza','Ibis',"Imię", "Inka"]],
    ["J", ['Jednokonno','Jajooo']],
    ["K", ['Kolano','Koralowy']],
    ["L", ['Leonidas','Lampkowaa','Lagunaa']],
    ["M", ['Motor','Momo','Murowy']],
    ["N", ['Noga', 'Nosa','Nowa','Nuria','Nora']],
    ["O", ['Opoczno','Oknoo','Okupowy','Ouzo',"Oulu",'Ooo']],
    ["P", ['Piotrowice','Peloponez']],
    ["Q", ['Q gospodarstwo','Quoao']],
    ["R", ['Ratunek','Ratować','Retorta']],
    ["S", ['Sakrament','Senegal','Samanta','Sahara']],
    ["T", ['To','Tom', 'Tor']],
    ["U", ['Ultraarbuz','Ultraamor']],
    ["V", ['Vincent van Gogh','Valencio']],
    ["W", ['Winorośl','Wichuro']],
    ["X", ['Xuaau']],
    ["Y", ['Yogurtowo','Yomamolo']],
    ["Z", ['Zozolee','Zubożała','Zdruzgotana','Złoto lite']]
]);





// ---------------------------------------------------------------------

class IconInteraction{
    #goPromise
    constructor(){   
        this.#goPromise=true;
    }

    getElement(element){
        return document.querySelector(element);
        
    }

    addClassName(elementClick, elemMenu, elementListener, classNameONE, classNameTWO, height, lookInside = false) {
        let roll = false;
        let menu = this.getElement(elemMenu);
        const clickElements = [...document.getElementsByClassName(elementClick)];
    
        const closeMenu = () => {
            menu.style.height = '0px';
            classNameTWO.split(' ').forEach(cls => clickElements[0].classList.remove(cls));
            classNameONE.split(' ').forEach(cls => clickElements[0].classList.add(cls));
            roll = false;
            window.removeEventListener('click', handleOutsideClick); 
        };
    
        const handleOutsideClick = (event) => {
            if (!menu.contains(event.target) && !clickElements[0].contains(event.target)) {
                closeMenu();
            }
        };
    
        clickElements.forEach(elem => {
            elem.addEventListener(elementListener, (event) => {
                roll = !roll;
    
                if (roll) {
                    menu.style.height = height;
                    classNameONE.split(' ').forEach(cls => elem.classList.remove(cls));
                    classNameTWO.split(' ').forEach(cls => elem.classList.add(cls));
    
                    setTimeout(() => {
                        window.addEventListener('click', handleOutsideClick);
                    }, 0);
                    
                } else {
                    closeMenu();
                }
    
                if (lookInside) {
                    menu = elem.parentNode.querySelector(elemMenu);
                    elem.textContent = roll ? "ZWIŃ" : "OPIS";
                }
            });
        });
    }

    addAnimation(
        // PODSTAWOWE
        element, animation, eventListener,
       
        //ROZSZEZONE O ZMIANE IKONY
        returnToPrev,oldIcon,newIcon,
    ) {
        const getElement = this.getElement(element);
        if(eventListener){
            getElement.addEventListener(eventListener, () => {
            getElement.style.animation = animation;

            //ROZSZEZONE O ZMIANE IKONY

           if(oldIcon && newIcon!=undefined){
            getElement.className=newIcon;
           }
          
            
            if(returnToPrev){
                getElement.addEventListener("animationend",()=>{
                    getElement.style.animation="none";        
    
                    if(oldIcon && newIcon!=undefined){
                        getElement.className=oldIcon;
                       }
                })
            }
            //---  
             
        });
        }else{
            getElement.style.animation = animation;
        }
    }
    #applyMode(isDarkMode, lightmode_colors, darkmode_colors, root,
        backgroundImage,darkPhoto,lightPhoto
    ){
        let colors=isDarkMode ? darkmode_colors: lightmode_colors;

        for(let i=0;i<colors.length;i++){
            root.style.setProperty(`--color${i+1}`,colors[i])
        }

        if(isDarkMode){
            backgroundImage.style.backgroundImage=lightPhoto;
            
        }
        else{
            backgroundImage.style.backgroundImage=darkPhoto;
        }


    }
    changemode(lightmode_colors,darkmode_colors,element,
        contener,darkPhoto,lightPhoto){
        const root=document.documentElement;
        const item=this.getElement(element);
        const elemToChangeImg=this.getElement(contener);

        let change=localStorage.getItem("MODE")==="dark" ? true: false;
        this.#applyMode(change,lightmode_colors,darkmode_colors,root,
            elemToChangeImg,darkPhoto,lightPhoto
        );


        item.addEventListener("click",()=>{
            console.log('zmaina')
            item.style.pointerEvents="none";
            change=!change;

             //ZAPIS DO LOCAL STORAGE
             localStorage.setItem("MODE",change ? "dark": "light");
            //--
          

            item.addEventListener("animationend",()=>{
                console.log('koniec')
                item.style.pointerEvents="all";
            });

            this.#applyMode(change,lightmode_colors,darkmode_colors,root,
                elemToChangeImg,darkPhoto,lightPhoto
            );
        });   
    }

    addClass(icon, icon_style_after, icon_style_before, eventListener,
        changetxt=false, spanElems,checkActiveFunction
    ) {
        const get_icon = document.querySelector(icon);
        get_icon.style.cursor="pointer";

        const spans=document.querySelectorAll(spanElems);
        if(changetxt){
            spans[0].style.color='red';
            spans[1].style.color='var(--color1)';
        }

        get_icon.addEventListener(eventListener, () => {
        
            console.log('click')
            
            console.log(this.#goPromise)

            if (this.#goPromise) {
                get_icon.className = icon_style_after;

                if(changetxt){
                    spans[1].style.color='red';
                    spans[0].style.color='var(--color1)';
                }
            } else {
                get_icon.className = icon_style_before;
                if(changetxt){
                    spans[0].style.color='red';
                    spans[1].style.color='var(--color1)';
                }
            }
            this.#goPromise=!this.#goPromise;
            if(changetxt)checkActiveFunction();
        });

        
        
    }
   
}



class Navigation{
    #element;
    #purposeElement;
    #eventListener;
    constructor(element,purposeElement,eventListener){
        this.#element=element;
        this.#purposeElement=purposeElement;
        this.#eventListener=eventListener;
        this.scroll()
    }
    #getElement(element){
        const item=document.querySelector(element);
       
        return item;
    }
    scroll(){
        const element=this.#getElement(this.#element);
        const purposeElement=this.#getElement(this.#purposeElement);

        element.addEventListener(this.#eventListener,()=>{
            purposeElement.scrollIntoView({
                behavior:"smooth",
                
            })

        })

    }
    

}

// SLAJDY:

class Slide{
    constructor(title,text){
        this.title=title;
        this.text=text;
        this.createSlide();
    }
    createSlide(){
        return {
            text:this.text,
            title:this.title
        }
    }
}

class Slider{
    constructor(titleDiv,textDiv,iconElem,slides){
        this.title=document.querySelector(titleDiv);
        this.text=document.querySelector(textDiv);
        this.icon=[...document.querySelectorAll(iconElem)];
        this.slides=slides;
        this.index=0;
        this.lang=0;
    }
    #set_lang(){
        const lang= localStorage.getItem('lang');
        console.log('ok')

        if(lang === 'pl'){
            this.lang = 0;
        }
        else if(lang === 'es'){
            this.lang = 1;
        }
        else if(lang === 'en'){
            this.lang = 2;
        }
    }
    changeSlide(className_toAdd){
        //SPRAWDZ JEZYK: 


        console.log(this.lang)

        this.title.innerHTML=this.slides[this.lang][this.index].title;
        this.text.innerHTML=this.slides[this.lang][this.index].text;

            this.icon[1].addEventListener('click',()=>{
                //SPRAWDZ JEZYK: 
                this.#set_lang();

                console.log('przod')
                this.index++;
                this.title.classList.remove(className_toAdd);
                this.text.classList.remove(className_toAdd);
    
                if(this.index===this.slides[this.lang].length){
                    this.index=0;
                }
    
                this.title.innerHTML=this.slides[this.lang][this.index].title;
    
                void this.title.offsetWidth;
                void this.text.offsetWidth;
    
                this.text.innerHTML=this.slides[this.lang][this.index].text;
    
                this.title.classList.add(className_toAdd);
                this.text.classList.add(className_toAdd);
    
               
    
            })  
            this.icon[0].addEventListener('click',()=>{
                //SPRAWDZ JEZYK: 
                this.#set_lang();

                console.log('tyl')
                this.index--;
                this.title.classList.remove(className_toAdd);
                this.text.classList.remove(className_toAdd);


                
                if(this.index<0){
                    this.index=this.slides[this.lang].length-1;
                
                }
                if(this.index===this.slides[this.lang].length){
                    this.index=0;
                }
    
                this.title.innerHTML=this.slides[this.lang][this.index].title;
    
                void this.title.offsetWidth;
                void this.text.offsetWidth;
    
                this.text.innerHTML=this.slides[this.lang][this.index].text;
    
                this.title.classList.add(className_toAdd);
                this.text.classList.add(className_toAdd);
    
               
    
            })  
    }
    
}
//

class Translator {
    constructor() {

    }
    translate_letters(table_with_translations, input, place_to_paste,btn_readMorse) {
        if (document.querySelector(input)) {
            const get_input = document.querySelector(input);
            const get_place_to_paste = document.querySelector(place_to_paste);
            const get_btn_readMorse=document.querySelector(btn_readMorse);
            get_btn_readMorse.style.opacity="1";
            

            get_input.addEventListener('input', function () {
                const inputValue = get_input.value.toLowerCase();
                get_place_to_paste.innerHTML = '';

                for (const letter of inputValue) {
                    for (let i = 0; i < table_with_translations.length; i++) {
                        if (table_with_translations[i].letter === letter) {
                            get_place_to_paste.innerHTML += table_with_translations[i].mors_icon;
                        }
                    }
                }
            });
        }
    }

    read_mors(button, eventListener, transition_place, short_signal_link, long_signal_link) {
        const short_signal = new Audio(short_signal_link);
        const long_signal = new Audio(long_signal_link);

        const get_btn = document.querySelector(button);
        const get_transition_place = document.querySelector(transition_place);

        get_btn.addEventListener(eventListener, async () => {
            if (get_transition_place.innerHTML === '') {
                alert('wpisz text do inputu ;}');
            } else {
                const code_mos = get_transition_place.querySelectorAll('i');
                get_btn.style.pointerEvents = "none";
                code_mos.forEach(i => i.style.color = "black");

                for (let i = 0; i < code_mos.length; i++) {

                    if (code_mos[i].classList.contains('circle')) {
                        code_mos[i].style.color = "red";
                        await this.#playSignal(short_signal);
                    } else if (code_mos[i].classList.contains('line')) {
                        code_mos[i].style.color = "red";
                        await this.#playSignal(long_signal);
                    } else if (code_mos[i].classList.contains('line-rotated')) {
                        code_mos[i].style.color = "var(--color_2)";
                        await this.#pause(500);
                    }
                    else if (code_mos[i].classList.contains('break')) {
                        code_mos[i].style.color = "var(--color_2)";
                        await this.#pause(1200);
                    }
                }
                get_btn.style.pointerEvents = "all";
            }
        });

    }

    #playSignal(signal) {
        return new Promise((resolve) => {
            signal.play();
            signal.onended = resolve;
        });
    }

    #pause(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }
    #validateInput(input,patternValue) {
        
        
        if (!patternValue.test(input.value)) {
            input.setCustomValidity('Dozwolone znaki to: ., /, #, -');
        } else {
            input.setCustomValidity('');
        }
    }

    translate_chars(table_with_translations, input, place_to_paste,btn_readMorse) {
        if (document.querySelector(input)) {
            const polishChars='ąęńśćżźó';
            const get_input = document.querySelector(input);
            const get_place_to_paste = document.querySelector(place_to_paste);
            const get_btn_readMorse=document.querySelector(btn_readMorse);
            get_btn_readMorse.style.opacity="0";
            
            get_input.addEventListener('input', function () {
              


                const inputValue = get_input.value.trim();
                get_place_to_paste.innerHTML = '';
                const words = inputValue.split('/#/');

                for (const word of words) {
                    const letters = word.split('/');
                    for (const mors_letter of letters) {
                        for (let i = 0; i < table_with_translations.length; i++) {
                            if (table_with_translations[i].mors === mors_letter) {
                                if(polishChars.includes(table_with_translations[i].letter)){
                                    console.log("polski znak");
                                    continue;
                                }
                                else{
                                    console.log('OK OK')
                                    get_place_to_paste.innerHTML += table_with_translations[i].letter;
                                }
                            
                            }
                           

                        }
                    }
                    get_place_to_paste.innerHTML += ' ';
                }
            });
        }
    }
}

class ElementalCreator{
    #contener;
    #text;
    constructor(contener,dictionaryClass=null){
        this.#contener = this.getElement(contener);
        this.useMors = new UseMors(dictionaryClass);
        this.#text="5 liter alfabetu";
        this.elemTxt=this.getElement('.one');
        this.setText();

        this.isComplete('inp')
    }
    setText(){
        this.elemTxt.textContent=this.#text;
    }
    getElement(element){
        return document.querySelector(element);
    }
    #clearChildren(contener){
        while(contener.firstChild){
            contener.removeChild(contener.firstChild);
        }
       
    }
    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
    
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    
        return true;
    }
    loadFromLocalStorage() {
        const storedDict = localStorage.getItem("Dictionary");
        if (storedDict) {
            const dictArray = JSON.parse(storedDict);
            this.useMors.yourDictionary.dictionary = new Map(dictArray);
        }
    }

    showDictionary(className_inp,dictionary,contener,element='input'){
        console.log("PATRZ: ",dictionary);
        dictionary=[...dictionary];
        this.#clearChildren(contener);
        for(let i=0;i<dictionary.length;i++){
            console.log("PATRZ: ",dictionary);


            const inp = document.createElement(element);
            inp.className = className_inp;
            inp.id = dictionary[i][0];
            inp.placeholder = inp.id;
            inp.value=dictionary[i][1];
    
            const label = document.createElement('label');
            label.htmlFor = inp.id;
            label.textContent = inp.id;
    
            label.appendChild(inp);

            const morsDiv = document.createElement('div');
            morsDiv.className = 'morsDiv';
            
            if(this.useMors.lookForLetters(inp.id).mors_icon){
                morsDiv.innerHTML = this.useMors.lookForLetters(inp.id).mors_icon;

                if (morsDiv.lastChild.previousElementSibling && morsDiv.lastChild.previousElementSibling.className === 'fa-solid fa-minus line-rotated mors_icon') {
                    morsDiv.removeChild(morsDiv.lastChild.previousElementSibling);
                }
            }
            label.appendChild(morsDiv);

            // usuwam "/", jeśli jest obecna
            

            const regExp = this.useMors.createRegex(inp.id, circleLetters, lineLetters);
            // console.log('REGEXP: ', regExp);

            this.useMors.validateText(regExp, inp, [...morsDiv.children]);
    
            contener.appendChild(label);
        

        }

    }

    isComplete(className_inp){
        window.addEventListener('DOMContentLoaded',()=>{
            this.loadFromLocalStorage();

        // Sprawdzam, czy słownik jest pełny i sortujemy, jeśli jest
            if (this.useMors.checkIsComplete(this.useMors.yourDictionary.dictionary.size, this.useMors.yourDictionary.alphabet.length)) {
                this.#text="ZOBACZ / EDYTUJ";
                this.setText();
                console.log("---------------KONIEC-------------");
                this.useMors.sortDictionary(this.useMors.yourDictionary.dictionary);

                this.showDictionary(className_inp,this.useMors.yourDictionary.dictionary,this.#contener,'input')
                return 
            }
        })
    }

    createInputs(clearPrev, className_inp, id_table = [], numberOfInps, useMors,blockOthers) {
        this.loadFromLocalStorage();
        this.#text=`litery z alfabetu`;
        this.setText();

        if(blockOthers){
            const btn_first5=this.getElement('.one');
            const btn_yourname=this.getElement('.two');
            //TU BYŁA ZMAINA W OBU BYL JAKIS "elementalCreator", ktoryc pokazywal ze nie istnieje

            btn_first5.style.pointerEvents="none";
            btn_yourname.style.pointerEvents="none";
        }

        // Sprawdzam, czy słownik jest pełny i sortuje, jeśli jest
        if (this.useMors.checkIsComplete(this.useMors.yourDictionary.dictionary.size, this.useMors.yourDictionary.alphabet.length)) {
            this.#text="ZOBACZ / EDYTUJ";
            this.setText();
            console.log("---------------KONIEC-------------");
            this.useMors.sortDictionary(this.useMors.yourDictionary.dictionary);

            this.showDictionary(className_inp,this.useMors.yourDictionary.dictionary,this.#contener,'input')
            return 
        }


        if (clearPrev) {
            this.#clearChildren(this.#contener);
        }
        let lastindex = 0;
    
        // Sprawdzamy, czy id_table odpowiada alfabetowi
        if (this.arraysEqual(id_table, this.useMors.yourDictionary.alphabet.toUpperCase().split(''))) {
            console.log('alfabet');
            // Pobieramy index ostatniej litery do kontynuacji od następnej litery
            lastindex = this.useMors.getLetterIndex(id_table, this.useMors.lastLetter);
            this.useMors.lastindex = lastindex;
        } else {
            console.log('imie');
        }
    
        // Sortujemy słownik według kluczy
        this.useMors.sortDictionary(this.useMors.yourDictionary.dictionary);

        
    
        for (let i = lastindex; i < numberOfInps + lastindex; i++) {
            if (i >= id_table.length) {
                break; 
            }
    
            this.useMors.lastLetter = id_table[i];
            console.log("OSTATNI ELEMENT: ", this.useMors.lastLetter);
            console.log("JEGO INDEX: ", this.useMors.getLetterIndex(id_table, this.useMors.lastLetter));
    
            // Sprawdzamy, czy litera już istnieje w słowniku
            if (this.useMors.checkAlphabet(id_table[i])) {
                numberOfInps++;
                console.log("LICZBA DO STWORZENIA: ",numberOfInps);
                // TUTAJJJJJJ:: 

                // if (confirm("Chcesz zmienić wartość dla tej litery?")) {
                //     console.log('ok');
                // } else {
                //     continue;
                // }

                continue;
            }

            

            const inp = document.createElement('input');
            inp.className = className_inp;
            inp.id = id_table[i];
            inp.placeholder = inp.id;
            inp.setAttribute('list',inp.id+"_list")

            const datalist=document.createElement('datalist');
            datalist.id=inp.id+"_list";

            console.log(inp.id)
            let actual_sugestionList=this.useMors.sugestionList.get(inp.id.toLocaleUpperCase());
            console.log(actual_sugestionList)

            for(let x=0;x<actual_sugestionList.length;x++){
                const option=document.createElement('option');
                option.value=actual_sugestionList[x];

                datalist.appendChild(option);
            }
    
            const label = document.createElement('label');
            label.htmlFor = inp.id;
            label.textContent = inp.id;
    
            label.appendChild(inp);
    
            if (useMors) {
                const morsDiv = document.createElement('div');
                morsDiv.className = 'morsDiv';
                if(this.useMors.lookForLetters(inp.id).mors_icon){
                    morsDiv.innerHTML = this.useMors.lookForLetters(inp.id).mors_icon;

                    if (morsDiv.lastChild.previousElementSibling && morsDiv.lastChild.previousElementSibling.className === 'fa-solid fa-minus line-rotated mors_icon') {
                        morsDiv.removeChild(morsDiv.lastChild.previousElementSibling);
                    }
                }
                label.appendChild(morsDiv);
    
                // usuwam "/", jeśli jest obecna
                
    
                const regExp = this.useMors.createRegex(inp.id, circleLetters, lineLetters);
                // console.log('REGEXP: ', regExp);
    
                this.useMors.validateText(regExp, inp, [...morsDiv.children]);
            }
            this.#contener.appendChild(label);
            this.#contener.appendChild(datalist);
        }
    
        if (lastindex + numberOfInps < id_table.length) {
            this.useMors.lastLetter = id_table[lastindex + numberOfInps];
        } else {
            this.useMors.lastLetter = id_table[id_table.length - 1];
        }


        console.log("KOLEJNE LITERY TO: ", this.useMors.lastLetter);
    
        let nextindex = this.useMors.getLetterIndex(id_table, this.useMors.lastLetter);
        console.log("PORÓWNANIE: ", lastindex, nextindex);
    
        // Sprawdzam, czy to ostatnia litera
        if (this.useMors.isLastLetter(nextindex)) {
            console.log('to była ostatnia "z"');
            console.log(id_table, this.useMors.yourDictionary.dictionary);
    
          
            const missingLetters = this.useMors.showMissingLetters([...id_table], this.useMors.yourDictionary.dictionary);
            console.log("Brakujące litery: ", missingLetters);
            lastindex = 0;
            this.useMors.lastLetter = missingLetters.length > 0 ? missingLetters[0] : id_table[0];
        }
    
    }
    
    createBtn_submit(className_btn,text) {
        const btn = document.createElement('button');
        btn.className = className_btn;
        btn.innerHTML = text;
        btn.type = "submit";
        

        console.log(this.#contener.children.length)
        if(!(this.#contener.children.length===0)){
            this.#contener.appendChild(btn);
        }

        this.submit(btn, '.mors_icon');

    }

    submit(btn, elements,unBlock) {

        btn.addEventListener('click', (e) => {
            const getElements = [...document.querySelectorAll(elements)];
            console.log(getElements)
            e.preventDefault();

            

            let isGreen=0;
            let isNotGreen=0;

            getElements.forEach(elem=>{
                
                if(elem.style.color!='green'){
                    isNotGreen++;
                    return;
                    
                }
                isGreen++;
            });

            if(isGreen===getElements.length){
                console.log('zatwierdam');
                this.getInformations('.inp');

                if(unBlock){
                    const btn_first5=elementalCreator.getElement('.one');
                    const btn_yourname=elementalCreator.getElement('.two');

                    btn_first5.style.pointerEvents="all";
                    btn_yourname.style.pointerEvents="all";
                }

            }
            else{
                alert('Przed wysłaniem dokończ tworzenie słownika')
            }
            
           
        });
    }

    getInformations(inpClassName){
        const getAll=[...document.querySelectorAll(inpClassName)];

        for (let i = 0; i < getAll.length; i++) {
            this.useMors.yourDictionary.addWord(getAll[i].id,getAll[i].value);
        }
        this.#clearChildren(this.#contener);
    }

}

class UseMors {
    constructor(dictionaryClass) {
        this.table_mors = mors_code;
        this.yourDictionary = dictionaryClass;
        this.lastLetter = 'A';
        this.sugestionList=suggestion_table;
    }

    lookForLetters(letter) {
        letter = letter.toLowerCase();
        const result = this.table_mors.find(item => item.letter === letter);
        if (result) {
            return result;
        } else {
            console.log('nie ma');
            return false;
        }
    }

    validateText(regex, inp, chars_icons = []) {
        if(inp.value!=""){
            if (regex.test(inp.value)) {
                chars_icons.forEach(char => char.style.color = 'green');
            } else {
                chars_icons.forEach(char => char.style.color = 'var(--color1)');
            }
        }
        inp.addEventListener('input', () => {
            if (regex.test(inp.value)) {
                chars_icons.forEach(char => char.style.color = 'green');
            } else {
                chars_icons.forEach(char => char.style.color = 'var(--color1)');
            }
        });
    }

    createRegex(letter = '', circleLetters = [], lineLetters = [], startsWith = true) {
        letter = letter.toLowerCase();
        let regexTxt = ``;

        if (startsWith) {
            regexTxt = `^${letter}[a-z]*`;
        }

        if (circleLetters.includes(letter) || lineLetters.includes(letter)) {
            regexTxt = `^[a-z]*`;
        }

        if(this.lookForLetters(letter).letter){
            const mors_chars = this.lookForLetters(letter).mors;

            console.log('----------')
            for (let i = 0; i < mors_chars.length; i++) {
                if (mors_chars[i] === '.') {
             
                    regexTxt += `[${circleLetters}][bcćdfghjklłmnńoópqrsśtuvwxyzżź_/\\s/-]*`
                } else if (mors_chars[i] === '-') {
                 
                    regexTxt += `[${lineLetters}][aąbćcdeęfghijklłmnńpqrsśtvwxyzżź_/\\s/-]*`;
                } else {
                    console.log('cos zle');
                }
            }

            
        }
        else{
            return;
        }
       
        console.log(regexTxt)
        return new RegExp(regexTxt, 'i');
    }

    checkAlphabet(letter) {
        if (this.yourDictionary.dictionary.has(letter)) {
            // alert("Litera: " + letter + " już ma swoje słówko");
            return true;
        } else {
        }
    }

    getLetterIndex(table = [], letter) {
        return table.indexOf(letter);
    }

    isLastLetter(indexLetter) {
        if (indexLetter === 25) {
            return true;
        }
    }

    showMissingLetters(table = [], dictionary) {
        return table.filter(letter => !dictionary.has(letter));
    }

    checkIsComplete(dictionarySize, alphabetLength) {
        return dictionarySize === alphabetLength;
    }

    sortDictionary(dictionary) {
        const sortedEntries = Array.from(dictionary.entries()).sort(([key1], [key2]) => key1.localeCompare(key2));
        const sortedMap = new Map(sortedEntries);
        this.yourDictionary.dictionary = sortedMap;
        console.log(this.yourDictionary.dictionary)

    }
}

class Dictionary{
    constructor(){
        this.alphabet='abcdefghijklmnopqrstuvwxyz';
        this.dictionary=new Map();
    }
    #convertMap(map){
        const array=[...map]
        return JSON.stringify(array);
    }

    addWord(letter,word){
        this.dictionary.set(letter,word);
        console.log(this.dictionary);

        localStorage.setItem("Dictionary",this.#convertMap(this.dictionary));

        console.log(localStorage.getItem("Dictionary"));
    }
}

class Exercises_Representation{
    #contener;

    constructor(contener){
        this.#contener = this.#getElement(contener);
    }

    #createElement(item) {
        return document.createElement(item);
    }

    #getElement(item) {

        return document.querySelector(item);
    }

    #clearChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    create_divQuiz(className1_main, className2_logoTxt, className3_type, className4_descriptionBtn,className5_descriptionTxt, elem1, elem2, quiz) {

        const mainDiv = this.#createElement(elem1);
        mainDiv.classList.add(className1_main);
        

        const logoTxt_p = this.#createElement(elem2);
        logoTxt_p.className = className2_logoTxt;
        logoTxt_p.textContent = "QUIZ";

        const type_p = this.#createElement(elem2);
        type_p.className = className3_type;
        type_p.innerHTML = quiz.type;
        type_p.classList.add(quiz.id);

        // SPRAWDZ TUTA, WYLACZONE OPISY: 

        // const desctription_btn = this.#createElement(elem2);
        // desctription_btn.className = className4_descriptionBtn;
        // desctription_btn.innerHTML = "<span data-pl='OPIS' data-es='LA DESCRIPCIÓN' data-en='DESCRIPTION'>OPIS</span>";

        const description_div = this.#createElement(elem1);
        description_div.className = className5_descriptionTxt;

        const desctription_p = this.#createElement(elem2);
        desctription_p.innerHTML = quiz.description;

        

        mainDiv.appendChild(logoTxt_p);
        mainDiv.appendChild(type_p);
        // mainDiv.appendChild(desctription_btn);
        description_div.appendChild(desctription_p);
        mainDiv.appendChild(description_div);
        this.#contener.appendChild(mainDiv);
    }

    start_quiz(btn,section_a,my_quiz_b,quiz){
    
        const button=section_a.querySelector(btn);
        const section_b=this.#getElement(my_quiz_b);
    
        button.addEventListener("click",()=>{
            section_b.style.display="block";
            new Navigation(my_quiz_b);
            
            this.crearAnswer(quiz);
            
        },{once:true});
    
    }

}

class Quiz_system{
    constructor(sectionQuiz){
        this.sectionQuiz=sectionQuiz;
        this.dictionary;
        this.results=new Results();
    }
    #createElement(item) {
        return document.createElement(item);
    }

    #getElement(item) {

        return document.querySelector(item);
    }

    #clearChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    loadFromLocalStorage() {
        const storedDict = localStorage.getItem("Dictionary");
        if (storedDict) {
            const dictArray = JSON.parse(storedDict);
            this.dictionary = new Map(dictArray);
        }
    }

    createBtn_submit(className_btn,text) {
        const btn = document.createElement('button');
        btn.className = className_btn;
        btn.innerHTML = text;
        btn.type = "submit";
        const contener=this.#getElement(this.sectionQuiz)
        contener.appendChild(btn);

    }
    #randomNumber(max,min){
        return Math.floor(Math.random()*(max-min + 1)+min);
    }

    #checkQuestion(question,answer){
        if(question.toLowerCase().trim()===answer.toLowerCase().trim()){
            return true;
        }
        return false;
    }
    #isEnd(actualIndex,max){
        if(actualIndex===max){
            return true;
        }
        return false;
    }
    #isSpace(element) {
        return element.includes(' ');
    }
    #checkIsPolish(element) {
        const polishChars = "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ";
        for (let char of element) {
            if (polishChars.includes(char)) {
                console.log("polski znak");
                return true;
            }
        }
        return false;
    }

    async #crearAnswer(questionNumber, dictionary, isMorse = false, isTranslate = false, isTranslateMors = false, isLetter = false) {
        console.log("ROBIE: ", questionNumber);
        console.log("Q-U-I-Z: ", dictionary);
        const sectionMain = this.#getElement(this.sectionQuiz);
        let timeAwait = 1300;
        let time_activeInp = 800;
        let actualQuestion = 0;

        const numberElem = this.#createElement('p');
        numberElem.className = "numberElem";
        let quiz_name = "";
        let message = '';

        let i = 0;
        while (i < questionNumber) {
            let key;
            let question;
            let answers;

            switch (true) {
                case isTranslate:
                    key = dictionary[this.#randomNumber(dictionary.length - 1, 0)];
                    question = key.word;
                    answers = key.translation;
                    quiz_name = 'Przetłumacz słowo';

                    if (this.#checkIsPolish(question) || this.#checkIsPolish(answers)) {
                        continue;
                    }
                    if (this.#isSpace(question) || this.#isSpace(answers)) {
                        continue;
                    }

                    break;

                case isMorse:
                    console.log(dictionary)
                    key = dictionary[this.#randomNumber(dictionary.length - 1, 0)];
                    question = key.letter;
                    answers = key.mors;
                    quiz_name = "Dopasuj Morse'a";

                    if (this.#checkIsPolish(question) || this.#checkIsPolish(answers)) {
                        continue;
                    }
                    if (this.#isSpace(question) || this.#isSpace(answers)) {
                        continue;
                    }

                    break;

                case isLetter:
                    console.log(dictionary)
                    key = dictionary[this.#randomNumber(dictionary.length - 1, 0)];
                    question = key.mors;
                    answers = key.letter;
                    quiz_name = "Dopasuj literę";

                    if (this.#checkIsPolish(question) || this.#checkIsPolish(answers)) {
                        continue;
                    }
                    if (this.#isSpace(question) || this.#isSpace(answers)) {
                        continue;
                    }

                    break;

                case isTranslateMors:
                    key = dictionary[this.#randomNumber(dictionary.length - 1, 0)];
                    question = key.translation;
                    answers = key.word;
                    quiz_name = 'Przetłumacz Morse\'a';

                    if (this.#checkIsPolish(question) || this.#checkIsPolish(answers)) {
                        continue;
                    }
                    if (this.#isSpace(question) || this.#isSpace(answers)) {
                        continue;
                    }

                    break;

                default:
                    if (dictionary) {
                        key = [...dictionary.keys()][this.#randomNumber(dictionary.size - 1, 0)];
                        question = key;
                        answers = dictionary.get(key);
                        quiz_name = 'Wpisz';

                        if (this.#checkIsPolish(question) || this.#checkIsPolish(answers)) {
                            continue;
                        }
                        if (this.#isSpace(question) || this.#isSpace(answers)) {
                            continue;
                        }
                    } else {
                        message = "Dokończ tworzenie słownika ;)";
                        const questionElem = this.#createElement('h2');
                        questionElem.classList.add('messageTxt');
                        questionElem.textContent = message;
                        sectionMain.appendChild(questionElem);
                        return;
                    }
                    break;
            }

            console.log(key, question, answers);

            await new Promise((resolve) => {
                console.log("tworze")
                const contener = this.#createElement('div');
                contener.classList.add('quiz_write_contener');

                const questionElem = this.#createElement('h2');
                questionElem.classList.add('questionValue');
                questionElem.textContent = question;

                numberElem.textContent = "PYTAŃ: " + (questionNumber - i);

                const input = this.#createElement('input');
                input.classList.add('inp');

                const hintBtn = this.#createElement('button');
                hintBtn.innerHTML = '<i class="fa-solid fa-question"></i>';
                hintBtn.classList.add('btnDesign1');

                const txt = this.#createElement('p');
                txt.classList.add('decorateTxt');

                const hint = this.#createElement('p');
                hint.classList.add('hintTxt');
                let hintTxt = ' ';
                hint.textContent = hintTxt;

                contener.appendChild(questionElem);
                contener.appendChild(numberElem);
                contener.appendChild(input);
                contener.appendChild(hintBtn);
                contener.appendChild(hint);
                contener.appendChild(txt);

                sectionMain.appendChild(contener);

                if (i > 0) {
                    time_activeInp = 0;
                }

                setTimeout(() => input.focus(), time_activeInp);

                let index = 0;
                hintBtn.addEventListener('click', () => {
                    if (index !== answers.length) {
                        hintTxt = answers[index];
                        hint.textContent += hintTxt;
                        index++;
                    }
                });

                input.addEventListener("input", () => {
                    if (this.#checkQuestion(input.value, answers)) {
                        console.log('ok');
                        input.readOnly = true;
                        txt.textContent = "GRATULACJE !";

                        setTimeout(() => {
                            resolve();
                            this.#clearChildren(sectionMain);
                            actualQuestion++;
                            console.log("AKTUALNY: ", actualQuestion);
                            input.readOnly = false;

                            if (this.#isEnd(actualQuestion, questionNumber)) {
                                const endContener = this.#createElement('div');
                                endContener.classList.add('quiz_write_contener');

                                const endQuestionElem = this.#createElement('h2');
                                endQuestionElem.classList.add('questionValue');
                                endQuestionElem.textContent = question;

                                const endTxt = this.#createElement('p');
                                endTxt.classList.add('decorateTxt');
                                endTxt.innerHTML = 'KONIEC, GRATULACJE ! <br> <i class="fa-solid fa-ghost ghost_end"></i>';

                                endContener.appendChild(endQuestionElem);
                                endContener.appendChild(endTxt);
                                sectionMain.appendChild(endContener);

                                this.results.addResult(quiz_name)
                            }

                        }, timeAwait);
                    }
                });
            });

            i++;
        }
    }

    async crearAnswer_write(questionNumber) {
        await this.#crearAnswer(questionNumber, this.dictionary, false, false);
    }

    async crearAnswer_mors(questionNumber, code_mors) {
        await this.#crearAnswer(questionNumber, code_mors, true, false, false);
    }

    async crearAnswer_letter(questionNumber, code_mors) {
        await this.#crearAnswer(questionNumber, code_mors, false, false, false, true);
    }

    async crearAnswer_translate(questionNumber, table_words) {
        await this.#crearAnswer(questionNumber, table_words, false, true, false);
    }

    async crearAnswer_translateMors(questionNumber, table_words) {
        await this.#crearAnswer(questionNumber, table_words, false, false, true);
    }

    quiz_write(elementClick) {
        new Navigation(elementClick, this.sectionQuiz, "click");
        elementClick = this.#getElement(elementClick);
        const mainContener = this.#getElement(this.sectionQuiz);

        elementClick.addEventListener('click', () => {
            this.#clearChildren(mainContener);
            this.loadFromLocalStorage();
            console.log(this.dictionary);

            this.crearAnswer_write(8);
        });
    }

    quiz_mors(elementClick, code_mors) {
        new Navigation(elementClick, this.sectionQuiz, "click");
        elementClick = this.#getElement(elementClick);
        const mainContener = this.#getElement(this.sectionQuiz);

        elementClick.addEventListener('click', () => {
            this.#clearChildren(mainContener);
            this.loadFromLocalStorage();

            this.crearAnswer_mors(8, code_mors);
        });
    }

    quiz_letter(elementClick, code_mors) {
        new Navigation(elementClick, this.sectionQuiz, "click");
        elementClick = this.#getElement(elementClick);
        const mainContener = this.#getElement(this.sectionQuiz);

        elementClick.addEventListener('click', () => {
            this.#clearChildren(mainContener);
            this.loadFromLocalStorage();

            this.crearAnswer_letter(8, code_mors);
        });
    }

    quiz_translate(elementClick, table_words) {
        new Navigation(elementClick, this.sectionQuiz, "click");
        elementClick = this.#getElement(elementClick);
        const mainContener = this.#getElement(this.sectionQuiz);

        elementClick.addEventListener('click', () => {
            this.#clearChildren(mainContener);
            this.loadFromLocalStorage();

            this.crearAnswer_translate(3, table_words);
        });
    }

    quiz_translateMors(elementClick, table_words) {
        new Navigation(elementClick, this.sectionQuiz, "click");
        elementClick = this.#getElement(elementClick);
        const mainContener = this.#getElement(this.sectionQuiz);

        elementClick.addEventListener('click', () => {
            this.#clearChildren(mainContener);
            this.loadFromLocalStorage();

            this.crearAnswer_translateMors(3, table_words);
        });
    }

}

class Results {
    #numberElem;
    #quizUlElem;
    constructor() {
        this.completedQuiz = JSON.parse(localStorage.getItem("Completed_quiz")) || [];
        this.#numberElem=document.querySelector('.quiz_number');
        this.#quizUlElem=document.querySelector('.quiz_list');
        this.#init()

    }

    #init(){
        window.addEventListener('DOMContentLoaded',()=>{
            //TUTAJ:  
            
            if(JSON.parse(localStorage.getItem("Completed_quiz")) ){
                console.log( JSON.parse(localStorage.getItem("Completed_quiz")));

                let quizList=[...JSON.parse(localStorage.getItem("Completed_quiz"))];
                quizList.forEach(quiz=>{
                    this.#addResult_toPage(quiz)
                })
            }
           
           
            

        })
    }

   
    #convert(arr) {
        return JSON.stringify(arr);
    }

  
    addResult(quizName) {
        let date=new Date();
        const result = {
            name: quizName,
            date: date.toLocaleDateString(),
            hour: date.getHours(),
            minute: date.getMinutes()
        };
        
        this.completedQuiz.push(result);

        localStorage.setItem("Completed_quiz", this.#convert(this.completedQuiz));

        console.log(localStorage.getItem("Completed_quiz"));

        this.#addResult_toPage(result)
    }

    #addResult_toPage(result_inf){
        this.#numberElem.textContent=this.completedQuiz.length;
        const li=document.createElement('li');

        const p_name=document.createElement('p');
        p_name.innerHTML=`<b>Nazwa:</b> <i>"${result_inf.name}"</i>`;
        const p_date=document.createElement('p');
        p_date.innerHTML=`<b>Data:</b> ${result_inf.date} ${result_inf.hour ===undefined? "": ' , '+result_inf.hour+':'}${result_inf.minute===undefined? "": result_inf.minute}`;

        li.appendChild(p_name);
        li.appendChild(p_date);
        this.#quizUlElem.appendChild(li);


    }
}

class Language{

    constructor(){
        this.elements='data-';
        this.languages=['pl','es','en'];

        

    }
    changeLanguage(language){
        const get_elements=document.querySelectorAll('['+this.elements+language+']')

        get_elements.forEach(element=>{
            const text = element.getAttribute(this.elements+language);
            if(text){
                element.innerHTML=text;
                
                const flag=document.querySelector('.'+language);
                flag.style.borderBottom='2px solid var(--color1)';
                
            }
        });
        this.#set_lang_toLocaleStorage(language)
        console.log("LANG: ",localStorage.getItem('lang'))

    }
   
    get_elements(className){
        const elements=document.querySelectorAll(className);
        for(let i=0;i<elements.length;i++){
            elements[i].addEventListener('click',()=>{
                this.changeLanguage(this.languages[i]);
                elements.forEach(element=>{
                    element.style.borderBottom='none';
                });
                elements[i].style.borderBottom='2px solid var(--color1)';
            })
        }


    }
    #set_lang_toLocaleStorage(lang){
        return localStorage.setItem('lang',lang)
    }

}

document.addEventListener('DOMContentLoaded',()=>{
    const navBar=new IconInteraction();
    navBar.addClassName('navBar','.navList','click','fa-solid fa-bars-staggered navBar','fa-solid fa-rectangle-xmark navBar','320px');




    const lamp=new IconInteraction();
    lamp.addAnimation(".navIcon","roll 1.5s forwards","click",true);
    lamp.changemode(lightmode,darkmode,".navIcon",'.mainPage','url("../img/jellyfish_2.jpg")','url("../img/stingray.jpg")');

    new Navigation('.headline','.section1',"click")

 
    // LANGUAGE CHANGER:
   
    const lang = new Language();

    lang.get_elements('.lenguage_elem');
    lang.changeLanguage(localStorage.getItem('lang'))

  
    


})

