import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function Sphere ({position, size, color}) {
    // ref to access the mesh object
    const ref = useRef()
    
    // state for mouse interactions
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useFrame((state, delta) => {
    // Rotate along x axis
    ref.current.rotation.x += delta * (isHovered ? 3 : 1)
    ref.current.rotation.y += delta * (isHovered ? 3 : 1)
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 5
    }, [isHovered])

    // Radius, Width Segment, Height Segment

    return(
    <>
    <mesh position={position} 
    ref={ref} 
    scale={isClicked ? 2 : 1}
    // when pointer enter the mesh, contain event only to the mesh
    onClick={(event) => (setIsClicked(!isClicked))}
    onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
    onPointerLeave={(event) => setIsHovered(false)}
    >
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={isClicked ? color : "orange"} wireframe />
    </mesh>
    </>
    )
}