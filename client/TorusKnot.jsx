import { MeshWobbleMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function TorusKnot ({position, color, size, tube, tubularSegment, radialSegment}) {
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

    // Radius, Tube, Tubular Segment, Height Segment

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
      <torusKnotGeometry args={[...size, tube, tubularSegment, radialSegment]}/>
      <meshStandardMaterial color={isClicked ? color : "orange"} wireframe />
      {/* <MeshWobbleMaterial factor={5} speed={2} color={color} /> */}
    </mesh>
    </>
    )
}