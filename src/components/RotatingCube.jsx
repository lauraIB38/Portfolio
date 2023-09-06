import React from 'react';
import './RotatingCube.css';

const RotatingCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face front"/>
        <div className="face back"/>
        <div className="face left"/>
        <div className="face right"/>
        <div className="face top"/>
        <div className="face bottom"/>
      </div>
    </div>
  );
};

export default RotatingCube;
