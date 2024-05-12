import axios from 'axios'

export const getFavCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion')
    const countryList = response.data.slice(0, 10);

    const formattedCountryList = countryList.map((c: any) => ({
      name: c.name.common,
      officialName: c.name.official,
      capital: c.capital[0],
      region: c.region,
      subregion: c.subregion,
    }))
    
    return formattedCountryList
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}