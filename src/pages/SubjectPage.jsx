import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SubjectPage.css';

const SubjectPage = () => {
  const { subject } = useParams();

  return (
    <div className="subject-page">
      <h1>{subject}</h1>
      <div className="subject-links">
        <Link to={`/materia/${subject}/1`}>1º Trimestre</Link>
        <Link to={`/materia/${subject}/2`}>2º Trimestre</Link>
        <Link to={`/materia/${subject}/3`}>3º Trimestre</Link>
        <Link to={`/materia/${subject}/recuperacao`}>Recuperação</Link>
      </div>
    </div>
  );
};

export default SubjectPage;
