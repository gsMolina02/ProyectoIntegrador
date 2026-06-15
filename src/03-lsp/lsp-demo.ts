import { Audi, Drone, Ford, Honda, Tesla, Toyota, VehicleManager } from './vehicle-manager';

const vehicles = [
    new Tesla('Model 3'),
    new Audi('Q5'),
    new Toyota('Corolla Hybrid'),
    new Honda('CR-V'),
    new Ford('Ranger'),
    new Drone('Explorer X1')
];

VehicleManager.printVehicleDetails(vehicles);