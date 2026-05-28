import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = async (): Promise<GLTF> => {
    const encryptedBlob = await decryptFile("/models/character.enc?v=2", "MyCharacter12");
    const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

    return new Promise<GLTF>((resolve, reject) => {
      loader.load(
        blobUrl,
        (gltf) => {
          const character = gltf.scene;

          renderer
            .compileAsync(character, camera)
            .then(() => {
              character.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                  const mesh = child as THREE.Mesh;

                  // Change clothing colors to match site theme
                  if (mesh.material) {
                    if (mesh.name === "BODY.SHIRT") {
                      const newMat = (mesh.material as THREE.Material)
                        .clone() as THREE.MeshStandardMaterial;
                      newMat.color = new THREE.Color("#8B4513");
                      mesh.material = newMat;
                    } else if (mesh.name === "Pant") {
                      const newMat = (mesh.material as THREE.Material)
                        .clone() as THREE.MeshStandardMaterial;
                      newMat.color = new THREE.Color("#000000");
                      mesh.material = newMat;
                    }
                  }

                  mesh.castShadow = true;
                  mesh.receiveShadow = true;
                  mesh.frustumCulled = false;
                  if (Array.isArray(mesh.material)) {
                    mesh.material.forEach((m) => (m.needsUpdate = true));
                  } else {
                    mesh.material.needsUpdate = true;
                  }
                }
              });

              URL.revokeObjectURL(blobUrl);
              dracoLoader.dispose();
              resolve(gltf);
            })
            .catch((error) => {
              dracoLoader.dispose();
              URL.revokeObjectURL(blobUrl);
              reject(error);
            });
        },
        undefined,
        (error) => {
          dracoLoader.dispose();
          URL.revokeObjectURL(blobUrl);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
