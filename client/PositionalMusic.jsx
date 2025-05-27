import React, { useEffect, useRef } from "react"
import { useThree } from '@react-three/fiber'
import { AudioListener, PositionalAudio, AudioLoader } from "three"
import { useGLTF } from "@react-three/drei"

export default function PositionalMusic () {
    // Audio Listener is attached to the camera
    const { camera } = useThree()

    // Audioref
    const audioRef = useRef()

    // Turntable ref
    model = useGLTF('/turntable.gltf')
    // const group = useRef()
    // const { nodes, materials } = useGLTF('/turntable.gltf')

    useEffect(() => {
        const listener = new AudioListener()
        camera.add(listener)

        const sound = new PositionalAudio(listener)

        const audioLoader = new AudioLoader()
        
        // Set the buffer to the sound
        audioLoader.load('/unfortunate-events.m4a', (buffer) =>{
            sound.setBuffer(buffer)
            sound.setRefDistance(5)

            // Attach the positional sound to the audio ref
            audioRef.current = sound

            const handleClick = () => {
                sound.play()
            }
            window.addEventListener('click', handleClick)
        })
    }, [])

    return(
        <primitive object={model.scene} ref={audioRef} position={[10,10,10]} />
        // <mesh ref={audioRef} position={[0,0,2]}>
        //     <boxGeometry />
        //     <meshBasicMaterial />
        // </mesh>
    )
}