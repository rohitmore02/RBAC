const express = require("express");
const { protect } = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const router = express.Router();
const { getUsers, updateUser, deleteUser } = require("../controllers/admin");

// This API gives the data of all the users, and for that only Admin and Moderator roles will be authorized
router.get("/users", protect, authorize([ "Admin", "Moderator" ]), getUsers);

// This API can be used to update the user, and for that only Admin and Moderator roles will be authorized
router.put("/users", protect, authorize([ "Admin", "Moderator" ]), updateUser);

// This API can be used to delete the user, and for that only Admin and Moderator roles will be authorized
router.delete("/users/:id", protect, authorize([ "Admin", "Moderator" ]), deleteUser);

module.exports = router;