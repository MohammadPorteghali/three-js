<template>
  <div></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

export default {
  setup() {
    // debug
    const gui = new GUI();
    // debug folders
    const materialDebugger = gui.addFolder("Material");
    const cubeDebugger = gui.addFolder("Cube");

    /**
     * Base
     */
    // Canvas
    const canvas = document.getElementById("animated-cube");

    // Scene
    const scene = new THREE.Scene();

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 0.5);
    light.position.x = 0;
    light.position.y = 3;
    light.position.z = 4;
    scene.add(light);

    // material
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.5;
    material.roughness = 0.5;

    // debug
    materialDebugger.add(material, "metalness").min(0).max(1).step(0.01);
    materialDebugger.add(material, "roughness").min(0).max(1).step(0.01);
    materialDebugger.addColor(material, "color");

    let object;

    /**
     * cube
     */
    object = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), material);
    object.position.set(0, 0, 0);
    scene.add(object);

    // debug
    cubeDebugger.add(object.position, "y", -3, 3, 0.01, "red cube Y");
    cubeDebugger.add(object.position, "x", -3, 3, 0.01, "red cube X");
    cubeDebugger.add(object.position, "z", -3, 3, 0.01, "red cube Z");
    cubeDebugger.add(object, "visible");
    cubeDebugger.add(material, "wireframe");

    /**
     * Sphere
     */
    object = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 16), material);
    object.position.set(-30, 0, 0);
    scene.add(object);

    /**
     * dodecahedron
     */
    object = new THREE.Mesh(new THREE.DodecahedronGeometry(10, 0), material);
    object.position.set(30, 0, 0);
    scene.add(object);

    /**
     * torus
     */
    object = new THREE.Mesh(new THREE.TorusGeometry(10, 3, 16, 100), material);
    object.position.set(0, 0, -30);
    scene.add(object);

    /**
     * Octahedron
     */
    object = new THREE.Mesh(new THREE.OctahedronGeometry(10, 0), material);
    object.position.set(30, 0, -30);
    scene.add(object);

    /**
     * TorusKnot
     */
    object = new THREE.Mesh(
      new THREE.TorusKnotGeometry(7, 1.5, 100, 16),
      material
    );
    object.position.set(-30, 0, -30);
    scene.add(object);

    /**
     * LatheGeometry
     */
    object = new THREE.Mesh(new THREE.RingGeometry(11, 5, 32), material);
    object.position.set(30, 0, 30);
    scene.add(object);

    /**
     * PlaneGeometry
     */
    object = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), material);
    object.position.set(0, 0, 30);
    scene.add(object);

    /**
     * TetrahedronGeometry
     */
    object = new THREE.Mesh(new THREE.TetrahedronGeometry(10, 0), material);
    object.position.set(-30, 0, 30);
    scene.add(object);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      1,
      2000
    );
    camera.position.y = 90;
    camera.position.z = 70;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // object.rotation.y = 0.2 * elapsedTime;
      // object.rotation.x = 0.3 * elapsedTime;

      scene.traverse(function (object) {
        if (object.isMesh === true) {
          object.rotation.x = elapsedTime * 0.2;
          object.rotation.y = elapsedTime * 0.3;
        }
      });

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  },
};
</script>
