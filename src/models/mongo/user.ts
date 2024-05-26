import mongoose from "mongoose";
import { NewUser } from "../../types";
import { CountryModel } from "./country";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export class UserModel {
  static async create({ name, email, country }: NewUser) {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = new User({
      name,
      email,
      country,
    });

    await newUser.save();
    await CountryModel.voteCountry(country);

    return newUser;
  }

  static getAll() {
    return User.find();
  }
}
