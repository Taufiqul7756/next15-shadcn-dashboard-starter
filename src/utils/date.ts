// It is used in the components to format the date and time.
// ie: Input: 2021-09-01T10:00:00.000Z Output: 01-09-21, 10:00AM

export function formatDateTime(isoString: Date): string {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${hours}:${minutes}${ampm}`;

  return `${day}-${month}-${year} ${strTime}`;
}

/**
 * Calculates age from date of birth string
 * @param dateOfBirth - Date of birth in any format parseable by Date constructor (e.g., 'YYYY-MM-DD')
 * @returns Age in years or null if date is invalid
 */
export function calculateAge(
  dateOfBirth: string | null | undefined
): number | null {
  if (!dateOfBirth) return null;

  try {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    // Check if the date is valid
    if (isNaN(dob.getTime())) return null;

    let age = today.getFullYear() - dob.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    const currentMonth = today.getMonth();
    const birthMonth = dob.getMonth();

    if (
      birthMonth > currentMonth ||
      (birthMonth === currentMonth && dob.getDate() > today.getDate())
    ) {
      age--;
    }

    return age >= 0 ? age : null; // Return null for future dates
  } catch {
    return null;
  }
}

// Convert dateISO to YYYY-MM-DD format
export function yearExtract(dateISO: string): string {
  return new Date(dateISO).toISOString().split("T")[0];
}
