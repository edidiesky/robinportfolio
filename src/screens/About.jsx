import React from 'react'
import AboutIndex from '../components/about'
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <AboutIndex/>
    </div>
  )
}
