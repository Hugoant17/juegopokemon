var juego=new Phaser.Game(370,550,Phaser.AUTO, 'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var estadoPrincipal={
    preload: function (){
        juego.load.image('fondo','img/bg2.png');
        //juego.load.image('pajaro','img/pajaro1.png');
        //juego.load.spritesheet('pajaros','img/pajaro.png',43,30); //aqui dividimos el sprite sheet
        //juego.load.spritesheet('pajaros','img/ave.png',97,120);

        //persona
        //juego.load.spritesheet('personas','img/persona.png',64,64);

        juego.load.spritesheet('personas','img/pokemon.png',68,72);
    },
    create: function (){

        fondoJuego=juego.add.tileSprite(0,0,800,650,'fondo');
        //flappy=juego.add.sprite(juego.width/2,juego.height/2,'pajaros');
        // lo de arriba es para que salga a la mitad de la pantalla

        persona=juego.add.sprite(juego.width/2,juego.height/2,'personas');
        persona.anchor.setTo(0.5);
        /*
        persona.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true); //para que avance arriba
        persona.animations.add('izquierda',[9,10,11,12,13,14,15,16,17],10,true); //para que avance izquierda
        persona.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true); //para que avance izquierda
        persona.animations.add('derecha',[27,28,29,30,31,32,33,34,35],10,true); //para que avance izquierda
        */
        persona.animations.add('abajo',[0,1,2,3],10,true); //para que avance arriba
        persona.animations.add('izquierda',[4,5,6,7],10,true); //para que avance izquierda
        persona.animations.add('derecha',[8,9,10,11],10,true); //para que avance izquierda
        persona.animations.add('arriba',[12,13,14,15],10,true); //para que avance izquierda
       


        //flappy.frame=1;
        //flappy.animations.add('vuelo',[0,1,2],10,true); //LAS DIMENSIONES VA DE ACUERDO AL SPRITESHEET

        teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        juego.physics.startSystem(Phaser.Physics.ARCADE);
    },
    update: function (){
        fondoJuego.tilePosition.x-=1;

        if(teclaDerecha.isDown){
            persona.position.x+=2;
            persona.animations.play('derecha');
        }else if(teclaIzquierda.isDown){
            persona.position.x-=2;
            persona.animations.play('izquierda');
        }else if(teclaArriba.isDown){
            persona.position.y-=2;
            persona.animations.play('arriba');
        }else if(teclaAbajo.isDown){
            persona.position.y+=2;
            persona.animations.play('abajo');
        }
    },
    
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');