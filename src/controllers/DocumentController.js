const { Document } = require("../models/Document");

module.exports = {
  async getAllDocumentsByType(req, res) {
    let docs = null;
    try {
      const pType = req.params.type;
      docs = await Document.findAll({
        where: {
          type: pType,
        },
      });
      return res.status(200).send(docs);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  async updateDocument(req, res) {
    let doc = null;
    try {
      const pDocId = req.params.id;
      doc = await Document.findByPk(pDocId);
      if (doc != null) {
        doc.description = req.body.description;
        await doc.save();
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.sendStatus(500);
    }
  },

  async addDocument(req, res) {
    try {
      const newDoc = await Document.create({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
      });
      console.log("New document with id: " + newDoc.id + " has been created!");
      return res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  },

  async deleteDocument() {
    let doc = null;
    try {
      const pDocId = req.params.id;
      doc = await Document.findByPk(pDocId);
      if (doc != null) {
        await doc.destroy();
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.sendStatus(500);
    }
  },
};
