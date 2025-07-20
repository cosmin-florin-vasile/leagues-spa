const sortLeaguesBySport = (array: Array<any>) => {
  return array.sort((a, b) => {
    if (a.strSport === b.strSport) {
      return -1;
    }

    return 1;
  });
};

export default sortLeaguesBySport;
