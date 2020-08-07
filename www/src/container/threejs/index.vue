<template>
  <div>
    <h1>
      Example for vue using binding three.js
    </h1>
    <canvas ref="canvas" height="200" width="200"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  mounted() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
    this.renderer.setSize(400, 400);
    // renderer.setClearColor(0xeeeeee, 1);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;

    var animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  },
};
</script>
<style module></style>
