import express from "express"
import { signup, login,  verifyEmail, confirmEmail, sendPasswordResetEmail, resetPassword} from "../controllers/All.js"
import { authenticateToken } from "../config/middlewares.js"




import express from "express"
import { getPosts, createPost,  upvotePost, addComment,} from "../controllers/All.js"
import { authenticateToken } from "../config/middlewares.js"


router.get('/posts', getPosts)
router.post('/posts', authenticateToken, createPost);
router.post('/posts/:id/upvote', authenticateToken, upvotePost);
router.post('/posts/:id/comments', authenticateToken, addComment);


const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.get("/profile", authenticateToken, profile)
router.put("/profile", authenticateToken, updateProfile)

router.post('/verify-email', authenticateToken, verifyEmail);
router.get('/confirm-email', confirmEmail )
router.post('/reset-password', sendPasswordResetEmail)
router.post('/confirm-reset-password', resetPassword)

router.post('/upload-profile-picture', authenticateToken, uploadProfilePicture);
router.get('/profile-picture', authenticateToken, getProfilePicture);


export default router