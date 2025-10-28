import React from 'react';
import { createRoot } from 'react-dom/client';
import NexusPage from './nexus.jsx'; // le fichier s'appelle bien "nexus.jsx"
import './styles.css';

const root = document.getElementById('root');
createRoot(root).render(<NexusPage />);
