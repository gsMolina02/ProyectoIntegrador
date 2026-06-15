import { Hummingbird, Ostrich, Penguin, Toucan } from './bird-catalog';

const birds = [
    new Toucan(),
    new Hummingbird(),
    new Penguin(),
    new Ostrich()
];

birds.forEach((bird) => {
    bird.eat();

    if ('fly' in bird) {
        bird.fly();
    }

    if ('swim' in bird) {
        bird.swim();
    }
});