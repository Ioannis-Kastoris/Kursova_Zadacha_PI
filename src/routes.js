const DocumentController = require("./controllers/DocumentController");

module.exports = (app) => {
  app.get("/documents/:type", DocumentController.getAllDocumentsByType);

  app.patch("/documents", DocumentController.updateDocument);

  app.post("/documents", DocumentController.addDocument);

  app.delete("/documents/:id", DocumentController.deleteDocument);
};
