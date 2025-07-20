import React, { useState, useEffect } from 'react';
import { Heart, TrendingUp, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', label: 'Предисловие', icon: Menu },
    { id: 'role-selector', label: 'Выбор роли', icon: Heart },
    { id: 'bonus', label: 'Бонус секция', icon: TrendingUp },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          current = section.getAttribute('data-section') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1001,
          backgroundColor: 'var(--accent-color)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow)',
          transition: 'var(--transition)',
        }}
        className="btn"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Menu */}
      <nav
        style={{
          position: 'fixed',
          top: '5rem',
          right: isOpen ? '1rem' : '-300px',
          width: '250px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius)',
          padding: '1rem',
          zIndex: 1000,
          transition: 'right 0.3s ease-in-out',
          boxShadow: 'var(--shadow)',
        }}
      >
        <h3 style={{ 
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          fontSize: '1.1rem'
        }}>
          Навигация
        </h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: activeSection === section.id ? 'var(--accent-color)' : 'transparent',
                    color: activeSection === section.id ? 'white' : 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'var(--transition)',
                    textAlign: 'left',
                  }}
                  className="nav-button"
                >
                  <IconComponent size={16} />
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <style>
        {`
          .nav-button:hover {
            background-color: var(--accent-color) !important;
            color: white !important;
            transform: translateX(4px);
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
