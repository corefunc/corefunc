"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringFindMatch = void 0;
const similarity_1 = require("./similarity");
function stringFindMatch(needle, haystack) {
    const ratings = [];
    let bestMatchIndex = 0;
    for (let index = 0; index < haystack.length; index++) {
        const currentTargetString = haystack[index];
        const currentRating = similarity_1.stringFindSimilarity(needle, currentTargetString);
        ratings.push({ target: currentTargetString, rating: currentRating });
        if (currentRating > ratings[bestMatchIndex].rating) {
            bestMatchIndex = index;
        }
    }
    const bestMatch = ratings[bestMatchIndex];
    return { ratings, bestMatch, bestMatchIndex };
}
exports.stringFindMatch = stringFindMatch;
