import express from "express";
import { createUserRouter } from "./routes/user";
import { createCountryRouter } from "./routes/country";
import { UserModel } from "./models/user";
import { CountryModel } from "./models/country";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/users", createUserRouter({ userModel: UserModel }));
app.use("/api/country", createCountryRouter({ countryModel: CountryModel }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
