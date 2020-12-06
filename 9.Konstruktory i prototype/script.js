// exercise 3
function Game(){
    
   this.lastNumber = 0;
   this.number = 0;
   this.generator = null;
    
    this.startGenerator = () => {
        this.generator = setInterval(() => {
            this.lastNumber = this.number;
            this.number = Math.floor((Math.random() * 10) + 1);
            
            console.log(this.number);
            this.checkWin();
        }, 1000)
    }
    
    this.checkWin = () => {
        if(this.lastNumber + 5 === this.number){
            console.log("Wygrałeś");
            clearInterval(this.generator);
        }
    }
}

let game1 = new Game();
game1.startGenerator();
