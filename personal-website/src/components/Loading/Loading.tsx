import React, { useState, useEffect } from 'react';
import './Loading.css';

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="spinnerContainer">
      <div className="spinner" aria-label="Loading content..." />
    </div>
  );
}