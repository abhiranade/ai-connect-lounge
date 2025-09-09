import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Individual node component
const NetworkNode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial 
        color="#00bfff" 
        transparent 
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
};

// QR Code placeholder component
const QRCode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5 + position[1]) * 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[0.3, 0.3]} />
      <meshBasicMaterial 
        color="#ff00ff" 
        transparent 
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
};

// Connection lines component
const ConnectionLines = ({ nodes }: { nodes: [number, number, number][] }) => {
  const linesRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      const start = new THREE.Vector3(...nodes[i]);
      const end = new THREE.Vector3(...nodes[i + 1]);
      connections.push({ start, end });
    }
    return connections;
  }, [nodes]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, index) => {
        const direction = new THREE.Vector3().subVectors(line.end, line.start);
        const length = direction.length();
        const midpoint = new THREE.Vector3().addVectors(line.start, line.end).multiplyScalar(0.5);
        
        return (
          <mesh key={index} position={midpoint.toArray()}>
            <cylinderGeometry args={[0.002, 0.002, length]} />
            <meshBasicMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

// Main scene component
const NetworkScene = () => {
  // Generate random positions for nodes and QR codes
  const nodePositions = useMemo(() => {
    return Array.from({ length: 15 }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
    ] as [number, number, number]);
  }, []);

  const qrPositions = useMemo(() => {
    return Array.from({ length: 8 }, () => [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 2,
    ] as [number, number, number]);
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      {/* Render nodes */}
      {nodePositions.map((position, index) => (
        <NetworkNode key={`node-${index}`} position={position} />
      ))}
      
      {/* Render QR codes */}
      {qrPositions.map((position, index) => (
        <QRCode key={`qr-${index}`} position={position} />
      ))}
      
      {/* Render connection lines */}
      <ConnectionLines nodes={nodePositions.slice(0, 8)} />
    </>
  );
};

// Main component
const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <NetworkScene />
      </Canvas>
    </div>
  );
};

export default NetworkBackground;