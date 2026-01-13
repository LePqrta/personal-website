import React, { useState } from 'react';
import './ExperienceCard.css';

export type Experience = {
  title: string;
  company?: string;
  URL?: string;
  startDate?: string;
  endDate?: string;
  responsibilities?: string[];
};

type Props = {
  exp: Experience;
  previewCount?: number;
};

const ExperienceCard: React.FC<Props> = ({ exp, previewCount = 2 }) => {
  const [expanded, setExpanded] = useState(false);
  const items = exp.responsibilities ?? [];
  const shouldTruncate = items.length > previewCount;
  const visibleItems = expanded || !shouldTruncate ? items : items.slice(0, previewCount);

  return (
    <article className="experience-card">
      <div className="experience-title">
        <strong>{exp.title}{exp.company ? ' at' : ''}</strong>
        {exp.company && (
          <span className="company">
            <a href={exp.URL ?? '#'} target="_blank" rel="noopener noreferrer">
              {exp.company}
            </a>
          </span>
        )}
        <span className="dates">
          {exp.startDate ? ` (${exp.startDate}` : ''}
          {exp.startDate && exp.endDate ? ` - ${exp.endDate})` : exp.startDate && !exp.endDate ? `)` : ''}
          {!exp.startDate && exp.endDate ? ` (${exp.endDate})` : ''}
        </span>
      </div>

      {items.length > 0 && (
          <ul className={`experience-list${expanded ? ' expanded' : ''}`}>
            {items.map((r, idx) => (
              <li
                key={idx}
                style={
                  !expanded && shouldTruncate && idx >= previewCount
                    ? { display: 'none' }
                    : {}
                }
              >
                {r}
              </li>
            ))}
          </ul>
      )}
        {shouldTruncate && (
<button
  className={`toggle-arrow${expanded ? ' expanded' : ''}`}
  onClick={() => setExpanded(prev => !prev)}
  aria-expanded={expanded}
  aria-label={expanded ? 'Collapse responsibilities' : 'Expand responsibilities'}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    style={{ width: '1.5em', height: '1.5em', display: 'block' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
</button>
        )}
    </article>
  );
};

export default ExperienceCard;