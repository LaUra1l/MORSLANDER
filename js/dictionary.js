
const yourDictionary=new Dictionary();
const elementalCreator=new ElementalCreator('.inpContener',yourDictionary);

localStorage.removeItem('Dictionary')

function createInps(){
    const btn_first5=elementalCreator.getElement('.one');
    const btn_yourname=elementalCreator.getElement('.two');

    btn_first5.addEventListener('click',()=>{

        elementalCreator.createInputs(true,'inp',yourDictionary.alphabet.toUpperCase(),5,true);
        elementalCreator.createBtn_submit('btn_submit','<i class="fa-regular fa-thumbs-up"></i>')
    });
    btn_yourname.addEventListener('click',()=>{
        let yourname=new Set(prompt("Jak masz na imie?"));
    
        yourname=[...yourname];

       if(yourname.length>0){
        console.log('mam imie')
        yourname.forEach(letter=>letter.toUpperCase());
        elementalCreator.createInputs(true,'inp',yourname,yourname.length,true);
            elementalCreator.createBtn_submit('btn_submit','<i class="fa-regular fa-thumbs-up"></i>')
        
       }
       else{
        return;
    }
       
    });
}
createInps();


