# Heystaq opdrachten

## [Test Plan](https://github.com/adibkhaled/heystaq/blob/main/Test_plan/test_cases.md)

Gegeven onderstaande requirements stel de test cases op die jij zou gebruiken.
* Gebruikersregistratie en inloggen.
* Gebruikers moeten urenregistraties kunnen invoeren voor de afgelopen week.
* Ingevoerde urenregistraties moeten de datum, projectnaam, taakomschrijving en het aantal gewerkte uren bevatten.
* Gebruikers moeten de mogelijkheid hebben om ingevoerde urenregistraties te bekijken en te bewerken.
* Gebruikers moeten urenregistraties kunnen indienen voor goedkeuring.
* Managers moeten de ingediende urenregistraties kunnen bekijken, goedkeuren of afwijzen.

### [Klik hier](https://github.com/adibkhaled/heystaq/blob/main/Test_plan/test_cases.md) voor het testplan. 


## Automation opdracht

Met een test automation tool naar keuze zet de juiste automation op om volgende test case uit te voeren en neem hierbij de test automatiserings principes in acht.

https://demowebshop.tricentis.com

Automatiseer het volgende en bedenk zelf wat testgevallen:

* Het is mogelijke een nieuw account aan te maken (registreren).
* Het is mogelijk om in en uit te loggen
* Het is mogelijk je account aan te passen

### Voorwaarde:

* Install Node js
* Install git
* Install Playwright

De eenvoudigste manier om aan de slag te gaan met Playwright Test is door het init-commando uit te voeren.

```Shell
# Uitvoeren vanuit uw project root directory
npm init playwright@latest
```

### Clone de heystaq project:

```Shell
git clone git@github.com:adibkhaled/heystaq.git
```

### Het uitvoeren van de test

```Shell
npx playwright test
```

### Rapport uitvoeren
```Shell
 npx playwright test --reporter=./src/CustomReporter.js
```
