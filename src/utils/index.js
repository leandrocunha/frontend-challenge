const getPlayer = rounds =>
  rounds.length ? (rounds[rounds.length - 1].player === 1 ? 0 : 1) : 1;

const random = limit => Math.floor(Math.random() * limit);

const result = (selectedOption, value) =>
  parseInt([(selectedOption - value) / 3]);

export { getPlayer, random, result };
