import React, { useState, useRef } from 'react';

const CardComponent = () => {
  const features = [
    {
      title: 'Comprehensive Question Bank',
      description: 'Access thousands of interview questions from top tech companies. Our Question Bank manages, and categorizes questions for quizzes or exams, enabling easy access, editing, and randomized assessments.',
      icon: '📚'
    },
    {
      title: 'Code Editor',
      description: 'Code Editor allows you to write, edit, and test code with features like syntax highlighting, auto-completion, and real-time error checking.',
      icon: '💻'
    },
    {
      title: 'Multiple Categories',
      description: 'You access content into various topics or sections, improving user navigation, searchability, and content management. This feature allows you to filter, sort, and access relevant data more efficiently across diverse subject areas.',
      icon: '📁'
    },
    {
      title: 'Progress Tracking',
      description: 'With Our Progress tracking monitors, you can check your activity over time, displaying completion status, scores, and improvements. It helps you understand their learning journey, identify weak areas.',
      icon: '📊'
    }
  ];

  // Option 1: Render multiple cards (recommended)
  return (
    <div className="flex flex-wrap gap-6 p-8 ">
      {features.map((feature, index) => (
        <SingleCard key={index} feature={feature} />
      ))}
    </div>
  );
};

// Individual card component for each feature
const SingleCard = ({ feature }) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  };

  return (
    <div
      ref={cardRef}
      className="w-65 h-90 bg-gradient-to-br from-purple-600 to-cyan-800 rounded-2xl p-6 cursor-pointer transition-transform duration-300 ease-out shadow-2xl"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full flex flex-col text-white">
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-2xl">{feature.icon}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
        <p className="text-white text-opacity-90 text-sm leading-relaxed flex-grow">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;