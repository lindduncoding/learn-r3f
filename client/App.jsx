/* eslint-disable react/no-unknown-property */
import React from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, FirstPersonControls, useHelper } from '@react-three/drei'

import Objects from './Objects.jsx'
import Model from './Model.jsx'
import Plane from './Plane.jsx'
import Light from './Light.jsx'
import Background from './Background.jsx'
import PositionalMusic from './PositionalMusic.jsx'


export default function App () {
  return (
    <Canvas>
      <Light />
      <Objects />
      <Model castShadow />
      <Plane />
      <Background />
      <OrbitControls />
      <PositionalMusic />
    </Canvas>
  )
}
