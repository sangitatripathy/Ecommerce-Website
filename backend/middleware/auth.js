import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const { token } = req.headers;
  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = {id:decoded.id};
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export default auth;
