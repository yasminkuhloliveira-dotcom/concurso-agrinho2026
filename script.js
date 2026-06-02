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
  Card
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
