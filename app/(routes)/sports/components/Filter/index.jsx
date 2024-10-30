import React from 'react'
import Link from 'next/link'
import './navfilter.css'
export default function Filter({data}) {

  const categoryIdToName = {
    3: "Formula 1",
    4: "Football",
    5: "Basketball",
    6: "Tennis",
    // Add more mappings as needed
  };
  
  // Create a reverse mapping, grouping sports by name   // CLAUDE ASSIST
  const groupedSports = Object.entries(categoryIdToName).reduce((acc, [id, name]) => {
    if (!acc[name]) {
      acc[name] = [];
    }
    acc[name].push(id);
    return acc;
  }, {});

  // Sort the sport names alphabetically // CLAUDE ASSIST
  const sortedSportNames = Object.keys(groupedSports).sort((a, b) => 
    a.localeCompare(b, 'en', { sensitivity: 'base' })
  );

  return (
    <div className="nav-filter">
      <ul>
          <li>
              <Link href='/'>All</Link>
          </li>
          {sortedSportNames.map((sportName) => (
            <li key={sportName}>
              <Link href={`sports/${groupedSports[sportName][0]}`}>{sportName}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}