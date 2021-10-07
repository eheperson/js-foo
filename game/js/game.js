

var c, cc, ali, yaAli, yezidArray, yezidIndex

class game{
    constructor(){
        console.log("ehe");

        c = document.getElementById("canvas");
        c.width = 400;
        c.height = 600;
        cc = c.getContext("2d");
        
        // eevnt listener to check if any key is pressed
        document.addEventListener("keydown", this.controlIfKeyIsDown.bind(this));
        // eevnt listener to check if any key is released
        document.addEventListener("keyup", this.controlIfKeyIsUp.bind(this));

        // Timer 
        this.timer = setInterval(this.animate.bind(this), 60);
    }

    controlIfKeyIsDown(event){
        let speed = 10;
        if(event.keyCode == 65) {
            // if pressed key is 'a'
            yaAli.vx=-speed;
        }
        if(event.keyCode == 87) {
            // if pressed key is 'w'
            yaAli.vy=-speed;
        }
        if(event.keyCode == 68) {
            // if pressed key is 'd'
            yaAli.vx=speed;
        }
        if(event.keyCode == 83) {
            // if pressed key is 's'
            yaAli.vy=speed;
        }
        if(event.keyCode == 32) {
            // if pressed key is 'space bar'

        }
    }
    controlIfKeyIsUp(event){
        yaAli.vx = 0;
        yaAli.vy = 0;
    }
    // timer for any event
    timeCount(targetTime, time) {
    if ((targetTime / time) % 1 == 0) {
        return true;
    }
    return false;
}


    init(){
        this.counter = 0;
        let x, y, w, h;
        w = 75;
        h = 75;
        x = c.width/2 - w/2;
        y = c.height - h;
        yaAli = new o(x, y, w, h, "ali", "img/ali.png");
        yezidArray = [];
        yezidIndex=0;
      
    }

    draw(){
        

    }

    update(){

        

        console.log("x : ", yaAli.x, "y : ", yaAli.y)
        

    }

    clear(){
        cc.clearRect(0, 0, c.width, c.height);
    }

    pause(){
        clearInterval(this.timer);
    }

    animate(){
        //increase the timer
        this.counter++;
        this.clear();
        

        // if(this.timeCount(100)){
        //     console.log(random(5,25));
        // }

        // create yezid
        if(this.timeCount(this.counter, 20)){
            let x, y, w, h;
            w = 50;
            h = 100;
            x = random(0, c.width - w);
            y = -h;
            new o(x, y, w, h, "yezid", "img/yezid.png");
            
        }

        yezidArray.forEach(y => {
            y.update();
            if(ifCollide(yaAli, y)){
                
                
                ko(20, c.height/2 - c.height/4, 400, 200, cc);

                y.delete();
                
                
                
            }
            
        });

        yaAli.update();

        console.log("yaAli counter : ", this.counter)
        
        

          

        
    }

}


ali = new game();
ali.init();