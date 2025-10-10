                                                                  
let imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10;
let imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19;

let imagenes = [];
let imagenahora = 0;

let poly = [  //diamante 1
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

let song;
let empezar;
let explosion;
let fuego;

function preload() {
  imagen1 = loadImage("assets/image1.jpeg"); //0
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
  song = loadSound('assets/song.mp3');
  explosion = loadSound('assets/explocion.mp3');
  fuego = loadSound('assets/fuego.mp3');
}

function setup() {
  createCanvas(640, 480);
  textFont('Comic Sans MS');
  textSize(18);
  fill(255);
  stroke(0);
  song.setLoop(true);
  imagenes = [
    imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9,
    imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17,
    imagen18, imagen19
  ];
}
let efecto1 = false;
let efecto2 = false;
function draw() {
  background(0);
  if (imagenes[imagenahora]) image(imagenes[imagenahora], 0, -50, 640, 600);

  // textos de cada pantalla usando if / else if
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);

  if (imagenahora === 0) {
    if (dentro(mouseX - width/2, mouseY - height/2, poly)) {
    fill(100, 100, 255, 150); // color azul semitransparente cuando está hover
  } else {
    fill(200, 200, 255, 100); // color normal
  }

    fill(255);
    textSize(20);
    text("En Pildover, Victor crea un Cristal que amplifica el poder Hextech", width / 2, 30);
    textSize(10);
    text("Para continuar en las pantallas sin desciciones presiona 'd'", width / 2, height - 20); 
    text("Presiona 'p' para pausar la musica y 'm' para empezarla", width / 2, height - 5);

  } else if (imagenahora === 1) {
    noStroke();
    fill(0, 0, 0, 200);
    rect(width / 2 - 530 / 2, 25 - 40 / 2, 530, 40);
    textSize(20);
    fill(255);
    text("Elegir Personaje con el que quieras continuar la Historia", width / 2, 30);
    if (mouseX < width / 2) {
    fill(0, 0, 255, 100);
    rect(0, 0, width / 2, height); 
  } else {
    fill(255, 0, 0, 100); 
    rect(width / 2, 0, width / 2, height); 
  }

    textSize(22);
    fill(255);
    text("Jinx", width / 4, height - 40);

    textSize(22);
    fill(255);    
    text("Vi", (3 * width) / 4, height - 40);

  } else if (imagenahora === 3) {
    textAlign(RIGHT, BOTTOM);
    textSize(22);
    text("Jinx se entera de la noticia del cristal y decide ir a Pildover", width - 20, height - 20);

  } else if (imagenahora === 4) {
    textAlign(CENTER);
    textSize(22);
    fill(0);
    text("Jinx roba el cristal?", width / 2, height - 120);
    textSize(22);
    sombra(20, height-80, 180, 50);
    sombra(width -200, height-80, 180, 50);
    fill(255);
    text("NO", 110, height - 55);
    text("SI", width - 110, height - 55);

  } else if (imagenahora === 12) {
    if (!efecto1, !efecto2) {
      explosion.play();
      fuego.play();
      efecto1 = true;
      efecto2 = true;
    }
    noStroke();
    fill(0, 0, 0, 200);
    rect(width - 590 - 20, 25, 600, 40); 
    textAlign(RIGHT, TOP);
    textSize(20);
    sombra(width -590 - 20, 25, 600, 40);
    fill(255);
    text("Jinx lanza el cristal. El cual explota y destruye todo Pildover", width - 20, 40);
    textAlign(CENTER);
    textSize(22);
    text("FIN", width / 2, height - 50);

  } else if (imagenahora === 5) {
    textAlign(LEFT, BOTTOM);
    noStroke();
    fill(0, 0, 0, 200);
    rect(15, height - 45, 360, 40);
    textSize(20);
    fill(255);
    text("Usa el cristal para amplificar su arma", 20, height - 20);

  } else if (imagenahora === 6) {
    textAlign(LEFT, TOP);
    text("Hablar con Vi?", 20, 30);
    textAlign(RIGHT, BOTTOM);
    text("Pelear contra Vi?", width - 20, height - 20);

  } else if (imagenahora === 7) {
    textAlign(RIGHT, TOP);
    fill(0);
    text("Vi intenta detener la pelea...", width - 20, 30);

  } else if (imagenahora === 8) {
    textAlign(RIGHT, TOP);
    textSize(20);
    text("para decirle a Jinx lo mucho que la quieren\ne intentar que vuelvan a ser como antes", width - 20, 30);

  } else if (imagenahora === 9) {
    textAlign(RIGHT, TOP);
    textSize(18);
    text("Gracias a sus palabras, logra convencer a Jinx y se abrazan.", width - 20, 30);
    textAlign(CENTER);
    textSize(22);
    sombra(230, height-80, 180, 50);
    fill(255);
    text("FIN", width / 2, height - 50);

  } else if (imagenahora === 10) {
    // sin texto

  } else if (imagenahora === 11) {
    textAlign(CENTER, TOP);
    textSize(22);
    text("Jinx termina perdiendo la pelea, y queda gravemente herida", width / 2, 30);
    textAlign(CENTER);
    textSize(22);
    sombra(230, height-80, 180, 50);
    fill(255);
    text("FIN", width / 2, height - 50);

  } else if (imagenahora === 2) {
    textAlign(RIGHT, BOTTOM);
    textSize(18);
    text("Vi se entera que Jinx va hacia el cristal entonces decide ir ella tambien", width - 20, height - 20);

  } else if (imagenahora === 13) {
    if (mouseX < width / 2) {
    fill(0, 0, 255, 100);
    rect(0, 0, width / 2, height);
    }
    fill(255);
    textAlign(CENTER, TOP);
    text("Vi llega a pildover y encuentra a Jinx junto al cristal", width / 2, 30);

    textAlign(CENTER, CENTER);
    textSize(18);
    text("Va hacia el cristal ->", width / 2, height / 2 - 30);

    textAlign(LEFT, TOP);
    textSize(18);
    text("Va hacia Jinx\n¿qué va a hacer?", 40, height - 130, 300);

  } else if (imagenahora === 17) {
    textAlign(RIGHT, BOTTOM);
    textSize(20);
    text("Vi se abalanza bruscamente hacia el Cristal", width - 20, height - 20);

  } else if (imagenahora === 18) {
    if (!efecto1, !efecto2) {
      explosion.play();
      fuego.play();
      efecto1 = true;
      efecto2 = true;
    }
    noStroke();
    fill(0, 0, 0, 200);
    rect(width - 380 - 20, 20, 390, 90);
    textAlign(RIGHT, TOP);
    fill(255);
    textSize(20);
    text("Al agarrar el cristal, no puede romperlo\ncon sus guantes y este explota\ndestruyendo todo Pildover", width - 20, 30);
    textAlign(CENTER);
    sombra(230, height-80, 180, 50);
    fill(255);
    textSize(22);
    text("FIN", width / 2, height - 50);

  } else if (imagenahora === 14) {
    textSize(20);
    fill(0, 0, 0, 200);
    rect(width / 2 - 460 / 2, 20, 460, 60);
    fill(255);
    textAlign(CENTER, TOP);
    text("Vi se acerca lentamente,\nquedando frente a frente con Jinx y el Cristal", width / 2, 30);
    
    fill(0, 0, 0, 200);
    rect(width / 2 - 210 / 2, height / 2 - 40, 210, 40);
    fill(255);
    textAlign(CENTER, CENTER);
    text("¿Ir hacia el Cristal?", width / 2, height / 2 - 20);

    fill(128, 128, 128, 100);
    sombra(35, height - 140, 150, 40);
    rect(35, height - 140, 150, 40);
    fill(255);
    textAlign(LEFT, TOP);
    text("¿Ir hacia Jinx?", 40, height - 130);

  } else if (imagenahora === 16) {
    noStroke();
    fill(0, 0, 0, 200);
    rect(width - 550 - 20, 20, 560, 40);

    textAlign(RIGHT, TOP);
    fill(255);
    textSize(20);
    text("Vi agarra el cristal y lo destruye con sus guantes Hextech", width - 20, 30);
    textAlign(CENTER);
    textSize(22);
    sombra(230, height-80, 180, 50);
    fill(255);
    text("FIN", width / 2, height - 50);

  } else if (imagenahora === 15) {
    textAlign(RIGHT, TOP);
    textSize(20);
    text("Vi abraza a Jinx y trata de convencerla para volver con ella...", width - 20, 30);

  } 

  noFill();
  stroke(0);
  if (imagenahora === 0) { 
    translate(width/2, height/2);
    if (dentro(mouseX - width/2, mouseY - height/2, poly)) {
    fill(0, 255, 255, 150); 
  } else {
    fill(0, 0, 0, 0); 
  }
    beginShape();
    for (let v of poly) vertex(v.x, v.y);
    endShape(CLOSE);
  }
  if ([4].includes(imagenahora)) {
    stroke(255, 0, 0);
    rect(width -200, height-80, 180, 50);
    rect(20, height-80, 180, 50);
  }
  if ([9, 11, 12, 16, 18].includes(imagenahora)) {
    stroke(255, 0, 0);
    rect(230, height-80, 180, 50);
  }
  if ([14].includes(imagenahora)) {
    translate(width/2, height/2);
    if (dentro(mouseX - width/2, mouseY - height/2, poly3)) {
    fill(0, 255, 255, 150); 
  } else {
    fill(0, 0, 0, 0); 
  }
    stroke(0);
    beginShape();
    for (let v of poly3) vertex(v.x, v.y);
    endShape(CLOSE);
  }
  if ([13].includes(imagenahora)){
    translate(width/2, height/2);
    if (dentro(mouseX - width/2, mouseY - height/2, poly2)) {
    fill(0, 255, 255, 150); 
  } else {
    fill(0, 0, 0, 0); 
  }
    stroke(0);
    beginShape();
    for (let v of poly2) vertex(v.x, v.y);
    endShape(CLOSE);
  }
}

function mousePressed() {
  if (!empezar) {
    userStartAudio(); // Necesario para audio en navegador
    song.loop();       // Empieza a reproducir y se repite
    empezar = true;
  }

  if (imagenahora === 0) {
    if (dentro(mouseX - width/2, mouseY - height/2, poly)) imagenahora = 1;
  } 
  else if (imagenahora === 1) {
    if (mouseX < width/2) imagenahora = 3; 
    else imagenahora = 2;
  }
  else if (imagenahora === 4){
    if (dentro2(mouseX, mouseY, width-200, height-80, 180, 50)) imagenahora = 5;
    else if (dentro2(mouseX, mouseY, 20, height-80, 180, 50)) imagenahora = 12;
  }
  else if (imagenahora === 6){
    if (mouseY < height/2) imagenahora = 7;
    else imagenahora = 10;
  }
  else if ([9, 11, 16].includes(imagenahora)){
    if (dentro2(mouseX, mouseY, 230, height-80, 180, 50)) imagenahora = 0;
  }
  else if ([12, 18].includes(imagenahora)){
    if (dentro2(mouseX, mouseY, 230, height-80, 180, 50)) imagenahora = 0;
  }
  else if (imagenahora === 13){
    if (dentro(mouseX - width/2, mouseY - height/2, poly2)) imagenahora = 17;
    else if (mouseX < width/2) imagenahora = 14;
  }
  else if (imagenahora === 14){
    if (dentro(mouseX - width/2, mouseY - height/2, poly)) imagenahora = 16;
    else if (mouseX < 200) imagenahora = 15;
  }
}

function keyPressed() {
  if (key === "d") {
    if (imagenahora === 3) imagenahora = 4;
    else if (imagenahora === 5) imagenahora = 6;
    else if (imagenahora === 7) imagenahora = 8;
    else if (imagenahora === 8) imagenahora = 9;
    else if (imagenahora === 10) imagenahora = 11;
    else if (imagenahora === 2) imagenahora = 13;
    else if (imagenahora === 15) imagenahora = 9;
    else if (imagenahora === 17) imagenahora = 18;
    
  }
  if (empezar) {
    if (key === "p") { //pausar
      song.pause();
    } else if (key === "m") { // musica
      song.play();
    }
  }
}

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

function dentro2(x, y, rectax, rectay, rectaw, rectah) {
  return x >= rectax && x <= rectax + rectaw && y >= rectay && y <= rectay + rectah;
}

function sombra(rectax, rectay, rectaw, rectah) {
  if (dentro2(mouseX, mouseY, rectax, rectay, rectaw, rectah)) {
    fill(0, 0, 0, 150); 
    noStroke();
    rect(rectax, rectay, rectaw, rectah);
  }
}