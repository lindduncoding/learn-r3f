import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function Cube ({position, size, color}) {
    // ref to access the mesh object
    const ref = useRef()
    useFrame((state, delta) => {
    // Rotate along x axis
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 3
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 5
    ref.current.scale.x += Math.sin(delta*10)
    // I suppose you can use this to see what ref.current props can be animated
    console.log(ref.current)
    })

    return(
    <>
    <mesh position={position} ref={ref}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
    </>
    )
}