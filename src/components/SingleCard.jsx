import React from "react";
import { useState , useRef} from "react";

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

export default SingleCard ;