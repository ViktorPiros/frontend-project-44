function getRandomIntInclusive(min = 0, max = 15) {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimal + 1) + minimal);
}
export default getRandomIntInclusive;
