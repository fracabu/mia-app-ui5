sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";
  return Controller.extend("mia.app.ui5.controller.App", {
     onInit: function () {
        var oViewModel = new JSONModel({
           numNotti: 0,
           costoPerNotte: 0,
           commissioniAirbnb: 14,
           speseGestione: 0,
           risultati: {
              ricavoLordo: 0,
              cedolareSecca: 0,
              commissioniAirbnb: 0,
              speseGestione: 0,
              ricavoNetto: 0
           }
        });
        this.getView().setModel(oViewModel, "view");
     },
     
     onCalcola: function () {
      var numNotti = parseFloat(this.byId("numNotti").getValue());
      var costoPerNotte = parseFloat(this.byId("costoPerNotte").getValue());
      var commissioniAirbnb = parseFloat(this.byId("commissioniAirbnb").getValue()) / 100;
      var speseGestione = parseFloat(this.byId("speseGestione").getValue());
      
      var ricavoLordo = numNotti * costoPerNotte;
      var cedolareSecca = ricavoLordo * 0.21;
      var commissioniAirbnbAmount = ricavoLordo * commissioniAirbnb;
      var ricavoNetto = ricavoLordo - cedolareSecca - commissioniAirbnbAmount - speseGestione;
      
      this.byId("ricavoLordo").setText("Ricavo lordo: €" + ricavoLordo.toFixed(2));
      this.byId("cedolareSecca").setText("Cedolare secca (21%): €" + cedolareSecca.toFixed(2));
      this.byId("commissioniAirbnbResult").setText("Commissioni Airbnb: €" + commissioniAirbnbAmount.toFixed(2));
      this.byId("speseGestioneResult").setText("Spese di gestione: €" + speseGestione.toFixed(2));
      this.byId("ricavoNetto").setText("Ricavo netto: €" + ricavoNetto.toFixed(2));
  }
  });
});