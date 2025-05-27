import React, { useEffect } from "react"
import { useThree } from '@react-three/fiber'
import { AudioListener, Audio, AudioLoader } from "three"

export default function Music () {
    // Audio Listener is attached to the camera
    const { camera } = useThree()

    useEffect(() => {
        const listener = new AudioListener()
        camera.add(listener)

        const sound = new Audio(listener)

        const audioLoader = new AudioLoader()
        
        // Set the buffer to the sound
        audioLoader.load('/unfortunate-events.m4a', (buffer) =>{
            sound.setBuffer(buffer)

            const handleClick = () => {
                sound.play()
            }
            window.addEventListener('click', handleClick)
        })
    }, [])
}