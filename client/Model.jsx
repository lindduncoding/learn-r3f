import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Model () {
    model = useLoader(GLTFLoader, '/duck.gltf')
    return (
        <primitive object={model.scene} />
    )
}