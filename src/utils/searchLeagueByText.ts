import { ISportLeague } from "types/ISportLeague";

const searchLeagueByText = (sportLeagues: ISportLeague[], text: string) => {
  if (!text) {
    return sportLeagues;
  }

  const lowerCaseText = text.toLowerCase();
  return sportLeagues.filter((league: ISportLeague) =>
    league.strLeague.toLowerCase().includes(lowerCaseText),
  );
};
export default searchLeagueByText;
