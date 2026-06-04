import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import SpotlightCard from '../../../components/UI/SpotlightCard';
import { Experience } from '../../../types';

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
    <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(255, 255, 255, 0.05)">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-100 flex items-center gap-2">
            {exp.title}
          </h3>
          {exp.company && (
            <div className="flex items-center gap-2 text-primary mt-2 font-medium">
              <Building2 size={18} />
              {exp.URL ? (
                <a
                  href={exp.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {exp.company}
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span>{exp.company}</span>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-text-muted text-sm whitespace-nowrap bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
          <Calendar size={16} />
          <span>
            {exp.startDate ? exp.startDate : ''}
            {exp.startDate && exp.endDate ? ` - ${exp.endDate}` : exp.startDate && !exp.endDate ? ` - Present` : ''}
            {!exp.startDate && exp.endDate ? exp.endDate : ''}
          </span>
        </div>
      </div>

      {items.length > 0 && (
        <div className="relative">
          <ul className="space-y-3 text-text-muted text-sm md:text-base">
            <AnimatePresence initial={false}>
              {visibleItems.map((r, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary mt-1.5">•</span>
                  <span className="leading-relaxed">{r}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      )}

      {shouldTruncate && (
        <button
          className="mt-6 flex items-center gap-2 text-sm font-medium text-text-main hover:text-primary transition-colors focus:outline-none"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show Less' : 'Read More'}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}
    </SpotlightCard>
  );
};

export default ExperienceCard;