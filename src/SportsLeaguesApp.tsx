import React from "react";
import { useEffect, useState } from "react";
import SportLeaguesList from "components/sport-leagues/SportLeaguesList";
import fetchSportLeagues from "utils/fetchSportLeagues";
import sortLeaguesBySport from "./utils/sortLeaguesBySport";
import getSportsFromLeagues from "utils/getSportsFromLeagues";
import LeaguesSearch from "./components/sport-leagues/LeaguesSearch";
import SportsFilter from "components/sport-leagues/SportsFilter";
import { ISportLeague } from "types/ISportLeague";
import { FIELD_CLASSNAMES } from "components/sport-leagues/constants";
import filterLeaguesBySport from "utils/filterLeaguesBySport";
import searchLeagueByText from "utils/searchLeagueByText";

const SportsLeaguesApp = () => {
  //useReducer can be used here for better state management
  const [isLoading, setIsLoading] = useState(true);
  const [allLeagues, setAllLeagues] = useState([]);
  const [filteredSportLeagues, setFilteredSportLeagues] = useState([]);
  const [sports, setSports] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [filteredSport, setFilteredSport] = useState(null);

  useEffect(() => {
    (async () => {
      const leagues = await fetchSportLeagues();
      if (leagues) {
        const sortedLeagues = sortLeaguesBySport(leagues);
        setAllLeagues(sortedLeagues);
        setFilteredSportLeagues(sortedLeagues);
        setSports(getSportsFromLeagues(leagues));
        setIsLoading(false);
      }
    })();
  }, []);

  const onLeagueClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sportLeague: ISportLeague,
  ) => {
    console.log(sportLeague);
  };

  const filterAndSearchLeagues = (sport: string, text: string) => {
    const filteredLeagues = filterLeaguesBySport(allLeagues, sport);
    if (searchText) {
      const foundLeagues = searchLeagueByText(filteredLeagues, text);
      setFilteredSportLeagues(foundLeagues);
    } else {
      setFilteredSportLeagues(allLeagues);
    }
  };

  const onFilterChange = (event, selectedFilterSport: string) => {
    setFilteredSport(selectedFilterSport);
    filterAndSearchLeagues(selectedFilterSport, searchText);
  };

  const onSearchLeague = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text);
    //Debounce can be implemented here for better performance
    filterAndSearchLeagues(filteredSport, text);
  };

  return (
    <div className="w-4xs m-8 flex flex-col gap-2">
      <div className="flex flex-grow gap-2">
        <div className={`${FIELD_CLASSNAMES} basis-1/2`}>
          <LeaguesSearch onChange={onSearchLeague} />
        </div>
        <div className={`${FIELD_CLASSNAMES} content-center basis-1/2`}>
          <SportsFilter filterList={sports} onChange={onFilterChange} />
        </div>
      </div>
      <div className={FIELD_CLASSNAMES}>
        {!isLoading && filteredSportLeagues?.length === 0 ? (
          <div className="text-gray-500">No leagues found</div>
        ) : (
          <SportLeaguesList
            sportLeagues={filteredSportLeagues}
            onLeagueClick={onLeagueClick}
          />
        )}
      </div>
    </div>
  );
};

export default SportsLeaguesApp;
