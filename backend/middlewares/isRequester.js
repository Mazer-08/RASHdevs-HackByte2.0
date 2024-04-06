import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isRequester = (req, res, next) => {
  if (req.headers.authorization) {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(user);
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Unauthorized" });
      } else if (user.role === "requester") {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "Unauthorized" });
      }
    });
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export default isRequester;
