import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid token" });
      } else {
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
          return res
            .status(403)
            .json({ success: false, message: "Unauthorized access" });
        }

        next();
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Admin authentication failed",
        error: error.message,
      });
  }
};
