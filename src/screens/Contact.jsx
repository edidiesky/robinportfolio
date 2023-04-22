import React, { useEffect } from 'react'
import ContactIndex from '../components/contact'

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <ContactIndex/>
    </div>
  )
}
