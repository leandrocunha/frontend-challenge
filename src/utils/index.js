/**
 * @function getPlayer Check last move to return correct player would be play.
 * @param {Array} rounds Array with rounds playeds.
 * @example getPlayer([{...}, {...}]);
 * @return {number} Correct player number would be play
 */
const getPlayer = rounds =>
  rounds.length ? (rounds[rounds.length - 1].player === 1 ? 0 : 1) : 1;

/**
 * @function random Generate random int number with limit.
 * @param {number} limit The limit of range.
 * @example random(100);
 * @return {number} The int number
 */
const random = limit => Math.floor(Math.random() * limit);

/**
 * @function result The result of mathematical formula.
 * @param {number} selectedOption The option to be subtracted
 * @param {number} value The value to be subtracted.
 * @example result(-1, 98);
 * @return {number} The result of function
 */
const result = (selectedOption, value) =>
  parseInt([(selectedOption - value) / 3]);

/** Export functions */
export { getPlayer, random, result };
