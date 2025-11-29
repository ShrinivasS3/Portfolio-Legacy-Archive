/* eslint-disable react/no-unknown-property */
import "./hero.scss"
import { motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useTexture, useGLTF } from '@react-three/drei'
import { easing } from 'maath'

function Computer(props) {
  const computer = "./assets/computer.glb"
  const tex = "./assets/Texture.png"
  const texture = useTexture(tex)
  texture.flipY=false
  const mesh = useRef()
  const {nodes} = useGLTF(computer)
  const [dummy] = useState(() => new THREE.Object3D())
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x*1.5, state.pointer.y, 10)
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
  })
  return (
    // eslint-disable-next-line react/no-unknown-property
    <mesh ref={mesh} geometry={nodes.Object_4.geometry} {...props} >
        <meshBasicMaterial map={ texture }/>
    </mesh>
  )
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-480%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
    return (
      <>
      <div className="hero">
        <div className="name">
          <h1 className="fname">
            <motion.span className="realf"
              initial={{opacity:1, y:240}}
              animate={{opacity:1, y:0}}
              transition={{duration:1}}>
                SHRINIVAS
            </motion.span>
          </h1>
          <h1 className="lname">
            <motion.span className="reall"
              initial={{opacity:1, y:240}}
              animate={{opacity:1, y:0}}
              transition={{duration:1}}>
                SESADRI
            </motion.span>
          </h1>
        </div>
        {/* <ReactTypingEffect
          text={["Shrinivas Sesadri"]}
          speed={100}
          typingDelay={1000}
          eraseDelay={1000}
          eraseSpeed={100}
          cursorRenderer={cursor => <h3 className="cursor">{cursor}</h3>}
          // eslint-disable-next-line no-unused-vars
          displayTextRenderer={(text, i) => {
            return (<p className="name">{text}</p>)}}
        /> */}
      </div>
      <motion.div className="gif-container"
      initial={{opacity:0.95, y:50}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}>
        <motion.div className="role"
          initial="initial"
          animate="animate"
          variants={sliderVariants}
          >
            <span>Researcher Artist Photographer Musician</span>
        </motion.div>
        <Canvas flat className="macgif" camera={{ position: [0, 0.1, 3] }}>
            <ambientLight />
            <directionalLight position={[10, 10, 10]} />
            <Computer />
        </Canvas>
      </motion.div>
      </>
    );
  };

export default Hero;