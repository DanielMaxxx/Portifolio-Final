import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <img 
        src="/path/to/your-photo.jpg" 
        alt="Minha Foto" 
        className="profile-photo" 
      />

      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>
        Sou [Seu Nome], estudante apaixonado por aprender e crescer. Aqui, você encontrará meus projetos, atividades e progresso acadêmico.
      </p>

      <div className="links">
        <a href="https://example.com/portfolio1" target="_blank" rel="noopener noreferrer">
          Portfólio Antigo 1
        </a>
        <a href="https://example.com/portfolio2" target="_blank" rel="noopener noreferrer">
          Portfólio Antigo 2
        </a>
      </div>

      <button 
        className="download-button" 
        onClick={() => window.open('/path/to/your-curriculo.pdf')}
      >
        Baixar Currículo
      </button>
    </div>
  );
};

export default Home;
