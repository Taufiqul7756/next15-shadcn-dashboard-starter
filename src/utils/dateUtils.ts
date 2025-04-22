// Helper function date range in ISO format
export function getDateRangeISO(date: Date): { startISO: string; endISO: string } {
  // Create date at start of day in local timezone
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);

  // Create date at end of day in local timezone
  const endDate = new Date(date);
  endDate.setHours(23, 59, 59, 999);

  return {
    startISO: startDate.toISOString(),
    endISO: endDate.toISOString(),
  };
}