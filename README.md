# Forum
[![Maintainability](https://api.codeclimate.com/v1/badges/bc3938bba417b33f83db/maintainability)](https://codeclimate.com/github/ericN93/ramverk2_project/maintainability)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ericN93/ramverk2_project/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/ericN93/ramverk2_project/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/ericN93/ramverk2_project/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/ericN93/ramverk2_project/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/ericN93/ramverk2_project/badges/build.png?b=master)](https://scrutinizer-ci.com/g/ericN93/ramverk2_project/build-status/master)



## Applikationen och teknikval
I detta projekt har jag gjort krav 1-3, 4(Eller har försökt iaf) och 6. Krav 5 var inget som jag kände att jag var speciellt sugen på att ta mig an. När jag gjorde krav 1-3 så har jag haft hel del problem med enhetstestning. Jag har en service som jag inte har fått ihop enhetstestning och den servicen använder jag i en alla min komponenter då den tar hand om "Firebase", pga att jag inte har klarat att få ihop enhetstestning i den servicen kan jag inte testa de andra komponenterna som använder den servicen. Jag har dock fått enhetstestning att funka bra i en annan service "socketService" då och där av har jag kunnat göra alla kraven som har med docker att göra.

Dem tekniker som jag använder mig av i detta project är då Angular5 som ramverk och sedan Firebase som är databasen. Anledningen varför jag tog dessa teknikval är pga att jag har jobbat lite med AngularJs och lite mer med Angular2 , därav ville jag gärna testa Angular5 då jag har gillar angular ramverken änsålänge. Anledningen till att jag valde Firebase är att jag har hört talas lite om det, sedan skulle jag även använde det i ett android projekt som jag har haft parallellt med denna kursen och där av var jag sugen på att ge det en chans.

Då google har utvecklat Angular och nu äger Firebase, så integrerar de båda teknikerna riktigt bra och är mycket lätt att använda tillsammans.


## Installation
När du har hämtat ner projektet gör du en "npm install", när alla dependicies har installerat kör du igång servern med "npm start"(som då kör på port 3000) sedan "ng serve" i ett annat fönster för att starta upp applikationen. Därefter går du in på localhost med porten 4200.

För att Köra igång servern med en docker-kontainer kör du "npm run start-docker" och stoppar den med "npm run stop-docker".


## Testning

Jag använder mig av karma, jasmine och PhantomJS för att utföra min testsuite. Som tidigare nämnt hade jag problem att utföra testing i en service som används mycket i mitt projekt, därav har jag inte kunnat testa dem delarna som är beroende av den servicen. Den testningen som jag har kunnat utföra görs för "socketService". Teknikerna jag har använt har varit självklara för min del då karma, jasmine fungerar riktigt bra med Angular2+, PhantomJS var något som jag var tvungen att börja använda då testning med docker krävde det. För mitt projekt var det mycket svårt att få kodtäckning då jag hade problem med den servicen.

Du kan köra "npm run test" för att utföra testerna och med codecoverage kör du "npm run coverage". För att sedan se kodtäckningen går du in i mappen "coverage/src" sedan öppnar du filen "index.html" med din webläsare.

För att köra testing med docker kan du köra följande kommandon: "npm run docker-latest" för senaste node versionen, "npm run docker-8" för node version 8 och "npm run docker-7" för node version 7. Först behöver du fixa Images med "npm run docker-build".


## Kedja för Continuous integration
Det tjänster jag har valt är scrutinizer och codeclimate. Av codeclimate får jag min "Maintainability" och av scrutinizer för jag "quality score", "coverage" och "build". Jag har valt dessa tjänster för det är dessa som jag har tyckt har funkat bäst under denna kursen.

Scrutinizer är något jag föredrar för tillfället, som man ser använder jag det för tre olika tester. Det funkar bra och tycker det är smidigt och enkelt att förstå samt följa.

Jag är nöjd med kodkvaliteten jag får, visst jag hade nog kunnat göra det bättre men jag kan leva med det iaf.

## Realtid
Jag har tagit mig an att göra en chat när det kommer till realtidsaspekten, Jag använder mig av ws Websocket som vi har gjort i tidigare kmom för att göra detta kravet. Det är en vanlig chatt rakt upp och ner där alla skriver till alla.

Jag har tyckt att det har funkat bra, det var lite svårt att få ihop det i början med det gick tillslut. Det var ju lite annorlunda får hur vi gjorde i kmom:et då jag gjorde det i angular.

För att använda chatten måste servern sättas igång.


## Databas
Jag valde att använda "Firebase" som min icke-SQL baserad databas. Jag tycker Firebase har funkat mycket bra till mitt projekt, det var enkelt att applicera in, samt är det mycket snabbt. Har fått läsa en hel del om det då jag aldrig har jobbat med det innan med tekniken verkade mycket lovande så det var helt klart värt det. Då jag bara har ett vanligt login/registrera sedan poster som användaren lägga till ta bort och editera(CRUD) så har det varit mycket enkelt. Authentication är extremt enkelt och firebase tar hand om allt där, sedan en vanlig CRUD gjordes mycket enkelt, tänkte göra så man kan kommetera  varje post men då det är icke-SQL så kändes det bara dumt.

Jag gillar tradtionella relationsdatabaser eftersom relationer mellan databaser är ofta mycket viktigt i de flesta projekten(Iaf de jag har jobbat med iaf). Och jag tror relationsdatabaser och vara störst ett  bra tag inom databaser innan något annat eller no-SQL tar över. Även om no-SQL har växt mycket de senaste åren tror jag att det kommer nog ta ett bra tag till innan det tar första platsen.


## Egen modul på npm
Jag har gjort en modul där poäningen är att göra chatten lite roligare, tex att man kan skicka lite "kommandon" som då tas in i modulen som sedan skickar något random beroende på vilken kommando man skickar. tex "/asci" skickar en random en rads asci bild i chatten medans "/quote"  skickar ett random citat. Just nu är den ganska simpel men tänker nog göra den mer avancerad i framtiden.

Jag tycker NPM som packetverktyg är magiskt, det är extremt simpelt att använda samt att det finns nästan alla olika sorters moduler som man kan använda gör det mycket roligare/lättare för mig som utvecklare att utveckla.

https://www.npmjs.com/package/simple-command-in-chat

## Artikel (Krav 6)
I min artikel som ni kan nå på "LÄNK" skriver jag om Googles Firebase. Jag skriver lite kort vad det är, hur det uppstod, sedan skriver jag lite funktionaliteten som Firebase består. Syftet med denna artiklen är att få utvecklare att öppna ögonen för denna nya teknik men samtidigt veta dess föredelar och dess nackdelar. Artiklen nås HÄR https://github.com/ericN93/ramverk2_project/blob/master/ARTICLE.md
