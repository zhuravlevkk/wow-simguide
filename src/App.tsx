import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Introduction from './components/Introduction';
import { Role } from './components/RoleSelector';
import HealerSimulation from './components/HealerSimulation';
import DpsSimulation from './components/DpsSimulation';
import './styles/globals.css';

type Screen = 'intro' | 'wizard';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role>('healer');
  const [screen, setScreen] = useState<Screen>('intro');

  const handleStart = (role: Role) => {
    setSelectedRole(role);
    setScreen('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setScreen('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="App">
        {screen === 'wizard' && (
          <Header
            selectedRole={selectedRole}
            onRoleChange={handleRoleChange}
          />
        )}

        <main>
          {screen === 'intro' && (
            <Introduction onStart={handleStart} />
          )}

          {screen === 'wizard' && (
            <div className="container" style={{ paddingTop: '0.5rem', paddingBottom: '2rem' }}>
              {/* Back to intro */}
              <button
                onClick={handleBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-family)',
                  fontWeight: 500,
                  padding: '0.5rem 0',
                  transition: 'var(--transition-fast)',
                }}
              >
                &larr; На главную
              </button>

              {selectedRole === 'healer' && <HealerSimulation />}
              {selectedRole === 'dps' && <DpsSimulation />}
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
