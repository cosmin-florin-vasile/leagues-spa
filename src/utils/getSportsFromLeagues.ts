import { ISportLeague } from "types/ISportLeague";
import { Sport } from "../types/Sport";

const getSportsFromLeagues = (leagues: ISportLeague[]): Sport[] => {
  const sports = new Set([]);
  leagues.forEach((league: ISportLeague) => {
    sports.add(league.strSport);
  });
  return [...sports];
};

export default getSportsFromLeagues;
