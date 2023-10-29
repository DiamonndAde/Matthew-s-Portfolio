import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={1} />
      {/* <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive 
        object={computer.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 500px)')

  //   setIsMobile(mediaQuery.matches)

  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches)
  //   }

  //   mediaQuery.addEventListener('change', handleMediaQueryChange)

  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange)
  //   }
  // }, [])

  return (
    <Canvas
      frameLoop='demand'
      shadows
      gl={{preserveDrawingBuffer: true}}
      camera={{position: [20, 3, 5], fov: 25}}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
        />
          <Computers/>
          {/* <Computers isMobile={isMobile}/> */}
        </Suspense>
      
      {/* <Preload all /> */}
    </Canvas>
  )
}

export default ComputersCanvas