import { stringFindSimilarity } from "./similarity";

export function stringFindMatch(
  needle: string,
  haystack: string[],
): { ratings: { target: string; rating: number }[]; bestMatch: string; bestMatchIndex: number } {
  const ratings = [];
  let bestMatchIndex = 0;
  for (let index = 0; index < haystack.length; index++) {
    const currentTargetString = haystack[index];
    const currentRating = stringFindSimilarity(needle, currentTargetString);
    ratings.push({ target: currentTargetString, rating: currentRating });
    if (currentRating > ratings[bestMatchIndex].rating) {
      bestMatchIndex = index;
    }
  }
  const bestMatch = ratings[bestMatchIndex];
  return { ratings, bestMatch, bestMatchIndex };
}
