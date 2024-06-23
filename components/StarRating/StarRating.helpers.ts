// generate an array of numbers based on the specified start and end points,
// with an optional step increment

// start: The starting number of the range.
// end: The ending number (exclusive) of the range. It's optional; if not provided,
// the function uses start as the end, and starts from 0.
// step: The increment between numbers in the range. It defaults to 1 if not specified.

export const range = (
  start: number,
  end?: number,
  step: number = 1
): number[] => {
  let output: number[] = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

//rating for the disabled star
export function getInverseRating(rating: number) {
  // Normalize the rating to be within 0 to 5
  const clampedRating = Math.min(5, Math.max(0, rating));
  return 5 - clampedRating;
}
