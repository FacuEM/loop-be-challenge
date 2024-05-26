import express from "express";
import mongoose from "mongoose";

import { createUserRouter } from "./routes/user";
import { createCountryRouter } from "./routes/country";
import { UserModel } from "./models/mongo/user";
import { CountryModel } from "./models/mongo/country";

const app = express();
app.use(express.json());

const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/country-votes");
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to db"));

app.use("/api/users", createUserRouter({ userModel: UserModel }));
app.use("/api/country", createCountryRouter({ countryModel: CountryModel }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
