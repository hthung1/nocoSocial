const router = require("express").Router();
const storiesCtrl = require("../controllers/storiesCtrl");
const auth = require("../middleware/auth");

router
  .route("/stories")
  .post(auth, storiesCtrl.createStories)
  .get(auth, storiesCtrl.getStories);
router.route("/stories/:id").patch(auth, storiesCtrl.updateStories);

module.exports = router;
