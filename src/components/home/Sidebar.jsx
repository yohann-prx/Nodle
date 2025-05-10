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

  const Sidebar = () => {
    const [expandedTopics, setExpandedTopics] = useState(topics.map(topic => topic.id));
    const [activeSubtopic, setActiveSubtopic] = useState('3d'); // Default active subtopic
  
    const toggleTopic = (topicId) => {
        setExpandedTopics(prevExpanded => {
          if (prevExpanded.includes(topicId)) {
            return prevExpanded.filter(id => id !== topicId);
          } else {
            return [...prevExpanded, topicId];
          }
        });
      };

      return (
        <aside className="w-[250px] bg-white border-r border-gray-200 h-full flex-shrink-0 overflow-y-auto">
          <div className="py-4">
            <div className="px-4 mb-4">
              <h2 className="font-medium text-gray-500 text-sm">Domaines</h2>
            </div>
            
            <nav>
              {topics.map(topic => (
                <div key={topic.id} className="mb-1">
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <span>{topic.name}</span>
                    {expandedTopics.includes(topic.id) ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedTopics.includes(topic.id) && (
                    <div className="mt-1 pl-2">
                      {topic.subtopics.map(subtopic => (
                        <button
                          key={subtopic.id}
                          className={`w-full text-left px-4 py-2 text-sm rounded-r-md ${
                            activeSubtopic === subtopic.id
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveSubtopic(subtopic.id)}
                        >
                          {subtopic.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>
      );
    };
    