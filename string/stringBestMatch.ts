import stringSimilarity from "./stringSimilarity";

export default function stringBestMatch(
  needle: string,
  haystack: string[]
): { ratings: { target: string; rating: number }[]; bestMatch: string; bestMatchIndex: number } {
  const ratings = [];
  let bestMatchIndex = 0;
  for (let i = 0; i < haystack.length; i++) {
    const currentTargetString = haystack[i];
    const currentRating = stringSimilarity(needle, currentTargetString);
    ratings.push({ target: currentTargetString, rating: currentRating });
    if (currentRating > ratings[bestMatchIndex].rating) {
      bestMatchIndex = i;
    }
  }
  const bestMatch = ratings[bestMatchIndex];
  return { ratings, bestMatch, bestMatchIndex };
}
