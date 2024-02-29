import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({ title = "Cullen Deimer", subtitle = " Full Stack Software Developer" }) => {
    return (
        <div className="hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};