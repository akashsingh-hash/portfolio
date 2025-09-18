import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Download, Github, Linkedin } from 'lucide-react';
import * as random from 'maath/random';


const StarField = () => {
  const ref = useRef<any>();
  const sphere = useMemo(
    () => Float32Array.from(random.inSphere(new Float32Array(2000), { radius: 1.5 })),
    []
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const RotatingCube = () => {
  const meshRef = useRef<any>();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial wireframe color="#ff00ff" />
    </mesh>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
          <RotatingCube />
        </Canvas>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="hi-text">Hi, I'm</span>
              <span className="name-responsive block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Akash Singh
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
              Frontend Developer (React) | Aspiring ML Engineer
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Frontend engineer passionate about building accessible, performant UIs in React/JS. 
            250+ DSA problems solved, 9+ CGPA maintained, and multiple hackathon wins including 
            VocalDocs and Blood Bond.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="https://drive.google.com/file/d/1edjYJW3_FQUmE_oqVcQxhw1oVgpQdfxo/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/akashsingh-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Github size={20} />
                GitHub
              </a>
              
              <a
                href="https://www.linkedin.com/in/akashsingh0810/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;