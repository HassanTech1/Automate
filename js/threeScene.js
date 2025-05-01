
// Create a three.js scene with a floating 3D object and mouse interaction
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('three-canvas')) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('three-canvas').appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const spotLight = new THREE.SpotLight(0xff6600, 1);
  spotLight.position.set(10, 10, 10);
  spotLight.angle = 0.15;
  spotLight.penumbra = 1;
  scene.add(spotLight);

  const pointLight = new THREE.PointLight(0xff6600, 0.5);
  pointLight.position.set(-10, -10, -10);
  scene.add(pointLight);

  // Main torus object
  const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 64);
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0xff8c00,
    metalness: 0.5,
    roughness: 0.2,
    emissive: 0xff8c00,
    emissiveIntensity: 0.3
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  scene.add(torus);

  // Center sphere
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    metalness: 0.7,
    roughness: 0.3,
    envMapIntensity: 0.8,
    transparent: true,
    opacity: 0.8
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  // Create floating particles
  const particles = [];
  const particlesData = [
    { position: [1.5, 0.5, -1], size: 0.2, color: 0xff8c00, speed: 0.5 },
    { position: [-1.8, -0.2, 0.5], size: 0.15, color: 0xffae42, speed: 0.7 },
    { position: [0.8, -1.5, 1], size: 0.25, color: 0xff6600, speed: 0.3 },
    { position: [-0.5, 1.2, -0.5], size: 0.18, color: 0xff6600, speed: 0.6 }
  ];

  particlesData.forEach(data => {
    const particleGeometry = new THREE.SphereGeometry(data.size, 32, 32);
    const particleMaterial = new THREE.MeshStandardMaterial({
      color: data.color,
      roughness: 0.4,
      emissive: data.color,
      emissiveIntensity: 0.5
    });
    
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(...data.position);
    particle.userData.speed = data.speed;
    scene.add(particle);
    particles.push(particle);
  });

  // Group all objects for easier manipulation
  const objectGroup = new THREE.Group();
  objectGroup.add(torus);
  objectGroup.add(sphere);
  particles.forEach(particle => objectGroup.add(particle));
  scene.add(objectGroup);

  // Position camera
  camera.position.z = 6;

  // Mouse tracking
  const mouse = {
    x: 0,
    y: 0
  };

  document.addEventListener('mousemove', (event) => {
    // Normalize mouse coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    // Rotate torus
    torus.rotation.x += 0.002;
    torus.rotation.y += 0.003;

    // Pulsing effect for sphere
    const scale = 1 + Math.sin(time * 2) * 0.05;
    sphere.scale.set(scale, scale, scale);

    // Floating movement for the group
    objectGroup.position.y = Math.sin(time * 0.5) * 0.2;
    objectGroup.rotation.z = Math.sin(time * 0.3) * 0.1;

    // Subtle rotation based on mouse position
    objectGroup.rotation.y += (mouse.x * 0.01 - objectGroup.rotation.y) * 0.05;
    objectGroup.rotation.x += (mouse.y * 0.01 - objectGroup.rotation.x) * 0.05;

    // Individual particle animations
    particles.forEach(particle => {
      particle.rotation.x += particle.userData.speed * 0.02;
      particle.rotation.y += particle.userData.speed * 0.01;
      particle.position.y += Math.sin(time * particle.userData.speed) * 0.002;
    });

    renderer.render(scene, camera);
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Start animation
  animate();
});
