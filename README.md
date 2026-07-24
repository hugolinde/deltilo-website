# Deltilo — website

Losse HTML/CSS/JS-website voor deltilo.com (geen framework, geen build-stap nodig).

**Live op:** https://deltilo.com
**Gehost via:** GitHub Pages, vanuit dit repository (branch `main`)

## Structuur

```
index.html          -> pagina-opbouw en tekst (Home, Services, References, About)
styles.css           -> alle styling
script.js            -> mobiel menu, actieve navigatie-highlight, uitklapbare referentiekaarten
manifest.json        -> naam + icoon voor als de site op een mobiel beginscherm wordt gezet
images/              -> logo, foto's en referentie-logo's
README.md            -> dit bestand
```

## Lokaal bekijken

Open gewoon `index.html` in je browser (dubbelklikken volstaat). Geen server of installatie nodig.

## Wijzigingen doorvoeren

1. Pas de bestanden lokaal aan (`index.html`, `styles.css`, `script.js`, of afbeeldingen in `images/`)
2. Open `index.html` lokaal om te checken of alles er goed uitziet
3. In GitHub Desktop: bekijk de wijzigingen onder **Changes**, schrijf een korte commit-message, klik **Commit to main**, dan **Push origin**
4. Na ~1 minuut is de wijziging live op deltilo.com

**Tip:** bekijk de live site na een wijziging altijd even in een **incognito/privévenster** — browsers cachen CSS soms hardnekkig, waardoor een update in je gewone browser niet meteen zichtbaar is, ook al staat hij al goed online.

## Hosting & domein

- De site draait op **GitHub Pages**, ingesteld via **Settings → Pages** in dit repository
- Het domein `deltilo.com` wijst via DNS-records (bij de domeinregistrar) naar GitHub Pages — zie het `CNAME`-bestand in dit repository
- De domeinregistratie van `deltilo.com` staat los van deze hosting en loopt gewoon door bij de registrar

## Afbeeldingen

Alle content-afbeeldingen (logo, hero, services, about, referentie-logo's) staan in `images/`. Nieuwe of vervangende afbeeldingen: zelfde bestandsnaam gebruiken om automatisch de bestaande `<img>`-verwijzing in `index.html` te laten kloppen, of de `src`-verwijzing in `index.html` aanpassen naar de nieuwe bestandsnaam.
