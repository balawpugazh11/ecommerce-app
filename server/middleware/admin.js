export const admin = (req, res, next) => {
  // Example: check Firebase custom claims
  if (req.user && req.user.admin === true) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Admins only" });
  }
};
