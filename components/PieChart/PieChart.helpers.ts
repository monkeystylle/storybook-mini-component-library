export const getDegreeRotation = (percentage: number): number => {
  // Normalize the percentage to be within 0 to 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  // Convert the percentage to degrees
  let degrees = clampedPercentage * 3.6;
  // If the degrees exceed 180, subtract 180 from it
  if (degrees > 180) {
    degrees = degrees - 180;
  }
  return degrees;
};
