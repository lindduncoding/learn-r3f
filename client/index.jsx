import React from 'react'
import { createRoot } from 'react-dom/client'
import { Leva }from 'leva'
import App from './App.jsx'

const rootDiv = document.getElementById('root')
createRoot(rootDiv).render(
  <><Leva /><App /></>
)
