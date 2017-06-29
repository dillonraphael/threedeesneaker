(function() {

var scene, camera, renderer;
var geometry, material, mesh, sneaker, sneakerTwo;

init();
animate();

function init() {

    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

        var ambient = new THREE.AmbientLight( 0x444444 );
                scene.add( ambient );

    camera = new THREE.PerspectiveCamera( 3, WIDTH / HEIGHT, 1, 20000 );
    camera.position.z = 1000;



    window.addEventListener('resize', function() {
      var WIDTH = window.innerWidth,
          HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });

    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );


    // prepare loader and load the model
    var oLoader = new THREE.OBJMTLLoader();
    oLoader.load('mobilemodel/sneaker.obj', 'mobilemodel/sneaker.mtl', function(object) {

      object.scale.set(1, 1, 1);
      object.rotation.y = 600;
      object.rotation.z= 600;
      sneaker = object;
      scene.add(sneaker);
    });





        var oLoaderTwo = new THREE.OBJMTLLoader();
    oLoaderTwo.load('mobilemodel/sneaker.obj', 'mobilemodel/sneaker.mtl', function(object) {

      object.scale.set(1, 1, 1);
      object.rotation.y = 100;
      object.rotation.z= 100;
      object.position.z= 200;
      object.position.y=10;
      object.position.x=10;
      sneakerTwo = object;
      scene.add(sneakerTwo);
    });





    renderer = new THREE.WebGLRenderer();
    renderer.setSize( WIDTH, HEIGHT );

    renderer.setClearColor(0x333F47, 1);


    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    sneaker.rotation.x += 0.01;
    sneaker.rotation.y += 0.02;
    sneakerTwo.rotation.x += 0.01;
    sneakerTwo.rotation.y += 0.02;


    renderer.render( scene, camera );

}

})();