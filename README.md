# ITF31619Eksamen
Eksamensoppgave i ITF31619 Webapplikasjoner 2020 Høst

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