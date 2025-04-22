import { getCountryCallingCode, getCountries } from "react-phone-number-input/input";
import type { Country } from "react-phone-number-input";

// Helper function to get country code from ext
export const getCountryFromExt = (ext: string | null | undefined): Country | undefined => {
  if (!ext) return undefined;
  // Remove '+' from the ext if present
  const cleanExt = ext.replace('+', '');
  // Find the country that matches this calling code
  const countries = getCountries();
  return countries.find(country => getCountryCallingCode(country) === cleanExt) as Country | undefined;
};