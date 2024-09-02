sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("mia.app.ui5.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // Chiamare l'init del componente base
      UIComponent.prototype.init.apply(this, arguments);

      // Avviare il router
      this.getRouter().initialize();
    }
  });
});
