// routes/material.route.js
const express = require("express");
const { materialContoller } = require("../controllers");
const {
  multerMiddleware,
  requestMiddleware,
  authMiddleware,
} = require("../middlewares");

const router = express.Router();

// Get Materials

router.get("/", materialContoller.getMaterials);
router.get("/shirts", materialContoller.getShirtsMaterials);
router.get("/polo-shirts", materialContoller.getPoloShirtsMaterials);
router.get("/coats", materialContoller.getCoatsMaterials);
router.get("/overcoats", materialContoller.getOvercoatsMaterials);
router.get("/pants", materialContoller.getPantsMaterials);
router.get("/jeans", materialContoller.getJeansMaterials);
router.get("/chinos", materialContoller.getChinosMaterials);

// Create Material

router.post(
  "/shirts",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validateShirtMaterial,
  materialContoller.createShirtMaterial
);
router.post(
  "/polo-shirts",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validatePoloShirtMaterial,
  materialContoller.createPoloShirtMaterial
);
router.post(
  "/coats",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validateCoatMaterial,
  materialContoller.createCoatMaterial
);
router.post(
  "/overcoats",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validateOvercoatMaterial,
  materialContoller.createOvercoatMaterial
);
router.post(
  "/pants",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validatePantMaterial,
  materialContoller.createPantMaterial
);
router.post(
  "/jeans",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validateJeansMaterial,
  materialContoller.createJeansMaterial
);
router.post(
  "/chinos",
  multerMiddleware.uploadMaterials,
  requestMiddleware.validateChinosMaterial,
  materialContoller.createChinosMaterial
);

// Update Material

router.put(
  "/shirts/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updateShirtMaterial
);
router.put(
  "/polo-shirts/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updatePoloShirtMaterial
);
router.put(
  "/coats/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updateCoatMaterial
);
router.put(
  "/overcoats/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updateOvercoatMaterial
);
router.put(
  "/pants/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updatePantMaterial
);
router.put(
  "/jeans/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updateJeansMaterial
);
router.put(
  "/chinos/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.updateChinosMaterial
);

// Delete Material

router.delete(
  "/shirts/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deleteShirtMaterial
);
router.delete(
  "/polo-shirts/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deletePoloShirtMaterial
);
router.delete(
  "/coats/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deleteCoatMaterial
);
router.delete(
  "/overcoats/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deleteOvercoatMaterial
);
router.delete(
  "/pants/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deletePantMaterial
);
router.delete(
  "/jeans/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deleteJeansMaterial
);
router.delete(
  "/chinos/:id",
  authMiddleware.protect,
  authMiddleware.restrict(["admin"]),
  materialContoller.deleteChinosMaterial
);

router.post("/shirts/bulk", materialContoller.createBulkShirtsMaterials);
router.post(
  "/polo-shirts/bulk",
  materialContoller.createBulkPoloShirtsMaterials
);
router.post("/coats/bulk", materialContoller.createBulkCoatsMaterials);
router.post("/overcoats/bulk", materialContoller.createBulkOvercoatsMaterials);
router.post("/pants/bulk", materialContoller.createBulkPantsMaterials);
router.post("/jeans/bulk", materialContoller.createBulkJeansMaterials);
router.post("/chinos/bulk", materialContoller.createBulkChinosMaterials);

module.exports = router;
