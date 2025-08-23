// @ts-nocheck

import React from 'react';
import { readexPro } from '~/elements/fonts';


const statusColors: Record<string, string> = {
  done: '🟢',
  'in progress': '🟡',
  submitted: '🔵',
  concept: '⚪',
};

export const ProjectCardNew = ({
  title,
  description,
  image,
  agent,
  status,
}: {
  title: string;
  description: string;
  image?: string | null;
  agent?: string;
  status?: 'done' | 'in progress' | 'submitted' | 'concept';
}) => (
  <div className="border border-primary/30 bg-black/60 rounded-md p-4 w-full max-w-sm m-2 cursor-pointer outline outline-1 outline-primary/40 hover:outline-cyan transition-all">
    {image ? (
      <div className="w-full h-40 bg-gray-800 rounded-md overflow-hidden mb-3">
        <img src={image} alt="project" className="object-cover w-full h-full" />
      </div>
    ) : (
      <div className="w-full h-40 bg-gray-800 rounded-md mb-3" />
    )}

    <h3 className={`${readexPro.className} text-white text-lg font-semibold mb-1`}>
      {title}
    </h3>

    {agent && (
      <p className="text-sm text-gray-400 mb-1">
        Agent: <span className="text-white">{agent}</span>
      </p>
    )}

    {status && (
      <p className="text-sm mb-2">
        Status: <span>{statusColors[status.toLowerCase()] || '⚪'} {status}</span>
      </p>
    )}

    <p className="text-sm text-gray-300">{description}</p>
  </div>
);
