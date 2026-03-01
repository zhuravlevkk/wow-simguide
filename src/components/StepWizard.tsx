import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Check, RotateCcw } from 'lucide-react';

export interface WizardStep {
  title: string;
  content: ReactNode;
}

interface StepWizardProps {
  steps: WizardStep[];
  onComplete?: () => void;
  onReset?: () => void;
  accentColor?: string;
}

const StepWizard: React.FC<StepWizardProps> = ({ steps, onComplete, onReset, accentColor }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;
  const isFinished = completedSteps.size === totalSteps;

  const goNext = useCallback(() => {
    setCompletedSteps(prev => new Set(prev).add(currentStep));
    if (isLastStep) {
      onComplete?.();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, isLastStep, onComplete]);

  const goPrev = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  }, [isFirstStep]);

  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  }, [totalSteps]);

  const reset = useCallback(() => {
    setCurrentStep(0);
    setCompletedSteps(new Set());
    onReset?.();
  }, [onReset]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const step = steps[currentStep];
  const progressPercent = ((completedSteps.size) / totalSteps) * 100;

  return (
    <div style={{ padding: '1.5rem 0' }}>
      {/* Progress bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.6rem'
        }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Шаг {currentStep + 1} из {totalSteps}
          </span>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-muted)'
          }}>
            {Math.round(progressPercent)}%
          </span>
        </div>

        {/* Progress track */}
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'var(--progress-bg)',
          borderRadius: 'var(--border-radius-full)',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progressPercent}%`,
            height: '100%',
            backgroundColor: accentColor || 'var(--progress-fill)',
            borderRadius: 'var(--border-radius-full)',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }} />
        </div>
      </div>

      {/* Step dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.35rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {steps.map((_, i) => {
          const isDone = completedSteps.has(i);
          const isActive = i === currentStep;
          return (
            <button
              key={i}
              onClick={() => goToStep(i)}
              aria-label={`Перейти к шагу ${i + 1}`}
              style={{
                width: isActive ? '2rem' : '0.55rem',
                height: '0.55rem',
                borderRadius: 'var(--border-radius-full)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: isActive
                  ? (accentColor || 'var(--step-active-bg)')
                  : isDone
                    ? 'var(--step-done-bg)'
                    : 'var(--step-pending-bg)',
                opacity: !isActive && !isDone ? 0.6 : 1,
                padding: 0,
              }}
            />
          );
        })}
      </div>

      {/* Step content */}
      <div className="card" style={{
        minHeight: '280px',
        position: 'relative',
        borderTop: `3px solid ${accentColor || 'var(--color-primary)'}`,
      }}>
        {/* Step header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          marginBottom: '1.25rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--border-radius-full)',
            backgroundColor: accentColor || 'var(--color-primary)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1rem',
            flexShrink: 0,
          }}>
            {completedSteps.has(currentStep) ? <Check size={18} strokeWidth={3} /> : currentStep + 1}
          </div>
          <h3 style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
            margin: 0,
          }}>
            {step.title}
          </h3>
        </div>

        {/* Step body */}
        <div style={{
          paddingLeft: '3.35rem',
          paddingBottom: '1rem',
        }}>
          {step.content}
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1.25rem',
        gap: '0.75rem'
      }}>
        <button
          onClick={goPrev}
          disabled={isFirstStep}
          className="btn btn-secondary"
          style={{
            opacity: isFirstStep ? 0.4 : 1,
            cursor: isFirstStep ? 'not-allowed' : 'pointer',
            minWidth: '120px',
          }}
        >
          <ChevronLeft size={18} />
          Назад
        </button>

        {isFinished && isLastStep ? (
          <button
            onClick={reset}
            className="btn"
            style={{
              backgroundColor: 'var(--color-success)',
              minWidth: '120px',
            }}
          >
            <RotateCcw size={18} />
            Заново
          </button>
        ) : (
          <button
            onClick={goNext}
            className="btn"
            style={{
              backgroundColor: accentColor || 'var(--color-primary)',
              minWidth: '120px',
            }}
          >
            {isLastStep ? 'Готово' : 'Далее'}
            {!isLastStep && <ChevronRight size={18} />}
            {isLastStep && <Check size={18} />}
          </button>
        )}
      </div>

      {/* Keyboard hint */}
      <p style={{
        textAlign: 'center',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '1rem'
      }}>
        Используйте <kbd>←</kbd> <kbd>→</kbd> для навигации
      </p>
    </div>
  );
};

export default StepWizard;
