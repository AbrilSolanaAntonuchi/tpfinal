let imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10;
let imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19;

let imagenes = [];
let imagenahora = 0;

let poly = [  //diamante 1(chat me dejo saber que se llama poligono)
  {x: 0, y: -80},        
  {x: 70, y: -10},  
  {x: 60, y: 60},  
  {x: 0, y: 110},        
  {x: -60, y: 60}, 
  {x: -65, y: -10}
];

let poly2 = [ //diamante jinx
  {x: 145, y: -180},
  {x: 220, y: -50},
  {x: 205, y: 50},
  {x: 145, y: 140},
  {x: 80, y: 50},
  {x: 70, y: -50},
];
let poly3 = [ //diamante vi y jinx
  {x: -3, y: -90},
  {x: 65, y: 5},
  {x: 55, y: 82},
  {x: -5, y: 155},
  {x: -65, y: 85},
  {x: -70, y: 0},
];

function preload() {
  imagen1 = loadImage("assets/image1.jpeg"); //0 (pq sino pierdo el orden)
  imagen2 = loadImage("assets/image2.jpeg"); //1
  imagen3 = loadImage("assets/Vi.jpeg"); //2
  imagen4 = loadImage("assets/Jinx.jpeg"); //3
  imagen5 = loadImage("assets/jinx roba el cristal.jpg"); //4
  imagen6 = loadImage("assets/amplificar arma.jpg"); //5
  imagen7 = loadImage("assets/hablar o pelear.jpg"); //6
  imagen8 = loadImage("assets/hablar con vi.jpg"); //7
  imagen9 = loadImage("assets/ir con vi.jpg"); //8
  imagen10 = loadImage("assets/happy end.jpg"); //9
  imagen11 = loadImage("assets/jinx y vi pelea.jpg"); //10
  imagen12 = loadImage("assets/jinx herida-end.jpg"); //11
  imagen13 = loadImage("assets/jinx explota-end.jpg"); //12
  imagen14 = loadImage("assets/jinx cristal.png"); //13
  imagen15 = loadImage("assets/jinx y vi cristal.png"); //14
  imagen16 = loadImage("assets/convencer a jinx.jpg"); //15
  imagen17 = loadImage("assets/destruir el cristal-end.jpg"); //16
  imagen18 = loadImage("assets/lansarce.jpg"); //17 
  imagen19 = loadImage("assets/vi explota-end.jpg"); //18
}

function setup() {
  createCanvas(640, 480);
  noFill();
  imagenes = [
    imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9,
    imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17,
    imagen18, imagen19
  ];
}

function draw() {
  background(255);
  if (imagenes[imagenahora]){
    image(imagenes[imagenahora], 0, -50, 640, 600);
  }



  //los dibujos en cada imagen
  if (imagenahora === 0) { //primer diamante
    translate(width/2, height/2);
    stroke(0);
    fill(200, 200, 255, 100);
    beginShape();
    for (let v of poly) vertex(v.x, v.y);
    endShape(CLOSE);
  }

  if ([4].includes(imagenahora)) {
    stroke(255, 0, 0);
    noFill();
    rect(width -200, height-80, 180, 50); // derecha
    rect(20, height-80, 180, 50);        // izquierda
  }

  if ([9, 11, 12, 16, 18].includes(imagenahora)) {
    stroke(255, 0, 0);
    noFill();
    rect(230, height-80, 180, 50); // para volver a 0
  }

  if ([14].includes(imagenahora)) { //tercer diamante
    translate(width/2, height/2);
    stroke(0, 0, 255);
    fill(0, 0, 255, 100);
    beginShape();
    for (let v of poly3) vertex(v.x, v.y);
    endShape(CLOSE);
  }
  if ([13].includes(imagenahora)){ //segundo diamante
    translate(width/2, height/2);
    stroke(0, 0, 255);
    fill(0, 0, 255, 100);
    beginShape();
    for (let v of poly2) vertex(v.x, v.y);
    endShape(CLOSE);
  }
}

function mousePressed() { //de la imagen del cristal a la de elegir personaje
  if (imagenahora === 0) {
    if (dentro(mouseX - width/2, mouseY - height/2, poly)) imagenahora = 1;
  } 
  else if (imagenahora === 1) { //en la imagen de elegir personaje si jinx imagen 3 o vi imagen 2
    if (mouseX < width/2) imagenahora = 3; 
    else imagenahora = 2;
  }
  else if (imagenahora === 4){ //una vez pasada la imagen 3 con "d" imagen 4 donde se elije:
  if (dentro2(mouseX, mouseY, width-200, height-80, 180, 50)) {
    imagenahora = 5; // amplificar el arma
  } else if (dentro2(mouseX, mouseY, 20, height-80, 180, 50)) {
    imagenahora = 12; // tirar el cristal
  }
}
  else if (imagenahora === 6){ // se elije hablar o pelear con vi
    if (mouseY < height/2) imagenahora = 7; //hablar
    else imagenahora = 10; //pelear
  }
  else if (imagenahora === 9 || imagenahora === 11 || imagenahora === 12 ||  imagenahora === 16 || imagenahora === 18){
     if (dentro2(mouseX, mouseY, 230, height-80, 180, 50)) {
    imagenahora = 0; //estos son todas las imagenes donde tiene que estar el boton para volver a empezar
  }
  }
  else if (imagenahora === 13){ //eligiendo a vi, ahora tenes que decidir si tirarte a por el cristal o no
    if (dentro(mouseX - width/2, mouseY - height/2, poly2)) imagenahora = 17; //lanzarse por el cristal
    else if ( mouseX < width/2) imagenahora = 14; //acercarse a jinx
  }
  else if (imagenahora === 14){ //decidir si hablar con jinx o destruir el cristal
    if (dentro(mouseX - width/2, mouseY - height/2, poly)) imagenahora = 16; //destruir el cristal
    else if (mouseX < 200) imagenahora = 15; //hablar con jinx
  }
}

function keyPressed() {
  if (key === "d") {
    if (imagenahora === 3) imagenahora = 4; //de jinx a elegir si amplificar o no el arma
    else if (imagenahora === 5) imagenahora = 6; //de amplificar el arma a hablar o pelear con vi
    else if (imagenahora === 7) imagenahora = 8; //de hablar con vi a ir con vi
    else if (imagenahora === 8) imagenahora = 9; //de ir con vi al happy end
    else if (imagenahora === 10) imagenahora = 11; //de pelear con vi al final de jinx herida
    else if (imagenahora === 2) imagenahora = 13; // de vi a elegir si lanzarse por el cristal o no (me acabo de dar cuenta q no tengo ni idea como se escribe si lanzarse o lansarse, ayuda)
    else if (imagenahora === 15) imagenahora = 9; //de convencer a jinx al happy end
    else if (imagenahora === 17) imagenahora = 18; //de lanzarse a por el cristal a vi explota-end
  }
}

//para detectar si el mause esta en el poligono/diamante (me gusta mucho la palabra poligono ahora no se porque)
function dentro(x, y, diamante) {
  let adentro = false;
  for (let i = 0, j = diamante.length - 1; i < diamante.length; j = i++) {
    let xi = diamante[i].x, yi = diamante[i].y;
    let xj = diamante[j].x, yj = diamante[j].y;
    let mause = ((yi > y) !== (yj > y)) &&
                    (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (mause) adentro = !adentro;
  }
  return adentro;
}
//lo mismo pero para los rectangulos
function dentro2(x, y, rectax, rectay, rectaw, rectah) {
  return x >= rectax && x <= rectax + rectaw && y >= rectay && y <= rectay + rectah;
}