import React, {useRef} from 'react'
import { useControls } from "leva"

export default function Light () {
    const dirLightRef = useRef()

    // Leva controller for directional light color and intensity
    const {lightColor, lightIntensity} = useControls({
        lightColor: "#f24141",
        lightIntensity: {
            value: 0.9,
            min: 0,
            max: 5,
            step: 0.1
        }
    })

    return (
        <>
            <directionalLight 
            position={[0,1,5]} 
            intensity={lightIntensity}
            ref={dirLightRef} 
            color={lightColor} 
            castShadow/>
            <ambientLight intensity={0.5} />
        </>
    )
}