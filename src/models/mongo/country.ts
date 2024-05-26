import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  name: { type: String },
  official_name: { type: String },
  capital: [{ type: String }],
  region: { type: String },
  subregion: { type: String },
  votes: { type: Number, default: 0 },
});

export const Country = mongoose.model("Country", countrySchema);

export class CountryModel {
  static getTopVotedCountries() {
    return Country.find().sort({ votes: -1 }).limit(10);
  }

  static async voteCountry(name: string) {
    const updatedCountry = await Country.findOneAndUpdate(
      { name },
      { $inc: { votes: 1 } },
      { new: true }
    );

    if (!updatedCountry) {
      throw new Error(`Country ${name} not found`);
    }

    return updatedCountry;
  }
}
