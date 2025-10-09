import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <span className="loading loading-bars loading-xl text-[#00D390]"></span>
    </div>
  );
};

export default Loader;
