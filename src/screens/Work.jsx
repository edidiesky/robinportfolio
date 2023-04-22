import React from 'react'
import WorkIndex from '../components/work'
import { useEffect } from 'react';

export default function Skills() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <WorkIndex/>
    </div>
  )
}
