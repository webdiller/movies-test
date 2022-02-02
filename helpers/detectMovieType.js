import React from "react";

/**
 * @param {string} movieType
 * @returns string with russian language
 */
export default function detectMovieType(movieType) {
  switch (movieType.toLocaleLowerCase()) {
    case "movie":
      return "фильм";
    case "tv":
      return "сериал";
    case "person":
      return "персонаж";
    default:
      return "фильм";
  }
}
