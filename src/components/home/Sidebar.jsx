import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const topics = [
    {
      id: 'creativity',
      name: 'CRÉATIVITÉ & DESIGN',
      subtopics: [
        { id: 'photo', name: 'Photographie & Retouche' },
        { id: '3d', name: '3D' },
        { id: 'graphic', name: 'Graphisme & Print' },
        { id: 'video', name: 'Réalisation & Montage' },
        { id: 'audio', name: 'Audio & MAO' },
        { id: 'design', name: 'Design' },
        { id: 'uxui', name: 'UX/UI design' },
        { id: 'animation', name: 'Animation & Motion design' },
        { id: 'digital-painting', name: 'Digital painting' },
        { id: 'cao', name: 'CAO' }
      ]
    },
    {
      id: 'dev',
      name: 'DÉVELOPPEMENT & IT',
      subtopics: [
        { id: 'web', name: 'Web' },
        { id: 'programming', name: 'Programmation' },
        { id: 'systems', name: 'Système d\'exploitation' }
      ]
    },
    {
      id: 'business',
      name: 'BUSINESS',
      subtopics: [
        { id: 'marketing', name: 'Marketing' },
        { id: 'communication', name: 'Communication' },
        { id: 'management', name: 'Management' }
      ]
    }
  ];