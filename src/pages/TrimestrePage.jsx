import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import './TrimestrePage.css';

const TrimestrePage = () => {
  const { subject, trimestre } = useParams();

  const activities = [
    {
      id: 1,
      title: 'Atividade 1',
      description: 'Descrição da atividade 1.',
      image: '/path/to/image1.jpg',
      link: 'https://example.com/atividade1',
    },
    {
      id: 2,
      title: 'Atividade 2',
      description: 'Descrição da atividade 2.',
      image: '/path/to/image2.jpg',
      link: 'https://example.com/atividade2',
    },
    // Adicione mais atividades conforme necessário
  ];

  return (
    <div className="trimestre-page">
      <h1>{subject} - {trimestre}º Trimestre</h1>
      <div className="activities">
        {activities.map(activity => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default TrimestrePage;
