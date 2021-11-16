

function nesne(x, y, w, h, type, src) {
    this.type = type;    // tipi
    this.x = x;         //x kordinatı
    this.y = y;        //y kordinatı
    this.w = w;       // genişlik
    this.h = h;      // yüksekliği
    this.src = src; //resim yolunu belirt

    //js ile resim olsturma
    this.image = new Image();
    this.image.src = this.src;

    //nesnenin çizim fonk
    this.draw = function () {
        cc.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
    // tipe göre güncelleme ve hız ayarları
    switch (this.type) {
        case "player":
            this.vx = 0; //yatay hızı
            this.vy = 0; // dusey hızı
            this.update = function () {
                this.x += this.vx;
                this.y += this.vy;
                //denetlemeleri ekrandan taşması
                if (this.x <= 0) {  // soldanaaa
                    this.x = 0;
                }
                if (this.x + this.w >= c.width) { //sağdan
                    this.x = c.width - this.w;
                }
                if (this.y <= 0) {   //yukarıdan
                    this.y = 0;
                }
                if (this.y + this.h >= c.height) { // aşağıdan
                    this.y = c.height - this.h;
                }
                this.draw();
            }
            break;
        case "enemy":
            enemyIndex++;
            enemyArray[enemyIndex] = this;
            this.id = enemyIndex;
            this.vy = 15; // dusey hızı
            this.update = function () {
                this.y += this.vy;

                // sayfanın aşağısını geçtiğinde
                if (this.y >= c.height + this.h) {
                    this.delete();
                }

                this.draw();
            }
            this.delete = function () {
                //silme
                delete enemyArray[this.id];
            }
            break;
        case "mermi":
            mermiIndex++;
            mermiArray[mermiIndex] = this;
            this.id = mermiIndex;
            this.vy = 40; // dusey hızı
            this.update = function () {
                this.y += -this.vy;

                // sayfanın aşağısını geçtiğinde
                if (this.y < -this.h) {
                    this.delete();
                }
                this.draw();
            }
            this.delete = function () {
                //silme
                delete mermiArray[this.id];
            }
            break;
        case "arkaplan":
            this.vy = 1; // dusey hızı
            this.update = function () {
                this.y += this.vy;
                if (this.y >= 0) {
                    this.y = -300;
                }
                this.draw();
            }
            break;
        case "meteor":
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
            meteorIndex++;
            meteorArray[meteorIndex] = this;
            this.id = meteorIndex;
            this.update = function () {
                this.x += this.vx;
                this.y += this.vy;
                if (this.y > c.height + this.h) {
                    this.delete();
                }
                this.draw();

            }
            this.delete = function () {
                delete meteorArray[this.id];
            }
            break;

        case "megaEnemy":
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

        case "megamermi":
            this.vy = 30;
            mIndex++;
            mArray[mIndex] = this;
            this.id = mIndex;
            this.update = function () {

                this.y += this.vy;
                if (this.y < -this.h) {
                    this.delete();
                }
                this.draw();
            }
            this.delete = function () {
                delete mArray[this.id];
            }
            break;



    }
}

//İstenen sürede bir olay gerçekleştirmek için kullanacağız.

function sure(time) {
    if ((ucak.sayac / time) % 1 == 0) {
        return true;
    }
    return false;
}

// rastgele belirli aralıkta sayı üretsin
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// çarpışma fonksiyonu
function carpisma(ob1, ob2) {
    if (ob1.x < ob2.x + ob2.w && ob1.x + ob1.w > ob2.x && ob1.y < ob2.y + ob2.h && ob1.y + ob1.h > ob2.y) {
        return true; //çarpışma gerçekleştir
    }
    return false;
}

//Çarpışma resmi
function carpismaResmi(x, y, w, h) {
    let img = new Image();
    img.src = "resimler/p" + random(1, 2) + ".png";
    cc.drawImage(img, x, y, w, h);

}


//Yazı nesnesi oluşturma
function yazi(text, x, y, color, font, textAlign, textBaseline) {
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
// ses dosyası oluşturma fonksiyonu
function ses(src) {
    this.music = document.createElement("audio");
    this.music.src = src;
    this.music.setAttribute("preloads", "auto");
    this.music.setAttribute("controls", "none");
    this.music.style.display = "none";
    document.body.appendChild(this.music);
    this.play = function () {
        this.music.play();
    }
    this.stop = function () {
        this.music.pause();
    }
}


























function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function sure(time) {
    if ((ucak.sayac / time) % 1 == 0) { return true; }
    return false;

}