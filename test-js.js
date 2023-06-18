class Animal {
    constructor(animal, speed, feed, eyes) {
        this.animal = animal;
        this.speed = speed;
        this.feed = feed;
        this.eyes = eyes;
    }
    eatSome() {
        console.log(`${this.animal} is eating ${this.feed} now.`);
    }
    runPS() {
        if(this.legs >= 60) {
            console.log(`${this.animal} is too fast! Speed is now on ${this.speed}!`);
        } else {
            console.log(`${this.animal} is normal though, ${this.speed} now.`);
        }
    }
}

const rabbit = new Animal("Rabbit", 75, "carrot", 3.0)
rabbit.eatSome();
rabbit.runPS();