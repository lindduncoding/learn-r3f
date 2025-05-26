import React, { useRef } from "react";
import Cube from './Cube.jsx'
import Sphere from './Sphere.jsx'
import TorusKnot from './TorusKnot.jsx'
import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from "three"
import { useControls } from "leva";

export default function Scene () {
    const dirLightRef = useRef()

    // Leva controller for directional light color and intensity
    const {lightColor, lightIntensity} = useControls({
        lightColor: "white",
        lightIntensity: {
            value: 0.5,
            min: 0,
            max: 5,
            step: 0.1
        }
    })

    // Leva controller for torus knot
    const {color, tube, tubularSegment, radialSegment} = useControls({
        color: "yellow",
        tube: {
            value: 0.1,
            min: 0,
            max: 1
        },
        tubularSegment: {
            value: 32,
            min: 24,
            max: 50,
            step: 1
        },
        radialSegment: {
            value: 10,
            min: 6,
            max: 12,
            step: 1
        }
    })

    // What type of light object
    useHelper(dirLightRef, DirectionalLightHelper, 0.5, "white")

    return (
    <>
        <directionalLight 
        position={[0,1,5]} 
        intensity={lightIntensity}
        ref={dirLightRef} 
        color={lightColor} />
        <ambientLight intensity={0.1} />
        {/* <Cube position={[2,0,0]} size={[0.5,1,1]} color={"red"}/> */}
        {/* <Sphere position={[0,0,0]} size={[1,27,9]} color={"blue"} /> */}
        <TorusKnot position={[0,0,0]} size={[1, tube, tubularSegment, radialSegment]} color={color}/>
        <OrbitControls />
    </>
    )
}