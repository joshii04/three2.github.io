import * as THREE from 'three';

//set the scence

const scene = new THREE.Scene()// this is a scene

//create the shape

const geometry = new THREE.BoxGeometry(/*x y z planes*/ 1.5, 0.5, 1.5)
const material = new THREE.MeshBasicMaterial({color: 'white'})
//mesh is combination of geom and materials
const mesh = new THREE.Mesh(geometry, material)//mesh together
//const is better for mem mgt

//add the scence
scene.add(mesh)

console.log(mesh.position.length())//get the distance from console

//give the position of the shape
mesh.position.set(0.1, 0.4, 0.4)

//give the siezes of area of display
const sizes={
    width: 600,
    height: 400
}

//set the camera

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height) 
//specify the fov and the aspect ratio
//set how far away the camera is
camera.position.z = 4
//add camera to scene
scene.add(camera)
console.log(mesh.position.distanceTo(camera.position))
//grab the canvas via query select

const canvas = document.querySelector('.webgl')
console.log(canvas)//check the canvas has loaded in the html
//render the canvas
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//resize the renderer and the canvas
renderer.setSize(sizes.width, sizes.height)
//by default you can only see one side of the shape


//time

let time = Date.now() // this is an in built date function

const tick = () =>{ //point and make promise to
    //take the time value
    const currentTime = Date.now()
    //now the delta time
    const deltaTime = currentTime - time
    time = currentTime

    //rotate the shape
    mesh.rotation.x += 0.002 * deltaTime // so it doesnt matter the fps 
    mesh.rotation.y += 0.002 * deltaTime

    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick) //itterate 
}

//call the function 

tick()