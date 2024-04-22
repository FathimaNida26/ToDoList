import express from "express"
import { addTask, getTask, removeTask} from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();
// POST endpoint for user registration
router.post("/addTask", requireAuth, addTask)
// GET endpoint to get user details
router.get("/getTask",requireAuth, getTask)
// DELETE endpoint to delete user account
router.delete("/removeTask",requireAuth, removeTask)

export default router;