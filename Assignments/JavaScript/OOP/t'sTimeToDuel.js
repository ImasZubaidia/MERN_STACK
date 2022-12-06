class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}
class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost)
        this.power=power
        this.resilience=resilience

    }
    attack(target){
        if( target instanceof Unit ) {
            target.resilience-=this.power
        } else {
            throw new Error( "Target must be a unit!" );
        }
        
    }
}
class Effect extends Card{
    constructor(name,cost,stat,text,mag){
        super(name,cost)
        this.stat=stat
        this.text=text
        this.mag=mag
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == "resilience") {
                target.resilience += this.mag;
            }
            if(this.stat == "power") {
                target.power += this.mag;
            } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const promiseReject = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);


console.log(redBeltNinja);
pairProgramming.play(redBeltNinja);
console.log("Red Belt Power = " + redBeltNinja.power);
console.log(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log("Black Belt Resilience = " + blackBeltNinja.res);