import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";

import admin from "firebase-admin";

import serviceAccount3 from "./test1-d8ab7-firebase-adminsdk-fx1ar-bf17664fae.json" assert { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const path = require('path');
config({
  override: true,
  path: path.join(__dirname, ".env"),
});

const app = express();
const port = 3000;

const firebaseAdminZ = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount3),
  },
  "appC"
);

app.use((req, res, next) => {
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   `${process.env.VITE_APP_BASE_URL_EXPRESS_VUE_1}`
  // );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json("welcome to express server");
});

app.post("/fcm-test", (req, res) => {
  try {
    const params = req.body;
    const message = {
      notification: {
        title: params.title,
        body: params.body,
      },
      token: params.token,
    };

    firebaseAdminZ
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Successfully sent message:", response);
        res.status(200).send("Notification sent successfully");
      })
      .catch((error) => {
        console.log("Error sending message:", error);
        res.status(500).send("Error sending notification ");
      });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      error: e.message,
      dirname: __dirname,
    });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
