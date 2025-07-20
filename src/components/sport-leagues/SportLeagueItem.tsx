import React from "react";
import { ISportLeague } from "types/ISportLeague.d";

interface ISportLeagueItemProps {
  sportLeague: ISportLeague;
  onClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    sportLeague: ISportLeague,
  ) => void;
}

const SportLeagueItem = (props: ISportLeagueItemProps) => {
  const { sportLeague, onClick } = props;
  const { strLeague } = sportLeague;

  const onLeagueClick = (event) => {
    onClick(event, sportLeague);
  };

  return (
    <div>
      <a className="text-blue-600 cursor-pointer" onClick={onLeagueClick}>
        {strLeague}
      </a>
    </div>
  );
};

export default SportLeagueItem;
