import React from 'react';

interface EmploymentHistory {
    position: string;
    company: string;
    duration: string;
    teams: Team[];
  }
  
  interface Team {
    name: string;
    accomplishments: string[];
  }
  
  // The overall data structure is an object with a property "employment_history" that is an array of EmploymentHistory
  interface Job {
    job: EmploymentHistory;
  }

export const ExperienceCard: React.FC<Job> = ({ job }) => {
    return (
        <div className="company-section">
            <h1>{job.company}</h1>
            <h2>{job.position}</h2>
            <h3>{job.duration}</h3>
            <div className="card-grid">
                {job.teams.map((team, index) => (
                    <div key={index} className="card">
                        <h3>{team.name}</h3>
                        <ul>
                            {team.accomplishments.map((accomplishment, index) => (
                                <li key={index}>{accomplishment}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
