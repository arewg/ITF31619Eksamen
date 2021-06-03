# ITF31619Eksamen
Eksamensoppgave i ITF31619 Webapplikasjoner 2020 Høst
Gruppe: Webapplikasjoner 6
Deltakere: Are og Elise 

## Du trenger:
1. MongoDB og MongoDB Compass som kommer med MongoDB. Lastes ned som vist i Marius sin forelesningsvideo eller ved å google "MongoDB Download" + operativsystemet ditt.
2. Legge inn .env-verdiene i client og server sin .env-fil. Dette er lagt med under.

## Fremgangsmåte:
1. Åpne prosjektet i Visual Studio Code.
2. Bruk to terminaler, en hvor du setter directory til å være client-mappen, og en til å være server-mappen.
3. Kjør "yarn" i begge terminalene så alle dependencies blir installert.
4. Kjør "yarn dev" i begge mappene så prosjektet kjører.
5. I MongoDB Compass:
    * koble deg på Hostname: localhost og Port: 27017. Refresh Compass og se at _Webeksamen_-databasen har kommet opp. 
    * Dersom denne ikke dukker opp i MongoDB Compass, skriv følgende kode i MongoDB shellet: _use Webeksamen_.
6. For å opprette en Admin eller Superadmin bruker så gjøres dette i postman, fremgangsmåte finnes i API-dokumentasjonen her: https://documenter.getpostman.com/view/10109870/TVmV4tL1#9f05f028-b2b8-4ad2-8a6b-ca3ac693b7a1
7. Gå til "localhost:3000" i nettleseren og sjekk ut siden.

## Testing

For å kjøre testen skriv "yarn test" i terminalen for client.

# .env-fil client-mappe

```
BASE_URL=http://localhost:5000
API_VERSION=/api
```

# .env-fil server-mappe

```
BASEURL=/api
NODE_ENV=development
PORT=5000
DATABASE_LOCAL=mongodb://localhost:27017/webeksamen
JWT_SECRET=hemmelig
JWT_EXPIRES_TIME=7d
COOKIE_EXPIRE_TIME=7d
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=76c4623c6db5fa
EMAIL_PASSWORD=509ca7e5ec2707
EMAIL_FROM=noreply@contactUs.no
EMAIL_FROM_NAME=contactUs
```

# Referering av kode

## Client
---
**Components**
* AddCategoryModal.jsx
    * Modalen er basert og modifisert fra tidligere obligatorisk oppgave av Are Warlo Gulliksen og Elise Dalane mellegård
* ImageUpload.jsx
    * Komponenten er hentent fra Marius Wallins' forelesning 'Leksjon 13' og er blitt litt modifisert.
* LoginForm.jsx
    * Skjemaet er hentet fra Marius Wallins' forelesning 'Leksjon 13' og er blitt litt modifisert.
* Nav.jsx
    * Navigasjonsbaren er hentet fra Marius Wallins' forelesning 'Leksjon 11' og Are Warlo Gulliksen og Elise Dalane Mellegårds' oblig for leksjon 11, og har blitt modifisert for dette prosjektet.
* NoMatch.jsx
    * NoMatch er direkte hentet fra Marius Wallins' forelesning 'Leksjon 11'.

**Contexts**
* AuthProvider.jsx
    * Denne konteksten er hentent fra Marius Wallins' forelensing 'Leksjon 13' og blitt modifisert litt i etterkant.

**Data**
* Data inneholder kopiert dummy-data som er blitt brukt for kontorer i _OfficeData.jsx_ og ansatte i _EmployeeData_

**Layouts**
* MainLayout.jsx
    * Denne layouten er hentet fra Marius Wallins' forelesning 'Leksjon 11' og er blitt modifisert for dette prosjektet.

**Pages**
* Login.jsx
    * Denne loginen er er hentent fra Marius Wallins' forelesning 'Leksjon 13' og er blitt modifisert litt for denne siden.

* Offices.jsx
    * Henter ikonene for Grid og List fra googleapis font: https://fonts.googleapis.com/icon?family=Material+Icons

* SingleArticle.jsx
    * Download-funksjonen på linje 79 er hentet fra Marius Wallins' forelesning 'Leksjon 13'.

* UpdateArticle.jsx
    * UpdateArticle er basert og midifisert på obligatorisk oppgave 6 av Are Warlo Gulliksen og Elise Dalane Mellegård

**Routes**
* Routes.jsx
 * Routes er basert på Marius Wallins' forelesning 'Leksjon 11' og er blitt modifisert for eksamen.

 **Styles**
 * Theme.js
    * Theme er hentet fra Marius Wallins' forelesning 'Leksjon 11'

**Utils**
* Oppsettet på alle funkjsoner de forskjellige servicene i mappen er basert på de Marius Wallin har vist i forelesninger, og vi har modifisert disse til å passe vårt prosjekt.

**App.jsx**
* Basert på Marius Wallins' forelesning 'Leksjon 11'

## Server
---
**Controllers**
* Controllerne brukt i prosjektet er basert på de vi har lært fra Marius Wallins' forelesning 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'.
* image.js
    * Image er hentet direkte fra 'Leksjon 13' og blitt modifisert litt for å passe vårt prosjekt.

**Middelware**
* Mellomvaren er hentet direkte fra Marius Wallins' forelesninger 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'.

**Models**
* Image.js
    * Denne er hentet direkte fra Marius Wallins forelesning 'Leksjon 13'

* User.js
    * Denne er hentet fra Marius Wallins' forelesning 'Lekjson 11' og 'Leksjon 12' og er blitt litt modifisert for vårt prosjekt.

**Routes**
* Routes er satt opp med inspirasjon fra Marius Wallins' forelesninger gjennom semestert.

**Services**
* Services er satt opp basert på Marius Wallins' forelesninger gjennom semestert, men blitt modifisert for prosjektet. F.eks er Article.js sin listByCategory (linje 11) modifisert ved at vi burker mongoose-feltet til å finne kategori på id.

**utils**
* apiFilters.js
    * ApiFilter.js er hentet direkte fra Marius Wallins' leksjon 14.

* errorHandler.js
    * errorHandler.js er hentet direkte fra Marius Wallins' leksjon 13

* jwToken.js
    * JwtToken er hentet direkte fra Marius Wallins' leksjon 13.

* sendEmail.js
    * sendEmail.js er hentet direkte fra Marius Wallins' leksjon 13.

* validation.js
    * validation.js er hentet direkte fra Marius Wallins' 'Leksjon 13'

**Server.js**
* Server.js er basert på Marius Wallins' forelesninger gjennom semestert
