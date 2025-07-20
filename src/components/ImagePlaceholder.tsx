import React, { useState, useRef, useEffect } from 'react';
import { Camera, Image as ImageIcon, X, ZoomIn } from 'lucide-react';

interface ImagePlaceholderProps {
  title: string;
  description?: string;
  aspectRatio?: string;
  size?: 'small' | 'medium' | 'large';
  imageSrc?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  title, 
  description, 
  aspectRatio,
  size = 'medium',
  imageSrc
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageAspectRatio, setImageAspectRatio] = useState<string>(aspectRatio || '16/9');
  const [isImageLoading, setIsImageLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  // Определяем размеры на основе размера компонента
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { 
          minHeight: '150px',
          maxWidth: '400px'
        };
      case 'large':
        return { 
          minHeight: '300px',
          maxWidth: '800px'
        };
      default:
        return { 
          minHeight: '200px',
          maxWidth: '600px'
        };
    }
  };

  // Определяем размеры шрифтов отдельно
  const getFontSizes = () => {
    switch (size) {
      case 'small':
        return { title: '0.9rem', description: '0.75rem' };
      case 'large':
        return { title: '1.2rem', description: '1rem' };
      default:
        return { title: '1rem', description: '0.85rem' };
    }
  };

  const sizeConfig = getSizeStyles();
  const fontSizes = getFontSizes();

  // Обработчик загрузки изображения для определения его соотношения сторон
  const handleImageLoad = () => {
    if (imageRef.current && imageSrc) {
      const { naturalWidth, naturalHeight } = imageRef.current;
      const calculatedRatio = `${naturalWidth}/${naturalHeight}`;
      setImageAspectRatio(calculatedRatio);
      setIsImageLoading(false);
    }
  };

  // Открытие модального окна
  const openModal = () => {
    if (imageSrc) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden'; // Предотвращаем скролл
    }
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Обработчик нажатия клавиши Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Основной компонент */}
      <div 
        style={{
          aspectRatio: imageAspectRatio,
          width: '100%',
          ...sizeConfig,
          backgroundColor: imageSrc ? 'transparent' : 'var(--bg-tertiary)',
          border: imageSrc ? '1px solid var(--border-color)' : '2px dashed var(--border-color)',
          borderRadius: 'var(--border-radius)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: imageSrc ? 'flex-start' : 'center',
          padding: imageSrc ? '0' : '1rem',
          margin: '1rem 0',
          position: 'relative',
          transition: 'var(--transition)',
          cursor: imageSrc ? 'zoom-in' : 'help',
          overflow: 'hidden'
        }}
        className="image-placeholder"
        title={`${imageSrc ? 'Нажмите для увеличения' : 'Здесь будет скриншот'}: ${title}`}
        onClick={openModal}
      >
        {imageSrc ? (
          <>
            <img 
              ref={imageRef}
              src={imageSrc}
              alt={title}
              onLoad={handleImageLoad}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--border-radius)',
                opacity: isImageLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
            />
            
            {/* Иконка увеличения */}
            <div style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            className="zoom-icon">
              <ZoomIn size={16} />
            </div>

            {/* Подпись снизу */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              color: 'white',
              padding: '0.75rem',
              fontSize: fontSizes.description
            }}>
              <h4 style={{
                fontSize: fontSizes.title,
                fontWeight: 'bold',
                marginBottom: '0.25rem',
                lineHeight: '1.2'
              }}>
                {title}
              </h4>
              {description && (
                <p style={{
                  fontSize: fontSizes.description,
                  opacity: 0.9,
                  lineHeight: '1.3',
                  margin: 0
                }}>
                  {description}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              backgroundColor: 'var(--accent-color)',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Camera size={14} />
            </div>

            <ImageIcon 
              size={size === 'small' ? 32 : size === 'large' ? 56 : 40} 
              style={{ 
                color: 'var(--text-muted)',
                marginBottom: '0.75rem'
              }} 
            />
            
            <h4 style={{
              fontSize: fontSizes.title,
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '0.5rem',
              lineHeight: '1.2'
            }}>
              📸 {title}
            </h4>
            
            {description && (
              <p style={{
                fontSize: fontSizes.description,
                color: 'var(--text-secondary)',
                textAlign: 'center',
                maxWidth: '90%',
                lineHeight: '1.4',
                margin: '0 0 0.75rem 0'
              }}>
                {description}
              </p>
            )}

            <div style={{
              padding: '0.4rem 0.8rem',
              backgroundColor: 'var(--warning-color)',
              color: '#000',
              borderRadius: '20px',
              fontSize: '0.7rem',
              fontWeight: 'bold'
            }}>
              НУЖЕН СКРИНШОТ
            </div>
          </>
        )}
      </div>

      {/* Модальное окно */}
      {isModalOpen && imageSrc && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={closeModal}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease',
              zIndex: 1001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <X size={24} />
          </button>

          {/* Изображение в модальном окне */}
          <div
            style={{
              maxWidth: '95%',
              maxHeight: '95%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--border-radius)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            />
            
            {/* Подпись в модальном окне */}
            {(title || description) && (
              <div style={{
                position: 'absolute',
                bottom: '-3rem',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                textAlign: 'center',
                maxWidth: '100%'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'
                }}>
                  {title}
                </h4>
                {description && (
                  <p style={{
                    fontSize: '0.9rem',
                    opacity: 0.9,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
                    margin: 0
                  }}>
                    {description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          .image-placeholder:hover {
            border-color: var(--accent-color);
            background-color: ${imageSrc ? 'transparent' : 'var(--bg-secondary)'};
            transform: scale(1.02);
          }
          
          .image-placeholder:hover .zoom-icon {
            opacity: 1;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Мобильные стили */
          @media (max-width: 768px) {
            .image-placeholder {
              margin: 0.5rem 0;
              min-height: ${size === 'small' ? '120px' : size === 'large' ? '200px' : '150px'} !important;
            }
          }

          @media (max-width: 480px) {
            .image-placeholder {
              min-height: ${size === 'small' ? '100px' : size === 'large' ? '180px' : '130px'} !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default ImagePlaceholder;