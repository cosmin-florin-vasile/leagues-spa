import React, { Fragment } from "react";
import { ISportLeague } from "types/ISportLeague";
import SportLeagueItem from "components/sport-leagues/SportLeagueItem";

interface ISportLeaguesListProps {
  sportLeagues: ISportLeague[];
  onLeagueClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    sportLeague: ISportLeague,
  ) => void;
}

const SportLeaguesList = (props: ISportLeaguesListProps) => {
  const { sportLeagues, onLeagueClick } = props;
  let previousSport = "";
  let leagueSport = "";

  return sportLeagues.map((sportLeague: ISportLeague) => {
    const currentSport = sportLeague.strSport;
    if (previousSport !== currentSport) {
      leagueSport = currentSport;
      previousSport = currentSport;
    } else {
      leagueSport = "";
    }
    return (
      <Fragment key={sportLeague.idLeague}>
        {leagueSport ? (
          <div className="font-medium text-black">{leagueSport}</div>
        ) : null}
        <div className="ml-2">
          <SportLeagueItem
            key={sportLeague.idLeague}
            sportLeague={sportLeague}
            onClick={onLeagueClick}
          />
        </div>
      </Fragment>
    );
  });
};

export default SportLeaguesList;
