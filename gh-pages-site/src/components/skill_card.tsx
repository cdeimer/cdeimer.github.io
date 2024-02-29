import React from 'react';

interface SkillCardProps {
    title: string;
    text: string;
    image?: any;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, text, image }) => {
    return (
        <div className="skill-card">
            {image && <img src={image} alt="skill" />}
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};
