import SingleCard from './SingleCard';
import React from 'react';

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

 
  return (
    <div className="flex flex-wrap gap-6 p-8 ">
      {features.map((feature, index) => (
        <SingleCard key={index} feature={feature} />
      ))}
    </div>
  );
};


export default CardComponent;