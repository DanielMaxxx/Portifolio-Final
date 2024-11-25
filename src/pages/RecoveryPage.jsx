import React from 'react';
import './SubjectPage.css';

const SubjectPage = ({ subjectName }) => {
  return (
    <div className="subject-page">
      <img 
        src="/path/to/your-photo.jpg" 
        alt="Minha Foto" 
        className="profile-photo" 
      />
      <h1>{subjectName}</h1>
      <p>Explore as atividades e projetos desenvolvidos ao longo do curso de {subjectName}.</p>
      <div className="subject-links">
        <a href="#">Atividade 1</a>
        <a href="#">Atividade 2</a>
        <a href="#">Atividade 3</a>
      </div>
    </div>
  );
};

export default SubjectPage;
