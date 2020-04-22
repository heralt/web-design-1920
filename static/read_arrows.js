import Speech from '../src/speak-tts.js';

const speech = new Speech();

 if(speech.hasBrowserSupport()){
     console.log('has browser support');
 }

 speech.init({
     'lang': 'nl-NL',
     'rate': 1.1,
     'pitch': 1,
     'volume': 1,
 });

const li = $('li');
let liSelected;

window.addEventListener("keydown", ev => {
    let next;
    if (ev.key === "ArrowDown") {
        //als er een waarde in li zit
        if (liSelected) {
            //remove class from html tag
            liSelected.removeClass('selected');
            next = liSelected.next();
            if (next.length > 0) {
                //add class to html tad
                liSelected = next.addClass('selected');
            } else {
                //stop anders deze waarde in liSelected
                liSelected = li.eq(0).addClass('selected');
            }
        } else {
            liSelected = li.eq(0).addClass('selected');
        }
    } else if (ev.key === "ArrowUp") {
        if (liSelected) {
            liSelected.removeClass('selected');
            next = liSelected.prev();
            if (next.length > 0) {
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
        /*something(agenda_tab);*/
        speek.programTab(agenda_tab)
    }
});

const speek = {
    programTab: function(tab){
        switch (tab) {
            case "vandaag":
                speek.utterences(schedule.vandaag());
                break;
            case "week":
                speek.utterences(schedule.week());
                break;
            case "maand":
                speek.utterences(schedule.maand());
                break;
        }
    },
    utterences: function(sentence){
        speech.speak({
            text: sentence,
            queue: false
        });
    }
};

const schedule = {
    vandaag: function(){
        let vandaag = 'Woensdag 22 april;';
        vandaag += 'Je hebt baan training van 9 tot 1; massage om 16:15; ';
        return vandaag;
    },
    week: function() {
        let week = 'Morgen heb je, ';
         week += '';
         week += 'vrijdag heb je';
         week += 'zaterdag heb je';
         week += 'zondag heb je';
        return week;
    },
    maand: function(){
        let maand = 'Hier is je maand planning van april 2020.';
        maand += 'Het bestaat uit twee fases, Hypertrophy van 1 april tot 17 april en, Anaerobe capaciteit-krachtduur van ' +
            '18 tot 30 april. ';
        maand += 'je hebt 7 trainingen en 1 wedstrijd.';
        maand += 'Je traint op,, 2 april van 3 tot 5, 7 april van 10 tot 1, 10 april van 10 tot 12:30, 14 april van 11 tot 1' +
            ', 21 april van 10 tot 1, 24 april van 10 tot 1, ' +
            '28 april van 10 tot 1.';
        maand += 'Verder heb je 1 oefenwedstrijd op 17 april, van 10 tot 1.';
        return maand;
    }
};



