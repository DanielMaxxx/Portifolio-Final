import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityCard.css';

const ActivityCard = ({ subject, activityId, activityName }) => {
  return (
    <div className="activity-card">
      <h3>{activityName}</h3>
      <p>Detalhes sobre a atividade {activityName} na matéria de {subject}.</p>
      <Link to={`/atividade/${subject}/${activityId}`} className="activity-link">
        Ver detalhes
      </Link>
    </div>
  );
};

export default ActivityCard;
