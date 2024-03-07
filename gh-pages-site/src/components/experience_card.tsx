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
            <div className='company-heading'>
                <h1 className='company-name'>{job.company}</h1> ●
                <h1 className='job-position'>{job.position}</h1> ●
                <h1 className='job-duration'>{job.duration}</h1>
            </div>
            <div className="card-grid experience-grid">
                {job.teams.map((team, index) => (
                    <div key={index} className="card experience-card">
                        <h3 className='experience-heading'>{team.name}</h3>
                        <ul className='experience-list'>
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
