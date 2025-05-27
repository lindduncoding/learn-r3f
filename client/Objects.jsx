import React, { useRef } from "react";
import Cube from './Cube.jsx'
import Sphere from './Sphere.jsx'
import TorusKnot from './TorusKnot.jsx'
import { useControls } from "leva"

export default function Objects () {
    // Leva controller for torus knot
    const {color, tube, tubularSegment, radialSegment} = useControls({
        color: "yellow",
        tube: {
            value: 0.28,
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

    return (
    <>
        {/* <Cube position={[2,0,0]} size={[0.5,1,1]} color={"red"}/> */}
        <Sphere position={[0,0,0]} size={[1,27,9]} color={"blue"} />
        {/* <TorusKnot 
        position={[0,2,0]} 
        size={[1, tube, tubularSegment, radialSegment]} 
        color={color}
        castShadow
        /> */}
    </>
    )
}