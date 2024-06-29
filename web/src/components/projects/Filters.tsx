import React, { useState } from 'react';

interface FiltersProps {
  setFilter: (type: string, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ setFilter }) => {
  const programs = [
    'Agriculture & Natural Resources Conservation',
    'Architecture',
    'Area, Ethnic, and Multidisciplinary Studies',
    'Visual & Performing',
    'Business',
    'Communications',
    'Community, Family, and Personal Services',
    'Computer Science and Mathematics',
    'Education',
    'Engineering',
    'Engineering Technology and Drafting',
    'English and Foreign Languages',
    'Health Administration and Assisting',
    'Health Sciences and Technologies',
    'Philosophy, Religion, and Theology',
    'Repair, Production and Construction',
    'Biological and Physical',
    'Social Sciences and Law'
  ];

  const universities = [
    'Harvard University', 'Stanford University', 'MIT', 'University of Cambridge', 'University of Oxford'
  ];

  const regions = [
    'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Australia', 'South America'
  ];

  const [showMore, setShowMore] = useState(false);
  const visiblePrograms = showMore ? programs : programs.slice(0, 5);

  return (
    <aside className="w-64 p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">🎒 Program</h3>
        <ul>
          {visiblePrograms.map((program, index) => (
            <li key={index} className="cursor-pointer mb-2" onClick={() => setFilter('program', program)}>
              {program}
            </li>
          ))}
        </ul>
        <button
          className="text-blue-500 underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">🎓  University</h3>
        <ul>
          {universities.map((university, index) => (
            <li key={index} className="cursor-pointer mb-2" onClick={() => setFilter('university', university)}>
              {university}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">🌐 Region</h3>
        <ul>
          {regions.map((region, index) => (
            <li key={index} className="cursor-pointer mb-2" onClick={() => setFilter('region', region)}>
              {region}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filters;

