/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene.jsx'

export default function App () {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}
