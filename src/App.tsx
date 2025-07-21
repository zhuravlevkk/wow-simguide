import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Introduction from './components/Introduction';
import RoleSelector, { Role } from './components/RoleSelector';
import HealerSimulation from './components/HealerSimulation';
import DpsSimulation from './components/DpsSimulation';
import './styles/globals.css';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role>('healer');

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <div data-section="introduction">
            <Introduction />
          </div>
          
          <div data-section="role-selector">
            <RoleSelector 
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
            />
          </div>

          {selectedRole === 'healer' && (
            <div data-section="healer">
              <HealerSimulation />
            </div>
          )}

          {selectedRole === 'dps' && (
            <div data-section="dps">
              <DpsSimulation />
            </div>
          )}

          {/* <div data-section="bonus">
            <BonusSection />
          </div> */}
        </main>
        <footer style={{
          backgroundColor: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          padding: '2rem 0',
          marginTop: '3rem',
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          <div className="container">
            <p style={{ marginBottom: '1rem' }}>
              Создано <strong style={{ color: 'var(--wow-gold)' }}>Кайдору</strong> для 
              гильдии <strong style={{ color: 'var(--wow-purple)' }}>Юные Негодяи</strong>
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Веб-версия разработана <strong style={{ color: 'var(--accent-color)' }}>Касвием</strong>
            </p>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
              © {new Date().getFullYear()} World of Warcraft Simulation Guide
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
