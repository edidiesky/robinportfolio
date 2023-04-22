import React, { useEffect } from 'react'
import SkillsIndex from '../components/skills'
export default function Skills() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <SkillsIndex/>
    </div>
  )
}
