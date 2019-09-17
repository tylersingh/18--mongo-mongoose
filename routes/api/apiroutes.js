const router = require("express").Router();
const clearController = require("../../controllers/clear");

router.get("/", clearController.clearDB);

module.exports = router;

const router = require("express").Router();
const fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapeHeadlines);

module.exports = router;

const router = require("express").Router();
const fetchRoutes = require("./fetch");
const noteRoutes = require("./notes");
const headlineRoutes = require("./headlines");
const clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);
router.use("/clear", clearRoutes);

module.exports = router;

const router = require("express").Router();
const noteController = require("../../controllers/note");

router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

module.exports = router;



