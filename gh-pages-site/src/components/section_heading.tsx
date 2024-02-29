import React from 'react';

interface SectionHeadingProps {
    heading: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
    return (
        <div className="section-heading">
            <h2 className="section-heading-text">{heading}</h2>
        </div>
    );
};