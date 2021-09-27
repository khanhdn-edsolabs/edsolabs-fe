export const createTeam = (arr, ranks) => {
  return Array.from({ length: ranks }, (_, index) => {
    const rank = index + 1;
    const matchIndex = arr.findIndex((item) => item.rank === rank);
    if (matchIndex === -1) {
      return null;
    }
    return arr.splice(matchIndex, 1)[0];
  });
};

export const getUniqRank = (arr) => {
  const ranks = arr.map((item) => item.rank);
  return [...new Set(ranks)];
};
