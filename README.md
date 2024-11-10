# 🏨 Calcolatore Costi B&B - SAP UI5 Application

**Calcolatore Costi B&B** è un'applicazione web SAP UI5 progettata per aiutare i gestori di Bed & Breakfast a calcolare i costi operativi e stimare i ricavi netti da affitti a breve termine. L'app consente di inserire informazioni come il numero di notti, il costo per notte, le commissioni di Airbnb, e le spese di gestione, per poi calcolare i guadagni netti.

## 🌟 Funzionalità

- **Calcolo del Ricavo Lordo**: Basato sul numero di notti e costo per notte.
- **Calcolo delle Commissioni di Airbnb**: In base alla percentuale di commissione applicata (predefinita al 14%).
- **Spese di Gestione**: Consente di inserire le spese operative e di visualizzarle nel risultato.
- **Calcolo del Ricavo Netto**: Mostra i guadagni netti dopo la detrazione delle commissioni e delle spese di gestione.

## 📋 Struttura dell'App

- **Componenti principali**:
  - **View principale**: Un `SimpleForm` per l'inserimento dei dati e un `Panel` per visualizzare i risultati.
  - **Controller**: Gestisce l'evento di calcolo.
  - **Router**: Configurato nel `Component.js` per gestire la navigazione e il caricamento asincrono.

## 🚀 Installazione

1. **Clona il repository**:

   ```bash
   git clone https://github.com/tuo-username/nome-repo.git
   cd nome-repo
   ```

2. **Esegui l'app**: Assicurati di avere un server di sviluppo SAP UI5 configurato. Apri il file `index.html` in un browser con accesso a Internet.

3. **Configurazione SAP UI5**: L'app utilizza il tema `sap_fiori_3` e carica il core di SAP UI5 tramite il CDN SAP.

## 🛠️ Utilizzo

- **Numero di Notti**: Inserisci il numero di notti prenotate.
- **Costo per Notte**: Specifica il prezzo di una notte.
- **Commissioni Airbnb**: Imposta la percentuale di commissioni (predefinita al 14%).
- **Spese di Gestione**: Aggiungi le spese variabili di gestione.
- **Calcola**: Clicca sul pulsante "Calcola" per ottenere i seguenti risultati:
  - **Ricavo Lordo**: Totale generato prima delle detrazioni.
  - **Commissioni Airbnb**: Totale delle commissioni applicate.
  - **Ricavo Netto**: Guadagno finale dopo commissioni e spese.

## 🛠️ Configurazione Tecnica

### Component.js

Il componente principale inizializza il router per la navigazione asincrona e gestisce la configurazione generale dell'applicazione:

```javascript
sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("mia.app.ui5.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    }
  });
});
```

### index.html

Il file `index.html` carica il core di SAP UI5 e avvia il componente `mia.app.ui5`:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mia App UI5</title>
  <script id="sap-ui-bootstrap"
    src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_fiori_3"
    data-sap-ui-resourceroots='{ "mia.app.ui5": "./" }'
    data-sap-ui-async="true">
  </script>
  <script>
    sap.ui.getCore().attachInit(function () {
      sap.ui.core.Component.create({
        name: "mia.app.ui5",
        manifestFirst: true
      }).then(function (oComponent) {
        new sap.m.Shell({
          app: new sap.ui.core.ComponentContainer({
            component: oComponent
          })
        }).placeAt("content");
      });
    });
  </script>
</head>
<body class="sapUiBody" id="content"></body>
</html>
```

## 📄 Licenza

Questo progetto è distribuito sotto la licenza **MIT**.

