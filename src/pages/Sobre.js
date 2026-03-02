import React, { useState, useEffect } from "react";
import "../styles/Sobre.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imagem from "../img/job.jpg";

// Importe suas imagens aqui (exemplo - ajuste os caminhos conforme suas pastas)
// Técnico 1
import tecnico1_foto2 from "../img/imagem4.jpg";
import tecnico1_foto3 from "../img/desraterizacao.webp";
import castrodire from "../img/castrodire.jpg";

// Técnico 2
/*import tecnico1_foto1 from "../img/imagem1.jpg";
import tecnico1_foto2 from "../img/imagem4.jpg";
import tecnico1_foto3 from "../img/imagem8.jpg";

// Técnico 3
import tecnico1_foto1 from "../img/imagem1.jpg";
import tecnico1_foto2 from "../img/imagem4.jpg";
import tecnico1_foto3 from "../img/imagem8.jpg";*/


export default function Sobre() {
  // Dados fixos da equipe técnica com 3 imagens cada
  const equipe = [
    {
      id: 1,
      nome: "Castro Zavale",
      cargo: "Diretor",
      //especialidade: "Controlo de Pragas",
      imagens: [castrodire]
    },
    {
      id: 2,
      //nome: "Maria Silva",
      cargo: "Técnica Especialista",
      especialidade: "Desinfestação",
      imagens: [tecnico1_foto2]
    },
    {
      id: 3,
      //nome: "João Santos",
      cargo: "Técnico de Campo",
      especialidade: "Controlo de Roedores",
      imagens: [tecnico1_foto3]
    }
  ];

  return (
    <>
      <Navbar />

      {/* Banner Sobre */}
      <div className="sobre-banner">
        <div className="container">
          <h1>Sobre a APP All Pest Protect</h1>
          <p>Proteção completa contra pragas desde 2020</p>
        </div>
      </div>

      {/* Nossa História */}
      <section className="nossa-historia">
        <div className="container">
          <div className="historia-content">
            <div className="historia-text">
              <h2>Nossa História</h2>
              <p>
                Durante a pandemia de Covid-19, em 2020, o diretor{" "}
                <strong>Castro Zavale</strong> reuniu uma equipe de jovens para
                prestar suporte à população, realizando desinfecção de
                residências e estabelecimentos comerciais em Maputo.
              </p>
              <p>
                Entre 2020 e 2022, com o aumento da demanda, o projeto{" "}
                <strong>All Pest Protect</strong> se transformou em empresa
                legalmente constituída, com o lema:{" "}
                <strong>"Sua vida longe de pragas!"</strong>
              </p>
              <p>
                Hoje, a APP oferece serviços completos de controle integrado de
                pragas, desinfestação, limpeza, assistência técnica, formação e
                distribuição de produtos de higiene.
              </p>
            </div>
            <div className="historia-image">
              <div className="image-container">
                <div className="historia-placeholder">
                  <img src={imagem} alt="APP Pest Protect - Nossa História" />
                  <p>APP All Pest Protect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="nossa-missao">
        <div className="container">
          <div className="missao-grid">
            <div className="missao-card">
              <div className="missao-icon">🎯</div>
              <h3>Missão</h3>
              <p>
                Prestar apoio a empresas e singulares na prevenção e controle
                sistemático de pragas e limpeza, através de soluções inovadoras
                e eficazes, garantindo segurança e bem-estar.
              </p>
            </div>
            <div className="missao-card">
              <div className="missao-icon">👁️</div>
              <h3>Visão</h3>
              <p>
                Ser referência no setor de controle de pragas e limpeza,
                reconhecida pela qualidade dos serviços, ética profissional e
                contribuição à saúde pública.
              </p>
            </div>
            <div className="missao-card">
              <div className="missao-icon">💎</div>
              <h3>Valores</h3>
              <p>
                • Qualidade e Excelência
                <br />
                • Ética Profissional
                <br />
                • Responsabilidade Ambiental e Social
                <br />• Dinamismo e Proatividade
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Equipe Técnica - Com 1 imagem por técnico */}
      <section className="nossa-equipe">
        <div className="container">
          <h2>Nossa Equipe Técnica</h2>

          <div className="equipe-grid">
            {equipe.map((membro) => (
              <div key={membro.id} className="membro-equipe">
                <div className="membro-foto-container">
                  <img 
                    src={membro.imagens[0]} 
                    alt={membro.nome}
                    className="foto-membro-unica"
                  />
                </div>
                <h4>{membro.nome}</h4>
                <p>{membro.cargo}</p>
                <span>{membro.especialidade}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Estatísticas */}
      <section className="estatisticas">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>2020</strong>
              <span>Ano de Fundação</span>
            </div>
            <div className="stat-item">
              <strong>1000+</strong>
              <span>Clientes Atendidos</span>
            </div>
            <div className="stat-item">
              <strong>5</strong>
              <span>Anos de Experiência</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Suporte ao Cliente</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}