# Firebase

Hur använde jag Firebase i detta projekt:
I detta projekt bygger jag  klienten på Angular5 och servern på ExpressJS. Att använda dessa tekniker har jag inprincip vetat hela tiden att jag skulle göra i detta projekt, men när det kom till vilken databas som skulle användas var jag kluven på mongoDB eller Firebase realtime-database ett tag. MongoDB kände jag mig mer tryggt i då jag har jobbat i ett projekt då vi har använt det(inte för jag skrev så jättemycket kod för angående databas i det projektet) samt så har vi jobbat med det lite i förregående kmom i denna kursen.

Efter lite research angående Firebase så var jag mer taggad på att ta mig an det då det nu är google som står bakom det.

## Om Firebase:

Firebase utvecklades från en teknik som kallades "Envolve", Envolve var ett API som tillät utvecklare att använda online chat funktionalitet till deras hemsidor. Efter att utvecklarna av Envolve märkte att deras API börjades användas för att skicka data som inte var av chatmeddelanden, så började utvecklarna använda API:et för att synka applikationens data som spelstatus i realtid över sina användare. April 2012 grundades Firebase, det gick bra för Firebase och i Oktober 2014 köpte Google upp det.

Idag är Firebase en "Backend-as-a-Service"(BaaS). Som innehåller flera olika verktyg/tjänster för att göra din applikation så bra och snabb som möjligt. Firebase kan vara din server, API och din datalagring i dina projekt.

De flesta verktyg/tjänster Firebase erbjuder finns/stöds oftast till respektive: IOS, Android och Javascript. Sedan finns det också visa verktyg som endast stöds till enskilda plattformer.


## Lite dokumentation/bra länkar för att komma igång med Firebase:
https://firebase.google.com/docs/
http://firebase.googleblog.com/

## Vad erbjuder Firebase?

### Firabase Database:
Firebase realtidsdatabas är en moln databas som är baserad på icke-SQL databas. Datan lagras som JSON och synkroniseras i realtid till varje ansluten klient. När du bygger applikationer på plattformen så delar alla dina användare en realtidsdatabasinstans och tar emot automatiskt uppdateringar med de senaste datan.

### Firebase Cloud Storage:
Firebase erbjuder även något som dem kallar "Cloud storage" som dem beskriver följande:
"Cloud Storage is built for app developers who need to store and serve user-generated content, such as photos or videos. Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale. The Firebase SDKs for Cloud Storage add Google security to file uploads and downloads for your Firebase apps, regardless of network quality."

### Firebase Cloude Firestore:
Cloude Firestore är en skalbar, flexibel databas för webb, mobil och serverutveckling, som Firebase Realtime databas så håller firestore datan synkroniserad från klientens app genom realtids lyssnare. Det erbjuder offline support för webben och mobil vilket innebär att du kan bygga appar som fungerar oberoende av uppkoppling eller anslutning till internet.

### Firebase Authentication:
Firebase Authentication erbjuder backend-tjänster, enkla SDK-er och färdiga webb-bibliotek för att authentisera användare till din applikation och där av bli inloggade tex. Firebase löser allt som har med registrering och inloggning, det tar hand om det redan finns registrerade användare med en specific email eller telefonnummer tex och skickar tillbaka ett felmeddkande om något gick fel. Firebase Authentication stödjer telefonnummer, Google, Facebook, Twitter och vanlig mail med lösenord tex.

Detta är några av de MÅNGA verktyg/tjänster som Firebase  erbjuder, det tjänster som jag har valt att skriva om här är några av det som jag själv har stött på, har inte stött på alla de valda i detta projektet utan några av dem i ett annat projekt i Java.


## Föredelar med Firebase:
- JSON (Javascript Object Notation) lagring innebär ingen hinder mellan data och objekt
- Enkel serialisering av app-tillstånd
- 3-vägs databindning via Angularfire
- Minimal inställning
- Enkel åtkomst till data, filer, auth och mer
- Ingen serverinfrastruktur behövs för att driva appar med data
- Massiv lagringsstorlek potential
- Realtid
- Den mest avancerade värdbaserade BaaS-lösningen
- Mycket säker

## Nackdelar med Firebase:
- Inte allmänt använd eller slagen testad för företag
- Mycket begränsad fråga och indexering
- Ingen aggregering
- Ingen karta reduceras
- Kan inte fråga eller lista användare eller lagrade filer
