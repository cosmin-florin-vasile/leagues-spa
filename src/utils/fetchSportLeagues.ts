const fetchSportLeagues = async () => {
  try {
    const url = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching sport leagues");
    }
    const data = await response.json();
    return data.leagues || null;
  } catch (error) {
    console.error("Failed to fetch sport leagues:", error);
    return null;
  }
};

export default fetchSportLeagues;
