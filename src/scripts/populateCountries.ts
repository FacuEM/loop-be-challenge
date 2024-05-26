import axios from "axios";
import mongoose from "mongoose";
import { Country } from "../models/mongo/country";
import connectDB from "../db/index";

const populateCountries = async () => {
  try {
    await connectDB();

    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion"
    );

    const countries = response.data.map((country: any) => ({
      name: country.name.common,
      official_name: country.name.official,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      votes: 0,
    }));

    await Country.insertMany(countries);
    console.log("Countries have been populated successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error populating countries:", error);
    mongoose.connection.close();
  }
};

populateCountries();
