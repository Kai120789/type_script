import { Router } from "express"
import { getUserById, getUsers } from "../handlers/user"

const router = Router()

// /api/users
router.get('/', getUsers)

// /api/users/123
router.get('/:id', getUserById)

export default router