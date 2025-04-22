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

  return `${day}-${month}-${year}, ${strTime}`;
}
