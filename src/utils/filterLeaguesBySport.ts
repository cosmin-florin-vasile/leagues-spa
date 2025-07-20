import { ISportLeague } from "types/ISportLeague";
import { Sport } from "types/Sport";
import { ALL_SPORT } from "components/sport-leagues/constants";

const filterLeaguesBySport = (sportLeagues: ISportLeague[], sport: Sport) => {
  if (!sport || sport === ALL_SPORT) {
    return sportLeagues;
  }

  return sportLeagues.filter(
    (league: ISportLeague) => league.strSport.toLowerCase() === sport,
  );
};

export default filterLeaguesBySport;
