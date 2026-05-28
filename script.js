import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import 'react-toggle/style.css';

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

import Toggle from 'react-toggle';

import { Parallax } from 'react-parallax';

import CountUp from 'react-countup';

import { Quiz } from 'react-quiz-component';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

import Particles from 'react-tsparticles';

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const quiz = {
    quizTitle: "Quiz Agrinho 2026",

    questions: [
      {
        question: "O que é agricultura sustentável?",

        questionType: "text",

        answers: [
          "Produção que preserva o meio ambiente",
          "Produção sem tecnologia",
          "Que destrói florestas"
        ],

        correctAnswer: "1"
      },

      {
        question: "Qual energia é sustentável?",

        questionType: "text",

        answers: [
          "Solar",
          "Carvão",
          "Diesel"
        ],

        correctAnswer: "1"
      }
    ]
  };

  return (

    <div className={darkMode ? "dark-mode" : ""}>

      {/* PARTICULAS */}

      <Particles

        options={{

          particles: {

            number: {
              value: 60
            },

            size: {
              value: 3
            },

            move: {
              enable: true,
              speed: 1
            },

            color: {
              value: "#4CAF50"
            }

          }

        }}

        style={{
          position: "fixed",
          zIndex: -1
        }}

      />

      {/* MENU */}

      <Navbar
        collapseOnSelect
        expand="lg"
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
        sticky="top"
      >

        <Container>

          <Navbar.Brand href="#hero">
            🌱 Agrinho 2026
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>

            <Nav className="me-auto">

              <Nav.Link href="#sobre">
                Sobre
              </Nav.Link>

              <Nav.Link href="#inovacoes">
                Inovações
              </Nav.Link>

              <Nav.Link href="#galeria">
                Galeria
              </Nav.Link>

              <Nav.Link href="#videos">
                Vídeos
              </Nav.Link>

              <Nav.Link href="#quiz">
                Quiz
              </Nav.Link>

              <Nav.Link href="#mapa">
                Mapa
              </Nav.Link>

            </Nav>

            <Toggle

              defaultChecked={darkMode}

              icons={{
                checked: "🌙",
                unchecked: "☀️"
              }}

              onChange={() => setDarkMode(!darkMode)}

            />

          </Navbar.Collapse>

        </Container>

      </Navbar>

      {/* HERO PARALLAX */}

      <Parallax

        bgImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"

        strength={400}

      >

        <div className="hero">

          <h1>
            Agro forte, futuro sustentável
          </h1>

          <p>
            Equilíbrio entre produção e meio ambiente
          </p>

        </div>

      </Parallax>

      {/* SOBRE */}

      <Container id="sobre" className="py-5">

        <h2 className="text-center mb-4">
          🌿 Sobre o Tema
        </h2>

        <p className="text-center">

          O agronegócio sustentável une tecnologia,
          inovação e preservação ambiental para
          garantir alimentos e qualidade de vida
          para as futuras gerações.

        </p>

      </Container>

      {/* INOVAÇÕES */}

      <Container id="inovacoes" className="py-5">

        <h2 className="text-center mb-5">
          🚜 Inovações no Agro
        </h2>

        <Row>

          <Col md={3}>
            <Card className="card-custom">

              <Card.Body>

                <Card.Title>
                  Drones Agrícolas
                </Card.Title>

                <Card.Text>
                  Monitoramento inteligente das plantações.
                </Card.Text>

              </Card.Body>

            </Card>
          </Col>

          <Col md={3}>
            <Card className="card-custom">

              <Card.Body>

                <Card.Title>
                  Energia Solar
                </Card.Title>

                <Card.Text>
                  Energia limpa nas fazendas.
                </Card.Text>

              </Card.Body>

            </Card>
          </Col>

          <Col md={3}>
            <Card className="card-custom">

              <Card.Body>

                <Card.Title>
                  Irrigação Inteligente
                </Card.Title>

                <Card.Text>
                  Economia de água no campo.
                </Card.Text>

              </Card.Body>

            </Card>
          </Col>

          <Col md={3}>
            <Card className="card-custom">

              <Card.Body>

                <Card.Title>
                  Robótica Rural
                </Card.Title>

                <Card.Text>
                  Automação agrícola moderna.
                </Card.Text>

              </Card.Body>

            </Card>
          </Col>

        </Row>

      </Container>

      {/* GALERIA */}

      <Container id="galeria" className="py-5">

        <h2 className="text-center mb-5">
          📸 Galeria
        </h2>

        <Row>

          <Col md={3}>
            <img
              className="img-fluid rounded"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
          </Col>

          <Col md={3}>
            <img
              className="img-fluid rounded"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
          </Col>

          <Col md={3}>
            <img
              className="img-fluid rounded"
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
          </Col>

          <Col md={3}>
            <img
              className="img-fluid rounded"
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
          </Col>

        </Row>

      </Container>

      {/* CONTADOR */}

      <Container className="py-5 text-center">

        <Row>

          <Col>

            <h2>
              <CountUp end={100} duration={3} />+
            </h2>

            <p>
              Fazendas Sustentáveis
            </p>

          </Col>

          <Col>

            <h2>
              <CountUp end={5000} duration={3} />+
            </h2>

            <p>
              Alunos Impactados
            </p>

          </Col>

          <Col>

            <h2>
              <CountUp end={200} duration={3} />+
            </h2>

            <p>
              Inovações Tecnológicas
            </p>

          </Col>

        </Row>

      </Container>

      {/* VIDEOS */}

      <Container id="videos" className="py-5">

        <h2 className="text-center mb-5">
          🎥 Vídeos
        </h2>

        <Row>

          <Col md={6}>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8V5hM0xY8gM"
              title="Video"
              allowFullScreen
            ></iframe>

          </Col>

          <Col md={6}>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2RZQ5y8yJ4M"
              title="Video"
              allowFullScreen
            ></iframe>

          </Col>

        </Row>

      </Container>

      {/* QUIZ */}

      <Container id="quiz" className="py-5">

        <Quiz quiz={quiz} />

      </Container>

      {/* MAPA */}

      <Container id="mapa" className="py-5">

        <h2 className="text-center mb-5">
          🗺️ Agricultura Sustentável
        </h2>

        <MapContainer
          center={[-23.5505, -46.6333]}
          zoom={4}
          style={{
            height: "400px",
            width: "100%"
          }}
        >

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[-23.5505, -46.6333]}>

            <Popup>
              Agricultura Sustentável no Brasil
            </Popup>

          </Marker>

        </MapContainer>

      </Container>

      {/* FOOTER */}

      <footer className="footer">

        <h4>
          🌱 Projeto Agrinho 2026
        </h4>

        <p>
          Agro forte, futuro sustentável
        </p>

      </footer>

    </div>

  );

}

export default App;
