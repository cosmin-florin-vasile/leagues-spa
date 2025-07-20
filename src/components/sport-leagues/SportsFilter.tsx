import React from "react";
import { ALL_SPORT } from "components/sport-leagues/constants";

interface ISportsFilterProps {
  value?: string;
  filterList?: string[];
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    selectedSport?: string,
  ) => void;
}

const SportsFilter = (props: ISportsFilterProps) => {
  const { value, filterList, onChange } = props;

  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event, event.target.value.toLowerCase());
  };

  return (
    <select value={value} className="w-full" onChange={onFilterChange}>
      <option value="">{ALL_SPORT}</option>
      {filterList.map((filter) => (
        <option key={filter}>{filter}</option>
      ))}
    </select>
  );
};

export default SportsFilter;
