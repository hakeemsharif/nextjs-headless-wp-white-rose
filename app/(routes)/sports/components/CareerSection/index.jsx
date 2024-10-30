import React from "react";

export default function CareerSection({ data }) {
  const { acf } = data[0];

  let stats = [];

  if (acf.sport === "Formula 1") {
    stats = [
      { value: acf.race_wins, label: "Race Wins" },
      { value: acf.pole_position, label: "Pole Positions" },
      { value: acf.podiums, label: "Podiums" },
      { value: acf.grand_prix, label: "Grand Prix" },
    ];
  } else if (acf.sport === "Basketball") {
    stats = [
      { value: acf.games, label: "Games" },
      { value: acf.total_points, label: "Total Points" },
      { value: acf.total_rebounds, label: "Total Rebounds" },
      { value: acf.total_assists, label: "Total Assists" },
    ];
  } else if (acf.sport === "Football") {
    stats = [
      { value: acf.games, label: "Games" },
      { value: acf.total_points, label: "Total Points" },
      { value: acf.total_rebounds, label: "Total Rebounds" },
      { value: acf.total_assists, label: "Total Assists" },
    ];
  } else if (acf.sport === "Tennis") {
    stats = [
      { value: acf.grand_slam, label: "Grand Slam" },
      { value: acf.career_masters, label: "Masters 1000" },
      { value: acf.career_titles, label: "Career Titles" },
      { value: acf.career_rank, label: "Career High Rank" },
    ];
  } else {
    return null; // Don't render anything if the sport is not recognized
  }

  return (
    <div className="athlete-career-section athlete-sections">
      <div className="section-header">
        <h1>{acf.sport} Stats</h1>
        <span className="section-border"></span>
      </div>

      <div className="athlete-career-stats">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.value}</h2>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}