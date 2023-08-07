import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/phonecase_text.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.Object_3.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        position={[2,0,0]}
        rotation={[4.75,0,0]}
      >

        {snap.isFullTexture && (
          <Decal 
            position={[-2, -0.5, 0.15]}
            rotation={[1.5, 0, 0]}
            scale={4}
            map={fullTexture}
            
          />
        )}
        {snap.isLogoTexture && (
          <Decal 
            position={[-2, 0, 0.15]}
            rotation={[1, 0, 0]}
            scale={0.75}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
            
          />
          
        )}
        
        
        
      </mesh>
    </group>
  )
}

export default Shirt