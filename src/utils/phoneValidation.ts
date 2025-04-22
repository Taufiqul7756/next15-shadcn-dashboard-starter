export const phoneRegex = /^[0-9]{11}$/;

// Function to remove leading zero from phone numbers
export const removeLeadingZero = (phone: string, ext: string) => {
  if (!phone || !ext) return phone;
  
  // Only process if ext is +880
  if (ext === '+880') {
    // Check if length is more than 10 digits
    if (phone.length > 10) {
      // Remove leading zero if present
      return phone.startsWith('0') ? phone.substring(1) : phone;
    }
  }
  
  return phone;
};