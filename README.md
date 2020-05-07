# Web Design @cmda-minor-web 1920

Web Design gaat over het ontwerpen en testen van Interactie. Het voordeel van een Frontend Developer (en Web Designer) is dat die techniek begrijpt, kan toepassen én verstand heeft van UX en design. Als je Web technieken begrijpt kun je je ideeën snel prototypen en testen met echte gebruikers, in een browser. Je kan dan aanpassingen doorvoeren, uitproberen en weer testen ...

In het vak Web design gaan we dingen ontwerpen voor echte mensen. Is er goede interactie? Kan je 'mens' je product op een prettige manier bedienen? Wat voor principes heb je gebruikt en getest? En zit er wel _nonsense_ in?

## Agenda webapp voor Larissa
Het doel van webdesign is het ontwikkelen van een applicatie voor een individu. Tijdens het ontwikkelen moet het product constant getest en geitereerd worden. Dit zou ervoor moeten zorgen dat aan het einde van dit vak er een product staat dat precies is afgestemd op de persoon waarvoor het ontwikkeld is. 

De persoon waarvoor ik dit product ontwikkel is Larissa. Zij is blind en tandemwielrenner op top niveau. Dit jaar zou ze meedoen aan de olympische spelen, dat is het niveau waarop zei fietst. Als topsporter heeft zei een druk schema, want je bent constant aan het trainen. Zei heeft een schema dat ze wekelijks krijgt en een jaar planning. Dit is waar het probleem ligt, zei kan de schema's niet in haar eentje doornemen. Dit doet ze momenteel met haar tandem partner. Ik heb een manier bedacht waarbij ze wel in haar eentje de schema's kan doornemen.

### inhoudsopgave
- [User scenario](#User-scenario)
- [Tests voorbereiding](#Test-voorbereiding)
- [Test resultaten](#Test-resultaten)
- [Exclusive design principles](#Exclusive-design-principles)

## Link 
agenda app: [link](https://blind-agenda-app.herokuapp.com/).

### Controls

- `arrow up` `arrow down` navigeren over dag/week/maand
- `arrow left` `arrow right`: 

tab **week** navigeren over dagen 

tab **maand** navigeren over trainingen/wedstrijden/periodes 
- `enter` selecteert een element
tab **maand** van maand naar maand

## User scenario

### Wie is de gebruiker?
Dit product is ontwikkeld voor Larissa. Larissa is tandemwielrenner op topniveau, paardrij hobbyist, maar ze is ook heel slechtziend. Ze kan nog kleuren zien en constrasten tussen kleuren als het contrast groot genoeg is. Om deze rede gebruikt zij een screenreader, omdat haar ogen gebruiken heel veel moeite kost. 

### Wat wilt de gebruiker op mijn site?
Als Larissa haar schema zou willen doornemen, heeft zij haar tandempartner nodig. Dit zou zij alleen willen doen. Naast dat ze het niet kan lezen, is het schema erg onduidelijk. Zij zou het fijn vinden als ze alleen haar schema kan checken en dat de informatie te horen krijgt die duidelijk is. De informatie moet naast duidelijk, ook fijn verdeeld zijn in hapgrootte stukken.

### Hoe gaat de gebruiker zijn doel bereiken?
Omdat Larissa slechtziend tot blind is moet de informatie op de site gesproken worden met een screenreader of text-to-speech programma, hiervoor gebruik ik een text-to-speech programma. Verder vind ze het heel fijn om de pijlen toetsen te gebruiken om over een site te navigeren, dus zal dit worden toegepast.

### Waarom zou de gebruiker mijn site bezoeken?
Voor het zo fijn mogelijk krijgen van haar informatie, door gebruik te maken van de `pijlen` en `enter` toetsen. En omdat de informatie verdeeld is op een manier dat ze niet naar extra informatie hoeft te luisteren als ze dat niet wilt. 

### scenario
Tijdens het ontbijten checkt Sandra altijd wat er vandaag op de training behandelt gaat worden. Ze gaat naar haar agenda app en gaat naar de tab vandaag en checkt wat er op de planning staat. Ze hoort het type training en de tijden en bereidt zich voor op een intensieve training. Nu ze toch al op de site is, herinnert ze zich dat ze moet weten hoelaat ze donderdag klaar is met trainen, want ze had met vrienden afgesproken om te gaan paardrijden. Ze gaat naar de week tab en checkt wat ze donderdag op de planning heeft staan, en laat haar vriendinnen weten hoelaat ze kan afspreken. 

## Test voorbereiding
De eerste test was vooral om Larissa wat beter te leren kennen en wat vragen te stellen over haar blindheid. Het Larissa team deed dit door eerst individueel vragen op te stellen en die daarna te vergelijken, zodat we niet allemaal de zelfde vragen stelde. Het vragen stellen deed voornamelijk een persoon en anderen konden bijspringen als ze verduidelijking nodig hadden. De antwoorden op deze vragen werden door Anouk genotuleerd in een Google word bestandje.  

De rest van de tests waren het testen van de prototypes. Voor het gesprek met Larissa zette we allemaal de link van onze app in de slack groep, en Chelsea mailde deze lijst door naar Larissa. Larissa ging er dan een voor een doorheen. Ieder persoon kwam dan aan de beurt en kon zijn/haar app laten testen en vragen stellen.

### Test resultaten 
De resultaten van de tests staan geschreven in mijn wiki: [Test resultaten](https://github.com/heralt/web-design-1920/wiki/Tests)

## Exclusive design principles
Exclusive design principles zijn de principes die wij hebben gebruikt om een product te ontwikkelen van een persoon. Deze zijn het tegenovergestelde van de inclusive design principles, waarbij een product voor meerdere mensen ontwikkeld is en dus voor meerdere mensen fijn in gebruik zou moeten zijn. 

#### study situation 
Hiermee wordt bedoelt dat er gekeken moet worden naar hoe de persoon waarvoor het product ontwikkeld wordt, jouw product en andere producten ervaart en gebruikt. Wat de resultaten van het observeren en vragen kunnen gebruikt worden om jouw product te ontwikkelen. 

Tijdens de testen probeerde we vragen te stellen en te observeren hoe Larissa het gebruiken van het internet ervaart. De resultaten van de vragen en de opmerkelijke dingen die we gezien hebben, gebruikten wij om onze producten te ontwikkelen. Bijvoorbeeld, het viel mij op dat ze de snelheid van haar screenreader kan aanpassen, dus in mijn text-to-speech programma kan ze de snelheid aanpassen.

#### Ignore conventions
Omdat er niet heelveel voor alleen blinde mensen sites ontwikkeld wordt, zijn er niet veel verschillende design principes die gebruikt kunnen worden tijdens het van een app voor hun. Hierdoor moet je dus zelf gaan experimenteren.

Mijn experiment was het gebruiken van een text-to-speech programma. Zelf vond ik het gebruiken van de screenreader heel vervelend, want het gaf informatie over de html tags en de knoppen waar de focus op lag. Dit was informatie die de gebruikers ervaring niet beter maakte. Door het gebruiken van een tts programma word alleen de informatie aan de gebruiker gegeven en verder niets. 

#### Prioritise identity
Je kan de identiteit van een persoon gebruiken om een product te ontwikkelen. Karakter eigenschappen, hobbies etc.

Tijdens het beter leren kennen en testen hebben we aan Larissa gevraagd wat zei fijn vind tijdens het gebruiken van andere apps, wat zei belangrijke informatie vind in haar agenda en verder ook gevraagd naar haar hobbies. Dit hebben we dan gebruikt om product te ontwikkelen dat helemaal op haar is afgestemd. 
En ze vind paarden leuk.

#### Add nonsense
Dit betekent dat je tijdens het ontwikkelen, je kleine features kan toevoegen die niet veel toegevoegde waarde hebben, maar wel leuk zijn. 

Larissa vond het leuk als er een paar leuke berichten in de app zitten. Maar niet te veel, want dat kan het gebruiken van de app vervelend maken. 
