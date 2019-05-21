/**
 * Utilities
 */

// Adapted from: https://to.ly/1zcHe
export default function getRandomIntInclusive(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}
