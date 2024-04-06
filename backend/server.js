import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, testConnection } from "./db/connection.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

// // Model imports
import provider from "./db/models/provider/provider.js";
import referral from "./db/models/provider/referral.js";

import requester from "./db/models/requester/requester.js";

import request from "./db/models/requests.js";

// Auth imports
import providerAuthRoutes from "./routes/provider/auth.js";
import requesterAuthRoutes from "./routes/requester/auth.js";

// Provider routes imports
import refferalRoutes from "./routes/provider/referral.js";
import requestRoutes from "./routes/provider/request.js";

// Requester routes imports
import requesterRequestRoutes from "./routes/requester/request.js";

// Auth routes
app.use("/auth/provider", providerAuthRoutes);
app.use("/auth/requester", requesterAuthRoutes);

// Provider routes
app.use("/provider", refferalRoutes);
app.use("/provider", requestRoutes);

// Requester routes
app.use("/requester", requesterRequestRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello World from Jobbridge!!");
});

app.listen(3000, () => {
  testConnection();
  (async () => {
    referral.belongsTo(provider, {
      foreignKey: "providerId",
      onDelete: "CASCADE",
    });
    request.belongsTo(referral, {
      foreignKey: "referralId",
      onDelete: "CASCADE",
    });
    request.belongsTo(requester, {
      foreignKey: "requesterId",
      onDelete: "CASCADE",
    });
    await sequelize.sync({ alter: true });
  })();
  console.log(
    "<<--------------------------------------------------------->>\n\nApplication is running, Use Ctrl + click on following URL :\nhttp://localhost:3000/hello\n\n<<--------------------------------------------------------->>"
  );
});
