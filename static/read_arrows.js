import Speech from '../src/speak-tts.js';
/*import dag from '../static/tabs/day';
import months from '../static/tabs/week';
import week from '../static/tabs/months';*/

const speech = new Speech();

 if(speech.hasBrowserSupport()){
     console.log('has browser support');
 }

let rate = 1.2;
let tabPos = 0;
let maandPos = 0;
let groet = 0;

 speech.init({
     'lang': 'nl-NL',
     'rate': rate,
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
    let agenda_tab = liSelected[0].innerText;

    if((ev.key === "ArrowUp")||(ev.key === "ArrowDown")){
        tabPos = 0;
        maandPos = 0;
        speek.programTab(agenda_tab,tabPos,maandPos)
    }

    if(ev.key === "ArrowRight"){
        if(agenda_tab === "vandaag"){
            if(tabPos < dag.length-1){tabPos += 1;}
            else{tabPos = 1}
        } else if(agenda_tab === "week"){
            if(tabPos < week.length-1){tabPos += 1;}
            else{tabPos = 1}
        } else if(agenda_tab === "maand"){
            if(tabPos < maanden[maandPos].maand.length-1){tabPos += 1;}
            else{tabPos = 0}
        }
        speek.programTab(agenda_tab,tabPos,maandPos)
    }

    if(ev.key === "ArrowLeft"){
        if(agenda_tab === "vandaag"){
            if(tabPos > 1){tabPos -= 1;}
            else{tabPos = week.length-1}
        } else if(agenda_tab === "week"){
            if(tabPos > 0){tabPos -= 1;}
            else{tabPos = week.length-1}
        } else if(agenda_tab === "maand"){
            if(tabPos > 0){tabPos -= 1;}
            else{tabPos = maanden[maandPos].maand.length-1}
        }
        speek.programTab(agenda_tab,tabPos,maandPos)
    }

    if(ev.key === "Enter"&& agenda_tab === "maand"){
        tabPos = 0;
        if(maandPos < maanden.length-1){
            maandPos += 1;
        }
        speek.programTab(agenda_tab,tabPos,maandPos);
    }

    document.getElementById("body").innerHTML = `<h1><strong>${agenda_tab}</strong></h1>`;
});


const speek = {
    programTab: function(tab,pos,posMaand){
        switch (tab) {
            case "vandaag":
                speek.utterences(dag[pos].dag);
                break;
            case "week":
                speek.utterences(week[pos].dag);
                break;
            case "maand":
                speek.utterences(maanden[posMaand].maand[pos].activiteit);
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

const dag = [
    {dag:'Hey Larissa, hoe gaat het. Met de pijlknop naar beneden ga je van dag naar week naar maand;; ' +
            'met de rechter pijl toets ga je naar de volgende tab en de linker pijl toets ga je naar de vorige;;'},
    {dag:'vandaag;; Baan training van 9 tot 1;; herstel massage om 16:15;;'}
];

const week = [
    {dag: "weekplanning;;"},
    {dag: "maandag;; 17:00 vanaf Schiphol naar 22:00 te Anadia"},
    {dag: "dinsdag;; Vrachtauto legen op de wielerbaan;; baangewenning"},
    {dag: "woensdag;; Je hebt baan training van 9 tot 1;; en een massage om 16:15;;"},
    {dag: "donderdag;; je hebt baan training van 2 tot 5;;"},
    {dag: "vrijdag;; je hebt baan training van 9 tot 1;; daarna 1,5 uur weg training;;neem je full gear mee;;"},
    {dag: "zaterdag;; je hebt kracht training van 08:45 tot 10:30;;  daarna baan of weg training;;"},
    {dag: "zondag;; je hebt baan training van 9 tot 1"},
];

const maanden = [
    {maand:[
            {activiteit:'Maand planning januari'},
            {activiteit:'trainingen;; je traint 2 keer deze maand;; 7 en 8 januari;;'},
            {activiteit:'wedstrijden;; je bent op het milton WK van 24 februari tot 3 februari'},
            {activiteit:'periodes;; deze maand heeft geen trainingsperiodes'},
        ]},
    {maand:[
            {activiteit:'Maand planning februari'},
            {activiteit:'trainingen;; je hebt zelf duur trainingen op 16 februari tot en met 29 februari'},
            {activiteit:'wedstrijden;; je hebt geen wedstrijden deze maand'},
            {activiteit:'periodes;; Deze maand bestaat uit twee periodes;; rust van 3 februari tot 9 februari;;' +
                    ' conditie-duur-belastbaarheid van 10 tot 29 februari;;'}
        ]},
    {maand:[
            {activiteit:'Maand planning maart'},
            {activiteit:'trainingen;; je hebt 9 trainingen;; 3 maart;; 6 maart;; 10 maart;; 13 maart;; 17 maart;; 19 maart' +
                    '24 maart;; 27 maart en 31 maart'},
            {activiteit:'wedstrijden;; je hebt geen wedstrijden in maand'},
            {activiteit:'periodes;; Deze maand bestaat uit een periode;; hypertrophyfase-vorm van 2 tot 31 maart'}
        ]},
    {maand:[
            {activiteit:'Maand planning april'},
            {activiteit:'trainingen;; je traint 7 keer deze maand;; 2 april en 7 april;; 10 april ;; 14 april;; 21 april;; 24 april ;; 28 april.'},
            {activiteit:'wedstrijden;; Je hebt 1 wedstrijd;; oefenwedstrijd op 17 april;;'},
            {activiteit:'periodes;; deze maand bestaat uit twee periodes;; Hypertrophy van 1 april tot 17 april en;; Anaerobe capaciteit-krachtduur van 18 tot 30 april;;'}
        ]},
    {maand:[
            {activiteit:"Maand planning Mei;;"},
            {activiteit: "trainingen;; je traint 8 keer deze maand;; 1 mei;; 5 mei;; 8 mei;; 12 mei;; 13 mei;; 22 mei;; 26 mei en 29 mei" },
            {activiteit: "wedstrijden;; je hebt 1 wedstrijd deze maand;; op 19 mei"},
            {activiteit:"periodes;; deze maand bestaat uit twee periodes;; anaerobe vermogen - snelheid van 4 tot 22 mei;;" +
                    "en conditie van 23 tot 31 mei"}
        ]},
    {maand:[
            {activiteit:'Maand planning juni'},
            {activiteit:'trainingen;; je traint 11 keer deze maand;; 2 juni;; 3 juni;; 5 juni;; 9 juni;; 11 juni;; 16 juni;; ' +
                    '17 juni;; 19 juni;; 22 juni;; 30 juni'},
            {activiteit:'wedstrijden;; je hebt 1 wedstrijd deze maand;; op 12 juni'},
            {activiteit:'periodes;; deze maand bestaat uit een periode;; max strength van 22 tot 30 juni'}
        ]},
    {maand:[
            {activiteit:'Maand planning juli'},
            {activiteit:'trainingen;; je hebt 12 trainingen deze maand;; 3 juli;; 7 augustus;; 10 juli;; 15 juli;; 17 juli;; 21 juli;; ' +
                    '24 juli;; 28 juli;; 31 juli'},
            {activiteit:'wedstrijden;; je hebt deze maand 1 wedstrijd;; op 14 juli'},
            {activiteit:'periodes;; juli bestaat uit 4 periodes;; max strength van 1 tot 17 juli;; Anaerobe capaciteit van 1 tot 5 juli;;' +
                    'anaerobevermogen snelheid van 6 tot 24 juli en relatief herstel van 25 tot 31 juli'}
        ]},
    {maand:[
            {activiteit:'Maand planning augustus'},
            {activiteit:'trainingen;; je bent in Anadia van 3 tot 15 augustus;;'},
            {activiteit:'wedstrijden;; Je bent op de olympische spelen van 17 augustus tot 6 september;; 27 augustus heb je 1 kilometer;; ' +
                    '28 augustus heb je de 500 meter'},
            {activiteit:'periodes;; deze maand bestaat uit 1 periode;; Anaerobevermogen snelheid van 3 tot 15 augustus'},
        ]},
    {maand:[
            {activiteit:'Maand planning september'},
            {activiteit:'trainingen;; je hebt deze maand geen trainingen'},
            {activiteit:'wedstrijden;; je hebt deze maand geen wedstrijden'},
            {activiteit:'periodes;; deze maand heeft geen trainingsperiodes'},
        ]},
];






