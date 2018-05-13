class SudaKorogashi {

  constructor() {
    // スダの数
    this.sudaNum = 60;
    this.sudaList = [];

    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;

    console.log(this.canvasWidth)
    console.log(this.canvasHeight)

    this.near = 1;
    this.far = 1000;

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);

    const sudaLayer = document.getElementById("sudaLayer");

    console.log(sudaLayer)

    sudaLayer.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.canvasWidth / this.canvasHeight, this.near, this.far);
    this.camera.position.z = this.far;

    for (let i = 0; i < this.sudaNum; i++) {
      const suda = new Suda();
      suda.view.position.z = (Math.random() - 0.5) * 5;
      this.sudaList.push(suda);
      this.scene.add(suda.view);
    }

    const light = new THREE.AmbientLight(0xffffff, 1.0);
    light.position.set(1, 0, 1).normalize();
    this.scene.add(light);

    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);

    for (let i = 0; i < this.sudaNum; i++) {
      const suda = this.sudaList[i];

      suda.view.position.x += suda.vx;
      suda.view.position.y += suda.vy;
      suda.view.position.z += suda.vz;

      suda.view.rotation.x += suda.vr1;
      suda.view.rotation.y += suda.vr2;
      suda.view.rotation.z += suda.vr3;

      if (Math.abs(suda.view.position.x) > this.canvasWidth / 2) suda.vx *= -1;
      if (Math.abs(suda.view.position.y) > this.canvasHeight / 2) suda.vy *= -1;

      if (suda.view.position.z <= this.near) {
        suda.vz = Math.abs(suda.vz);
      }
      else if (suda.view.position.z >= this.far) {
        suda.vz = -Math.abs(suda.vz);
      }
    }

    requestAnimationFrame(() => this.render());

  }
}

class Suda {

  constructor() {
    const textureLoader = new THREE.TextureLoader();

    const random = Math.random();

    let imagePath;

    if (random > 2 / 3) imagePath = "suda.jpg";
    else if (random > 1 / 3) imagePath = "suda2.jpg";
    else imagePath = "suda3.jpg";

    const texture = textureLoader.load(imagePath);
    const geometry = new THREE.BoxGeometry(80, 80, 80);

    const material = new THREE.MeshPhongMaterial({map: texture});
    this.view = new THREE.Mesh(geometry, material);

    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.vz = (Math.random() - 0.5) * 20;

    this.vr1 = (Math.random() - 0.5) * 0.3;
    this.vr2 = (Math.random() - 0.5) * 0.3;
    this.vr3 = (Math.random() - 0.5) * 0.3;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SudaKorogashi();
});