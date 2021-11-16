

function o(x, y, w, h, type, src){
    this.type = type; //type
    this.x = x; // x coordinate
    this.y = y; // y coordinate
    this.w = w; // width
    this.h = h; // height
    this.src = src; // image path

    // uploadn an image in js
    this.image = new Image();
    this.image.src = this.src;

    // drawer function of object
    this.draw = function(){
        cc.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    // update an object accordng to it's type
    switch(this.type){
        case "ali":
            this.vx = 0; //vertival speed
            this.vy = 0; // horizontal speed
            this.update = function() {
                this.x += this.vx;
                this.y += this.vy;
                // prevent screen overflow
                if (this.x <= 0) {  // prevent left overflow 
                    this.x = 0;
                }
                if (this.x + this.w >= c.width) { //prevent right overflow
                    this.x = c.width - this.w;
                }
                if (this.y <= 0) {   // provent top overflow
                    this.y = 0;
                }
                if (this.y + this.h >= c.height) { // prewent bottom overflow
                    this.y = c.height - this.h;
                }
                this.draw();
            }
            break;

            case "yezid":
                yezidIndex++;
                yezidArray[yezidIndex] = this; 
                this.id = yezidIndex
                this.vx = 0; //vertival speed
                this.vy = 15; // horizontal speed
                this.update = function() {
                    this.x += this.vx;
                    this.y += this.vy;

                    if(this.y >= c.height + this.h){ // prewent bottom overflow
                        this.delete();
                    }
                    this.draw();
                }

                this.delete = function(){
                    delete yezidArray[this.id];
                }
                break;

            case "sword":
                swordIndex++;
                swordArray[swordIndex] = this; 
                this.id = swordIndex
                this.vx = 0; //vertival speed
                this.vy = 40; // horizontal speed
                this.update = function() {
                    this.x += this.vx;
                    this.y += -this.vy;
                    if (this.y < - this.h) {   // provent top overflow
                        this.delete();
                    }
                    this.draw();
                }

                this.delete = function(){
                    delete swordArray[this.id];
                }
                break;

            case "background":

                this.vx = 0; //vertival speed
                this.vy = 1; // horizontal speed
                this.update = function() {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.y >= 0) {   // provent top overflow
                        this.y= -300;
                    }
                    this.draw();
                }
                break;
            
            case "camel" :
                this.vx = Math.random();
                if (this.vx < 0.2) {
                    this.vx = 0.1;
                } else if (this.vx > 0.2 && this.vx < 0.4) {
                    this.vx = 0.2;
                }
                else if (this.vx > 0.4 && this.vx < 0.6) {
                    this.vx = -0.1;
                }
                else if (this.vx > 0.6 && this.vx < 0.8) {
                    this.vx = -0.2;
                }
                else {
                    this.vx = 0;
                }
                this.vy = 2;
                camelIndex++;
                camelArray[camelIndex] = this;
                this.id = camelIndex;
                this.update = function () {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.y > c.height + this.h) {
                        this.delete();
                    }
                    this.draw();
    
                }
                this.delete = function () {
                    delete camelArray[this.id];
                }
                break;

            case "demon":
                this.vx = 3;
                this.vy = 8;
                this.update = function () {
    
                    this.x += this.vx;
                    this.y += this.vy;
    
                    if (this.y > 0) {
                        this.y = 0;
                    }
    
                    if (this.x + this.w >= c.width || this.x <= 0) {
                        this.vx = -this.vx;
                    }
                    this.draw();
    
                }
                break;

            case "apple":
                this.vy = 30;
                appleIndex++;
                appleArray[appleIndex] = this;
                this.id = appleIndex;
                this.update = function () {
    
                    this.y += this.vy;
                    if (this.y < -this.h) {
                        this.delete();
                    }
                    this.draw();
                }
                this.delete = function () {
                    delete appleArray[this.id];
                }
                break;
        
    }

}

// timer for any event
function timeCount(time) {
    if ((yaAli.counter / time) % 1 == 0) {
        return true;
    }
    return false;
}

// random number generator
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// detect if collide
function ifCollide(ob1, ob2) {
    if (ob1.x < ob2.x + ob2.w && ob1.x + ob1.w > ob2.x && ob1.y < ob2.y + ob2.h && ob1.y + ob1.h > ob2.y) {
        return true; // return true if collide
    }
    return false;
}

//Çarpışma resmi
function ko(x, y, w, h, drawer) {
    let img = new Image();
    img.src = "img/ko.png";
    drawer.drawImage(img, x, y, w, h);
}

function stop(timer){
    clearInterval(timer);
}

function gameText(text, x, y, color, font, textAlign, textBaseline) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
    this.font = font;
    this.textAlign = textAlign;
    this.textBaseline = textBaseline;
    this.text = text;
    this.draw = function () {
        cc.fillStyle = this.color;
        cc.font = this.font;
        cc.textAlign = this.textAlign;
        cc.textBaseline = this.textBaseline;
        cc.fillText(this.text, this.x, this.y);
    }
    this.update = function () {
        this.draw();
    }
}