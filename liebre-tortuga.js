class dado{
    lanzar(){
        return Math.ceil(Math.random() * 100);
    }
}
class corredor{
    constructor(nombre){
        this.nombre = nombre;
        this.posicion = 0;
        this.dado = new dado;
    }
}

class Liebre extends corredor{
    constructor(nombre, posicion, dado){
        super({nombre, posicion, dado});
        this.nombre = nombre;
    }
    movimientos(){
        let lanzarDado = this.dado.lanzar()
        if(lanzarDado <= 20){
            this.posicion += 0;
        } else if (lanzarDado <= 40){
            this.posicion += 9; 
        } else if (lanzarDado <= 50){
            this.posicion -= 12;
        } else if (lanzarDado <= 85){
            this.posicion += 1;
        } else if (lanzarDado <= 100){
            this.posicion -= 2;
        }
    }
}

class Tortuga extends corredor{
    constructor(nombre, posicion, dado){
        super({nombre, posicion, dado})
        this.nombre = nombre;
    }
    movimientos(){
        let lanzarDado = this.dado.lanzar()
        if(lanzarDado <= 50){
            this.posicion += 3;
        } else if(lanzarDado <= 70){
            this.posicion -= 6;
        } else if(lanzarDado <= 100){
            this.posicion += 1;
        }
    }
}

let tortuga = new Tortuga('Willy');
let liebre = new Liebre('Jack')
while(tortuga.posicion < 90 && liebre.posicion < 90){
    tortuga.movimientos();
    liebre.movimientos();
    console.log(`${tortuga.nombre} se encuentra en: ${tortuga.posicion} | ${liebre.nombre} se encuentra en: ${liebre.posicion}`);
}

if (tortuga.posicion >= 90 && liebre.posicion >= 90) {
    console.log('Los dos empataron');
} else if (tortuga.posicion >= 90) {
    console.log(`¡${tortuga.nombre} fue el primero en llegar!`);
} else if (liebre.posicion >= 90) {
    console.log(`¡${liebre.nombre} fue el primero en llegar!`);
}