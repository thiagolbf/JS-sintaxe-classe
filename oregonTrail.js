class Traveler {
    constructor (name){
        this.name = name
        this._food = 1
        this.isHealthy = true

    }

    get food (){
        return this._food
    }

    set food (value){
       
        if (value > 0){
        this._food = this.food + value
    } else {
        this._food = this.food - (-value)
      }
    }
    
    hunt(){
        this.food = 2
    }

    eat(){
        
        if (this.food > 0){
            this.food = -1
        }
        else {
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor (capacity) {
        this._capacity = capacity
        this.passageiros = []
    }

    get capacity (){
        return this._capacity
    }

    set capacity (valor){
        this._capacity = valor
               
    }
    
    getAvailableSeatCount(){
        return (this.capacity - (this.passageiros.length))
    }

    join(teste){
        if (this.capacity > (this.passageiros.length)){
            this.passageiros.push(teste)
        }
    }

    shouldQuarantine(){
        let total = 0
        for (let counter = 0; counter < this.passageiros.length; counter++){
            
            if (this.passageiros[counter].isHealthy === false){
            total = total + 1
            }
        }
        
        
        if (total > 0){
            return true
        } else {
            return false
        }

         
        
    }

    totalFood(){
        let total = 0
        for (let counter = 0; counter < this.passageiros.length; counter++){
            
            total = total + this.passageiros[counter]._food
        }
        return total
    }

}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
