import React from "react"
import { useTexture } from '@react-three/drei'
import { useThree } from "@react-three/fiber"
import { SRGBColorSpace } from "three"

export default function Background () {
    const { scene } = useThree()
    const backTexture = useTexture('/stars.jpg')

    backTexture.colorSpace = SRGBColorSpace
    
    // Set background to use the specified tecture
    scene.background = backTexture
    return null
}