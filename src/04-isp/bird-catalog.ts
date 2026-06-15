
/**
 * VIOLACIÓN AL PRINCIPIO DE SEGREGACIÓN DE INTERFAZ (ISP)
 * 
 * El catálogo de fauna define una interfaz "gorda" que obliga a las aves 
 * a implementar métodos que no les corresponden según su naturaleza.
 */

export interface Eatable {
    eat(): void;
}

export interface Flyable {
    fly(): void;
}

export interface Swimmable {
    swim(): void;
}

export class Toucan implements Eatable, Flyable {
    public eat() { console.log('El Tucán está comiendo frutas.'); }
    public fly() { console.log('El Tucán vuela sobre la selva.'); }
}

export class Hummingbird implements Eatable, Flyable {
    public eat() { console.log('El Colibrí busca néctar.'); }
    public fly() { console.log('El Colibrí aletea rápidamente.'); }
}

/**
 * El Pingüino solo implementa lo que realmente puede hacer.
 * Ya no se ve obligado a declarar un fly() que termine lanzando errores.
 */
export class Penguin implements Eatable, Swimmable {
    public eat() { console.log('El Pingüino come pescado.'); }
    public swim() { console.log('El Pingüino nada con soltura.'); }
}

export class Ostrich implements Eatable, Swimmable {
    public eat() { console.log('El Avestruz come hierbas.'); }
    public swim() { console.log('El Avestruz puede nadar si es necesario.'); }
}
