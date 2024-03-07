import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hero } from './components/hero';
import { SectionHeading } from './components/section_heading';
import { SkillCard } from './components/skill_card';
import { ExperienceCard } from './components/experience_card';
import experienceData from './data/experience.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero title="Cullen Deimer" subtitle="Full Stack Software Developer" />
      </header>

      <SectionHeading heading="Experience" />
        {experienceData.employment_history.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}

      <SectionHeading heading="About Me" />
      <div className="card-grid">
        <SkillCard title="Python" text="Strong Python skills including experience with FastAPI, Django, and more." />
        <SkillCard title="Databases" text="Years of hands on experience with SQL Server with a focus on performance." />
        <SkillCard title="Angular" text="Developed mobile apps using the Ionic framework." />
        <SkillCard title="React" text="I built this site with React!" />
        <SkillCard title="DevOps" text="Experience with Docker, Jenkins, AWS, and more." />
        <SkillCard title="Project Management" text="Lead standups and organize project boards. Love a good checklist." />
        <SkillCard title="Java" text="Wrote an application to manage BigData streams with the Spark framework." />
      </div>
    </div>
  );
}

export default App;
