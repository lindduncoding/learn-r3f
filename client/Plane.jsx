import React from "react"
import { useTexture } from '@react-three/drei'

export default function Plane () {
const [aoMap,map,displacementMap,metalnessMap,normalMap,roughnessMap] = useTexture([
  "WoodFloor043_1K_AmbientOcclusion.jpg","WoodFloor043_1K_Color.jpg","WoodFloor043_1K_Displacement.jpg","WoodFloor043_1K_Metalness.jpg","WoodFloor043_1K_Normal.jpg","WoodFloor043_1K_Roughness.jpg"
  ])

  return(
    <mesh rotation={[-Math.PI/2, 0 , 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshPhysicalMaterial
            aoMap={aoMap}
            map={map}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementScale={0.1}
        />
    </mesh>
  )
}