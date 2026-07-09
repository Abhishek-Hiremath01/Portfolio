import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-orb" />
      <p className="text-lg font-medium tracking-[0.25em] uppercase text-slate-200">Loading portfolio</p>
      <div className="loading-bar">
        <span />
      </div>
    </div>
  );
};

export default LoadingScreen;
