import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: `${process.env.CLIENT_URL}/login` }),
  (req, res) => {    
    // Ensure session is saved before redirect
    req.session.save((err) => {
      if (err) {
        console.error("Error",err)
        return res.redirect(`${process.env.CLIENT_URL}/login?error=session`);
      }
      res.redirect(`${process.env.CLIENT_URL}/dashboard`);
    });
  }
);

router.get("/current-user", (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).json({ error: "Unauthorized", message: "User not authenticated" });
    }
  } catch (error) {
    console.error('Error in current-user route:', error);
    res.status(500).json({ error: "Server error", message: "Internal server error" });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ status: "ok" });
  });
});

export default router;
