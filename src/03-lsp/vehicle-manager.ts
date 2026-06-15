
/**
 * VIOLACIÓN AL PRINCIPIO DE SUSTITUCIÓN DE LISKOV (LSP)
 * 
 * En la flota de la reserva, intentamos manejar diversos vehículos.
 * Sin embargo, el cliente se ve obligado a conocer los detalles internos
 * de cada marca para poder operar, rompiendo la transparencia de la abstracción.
 */

export interface Vehicle {
    model: string;
    printDetails(): void;
}

abstract class BaseVehicle implements Vehicle {

    constructor(public model: string) {}

    abstract printDetails(): void;

}

export class Tesla extends BaseVehicle {
    printDetails() {
        console.log('Tesla Model:', this.model, 'Carga eléctrica al 100%');
    }
}

export class Audi extends BaseVehicle {
    printDetails() {
        console.log('Audi Model:', this.model, 'Tracción Quattro activada');
    }
}

export class Toyota extends BaseVehicle {
    printDetails() {
        console.log('Toyota Model:', this.model, 'Motor híbrido listo');
    }
}

export class Honda extends BaseVehicle {
    printDetails() {
        console.log('Honda Model:', this.model, 'VTEC activado');
    }
}

export class Ford extends BaseVehicle {
    printDetails() {
        console.log('Ford Model:', this.model, 'Built Tough');
    }
}

export class Drone extends BaseVehicle {
    printDetails() {
        console.log('Drone Model:', this.model, 'Sensores aéreos listos');
    }
}

export class VehicleManager {

    /**
     * Cada vehículo conoce cómo mostrarse, así que el manager solo coordina la operación.
     */
    static printVehicleDetails(vehicles: Vehicle[]) {
        vehicles.forEach(vehicle => {
            vehicle.printDetails();
        });
    }

}
