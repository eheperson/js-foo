

var c, cc, ali, yaAli, yezidArray, yezidIndex;
var sevapPoint;
var playerText, demonText, gameOverText;
var swordArray, swordIndex;
var bground;
var camelArray, camelIndex;
var readyForDemon, demon, demonPower;
var appleIndex, appleArray;

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
            let x,y,w,h;
            w=50;
            h=50;
            x = yaAli.x + yaAli.w/2 - w/2;
            y = yaAli.y;
            new o(x,y,w,h, "sword", "img/zulfo.png") 
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
        sevapPoint = 0;
        let x, y, w, h;
        w = 75;
        h = 75;
        x = c.width/2 - w/2;
        y = c.height - h;
        yaAli = new o(x, y, w, h, "ali", "img/ali.png");
        yezidArray = [];
        yezidIndex=0;
        swordArray = [];
        swordIndex = 0;
        playerText = new gameText("Sevap Point : "+sevapPoint, 3, 5, "black", "20px Arial", "left", "hanging");
        bground = new o(0, -300, 400, 900, "background", "img/background4.jpeg");
        gameOverText = new gameText("Game Over", 70, 300, "black", "50px Arial", "left", "hanging");
        camelArray = [];
        camelIndex = 0;
        // does ready for demon?
        readyForDemon = false;
        let demonx, demony, demonh, demonw;
        demonw = 300;
        demonh = 300;
        demonx = random(0, c.width - demonw);
        demony = -demonh;
        demonPower = 100;
        demon = new o(demonx, demony, demonh, demonw, "demon", "img/demon.png");
        demonText = new gameText("Demon Power : "+demonPower, c.width-185, 5, "black", "20px Arial", "left", "hanging");
        appleArray = [];
        appleIndex = 0;
    }
    stop() {
        clearInterval(this.timer);
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

        // bakground update
        bground.update();
        //player text
        playerText.update();

        if(this.timeCount(this.counter, 150)){
            // camel animations
            let x, y, s;
            s = random(70,150);
            x = random(0, c.width - s);
            y = -s;
            new o(x, y, s, s, "camel", "img/camel"+ random(1,3) + ".png")
        };

        camelArray.forEach(camel => {
            camel.update();
        });

        // update sword
        swordArray.forEach(sword => {
            sword.update();
        });

        if(readyForDemon && demon != null){
            demon.update();
            // demon text 
            demonText.update();

            swordArray.forEach(sword => {
                if(ifCollide(sword, demon)){
                    sword.delete();
                    demonPower -= 1;
                    demonText.text = "Demon Power : "+demonPower;
                    // ko(20, c.height/2 - c.height/4, 400, 200, cc);
                }
            });
            // Demon bullet settings 
            // düşman mermileri oluşturma.
            if (this.timeCount(this.counter, 300)) {
                let w = 120;
                let h = 120;
                let x = demon.x + 9;
                let y = demon.y + 120;
                new o(x, y, w, h, "apple", "img/apple.png");
                let w2 = 120;
                let h2 = 120;
                let x2 = demon.x + 190;
                let y2 = demon.y + 120;
                new o(x2, y2, w2, h2, "apple", "img/apple.png");
            }
            else if (this.timeCount(this.counter, 200)) {
                let w = 80;
                let h = 80;
                let x = demon.x + 50;
                let y = demon.y + 125;
                new o(x, y, w, h, "apple", "img/apple.png");
                let w2 = 80;
                let h2 = 80;
                let x2 = demon.x + 145;
                let y2 = demon.y + 125;
                new o(x2, y2, w2, h2, "apple", "img/apple.png");
            }
            else if (this.timeCount(this.counter, 30)) {
                let w = 50;
                let h = 50;
                let x = demon.x + 98;
                let y = demon.y + 135;
                new o(x, y, w, h, "apple", "img/apple.png");

            }
            appleArray.forEach(apple => {
                apple.update();
                if (ifCollide(apple, yaAli)) {
                    apple.delete();
                    sevapPoint -= 1;
                    playerText.text = "Sevap Point : "+sevapPoint;
                    // carpismaResmi(player.x, player.y, player.w, player.h);
                }
            });
            demonText.update();
            if (demonPower <= 0) {
                // carpismaResmi(megaEnemy.x, megaEnemy.y, megaEnemy.w, megaEnemy.h);
                demon = null;
            }

        } else if(demon == null){
            playerYazi.text="";
        }
        else{
            yezidArray.forEach(yezid => {
                swordArray.forEach(sword => {
                    if(ifCollide(yezid, sword)){
                        sevapPoint += 1;
                        yezid.delete();
                        sword.delete();
                        playerText.text = "Sevap Point : "+sevapPoint;
                        ko(20, c.height/2 - c.height/4, 400, 200, cc);
    
                    };
                });
            });
    

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
                    
                    y.delete();
                    sevapPoint -= 1;
                    playerText.text = "Sevap Point : "+sevapPoint;
                }
            });
        }



        if(sevapPoint >= 20){
            readyForDemon = true;
        }

        if(sevapPoint < 0){
            this.stop();
            gameOverText.update();
            playerText.text = "";
        }


        yaAli.update();
    }
}

ali = new game();
ali.init();