import React from "react";

interface ILeaguesSearchProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LeaguesSearch = (props: ILeaguesSearchProps) => {
  const { value, onChange } = props;
  return (
    <input
      className="w-full border border-gray-200 p-1"
      value={value}
      onChange={onChange}
      placeholder="Search leagues..."
    />
  );
};

export default LeaguesSearch;
