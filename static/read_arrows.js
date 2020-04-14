/*const Speech = require ('speak-tts');
const speech = new Speech();

if(speech.hasBrowserSupport()){
    console.log('speech synthesis is possible');
}*/

const li = $('li');
let liSelected;

window.addEventListener("keydown", ev => {
    if(ev.key === "ArrowDown"){
        //als er een waarde in li zit
        if(liSelected){
            //remove class from html tag
            liSelected.removeClass('selected');
            next = liSelected.next();
            if(next.length > 0) {
                //add class to html tad
                liSelected = next.addClass('selected');
            } else {
                //stop anders deze waarde in liSelected
                liSelected = li.eq(0).addClass('selected');
            }
        } else {
            liSelected = li.eq(0).addClass('selected');
        }
    } else if(ev.key === "ArrowUp"){
        if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.prev();
            if(next.length > 0) {
                liSelected = next.addClass('selected');
            } else {
                liSelected = li.last().addClass('selected');
            }
        } else {
            liSelected = li.last().addClass('selected');
        }
    }

    if((ev.key === "ArrowUp")||(ev.key === "ArrowDown")){
        let agenda_tab = liSelected[0].innerText;
        something(agenda_tab);
    }
});

function something(tekst){
    switch (tekst) {
        case "vandaag":
            console.log('vandaag heb je blabla');
            break;
        case "week":
            console.log('deze week heb je blabla');
            break;
        case "maand":
            console.log('deze maand heb je blabla');
            break;
    }
}