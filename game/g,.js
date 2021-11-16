
var c, cc, ucak, player, enemyArray, enemyIndex,
    skor, playerYazi,
    mermiArray, mermiIndex, arkaplan,
    meteorArray, meteorIndex, hazir,
    megaEnemy, dusmanYazisi, gameoverYazisi, enemyHealth,
    mArray, mIndex,kazandinYazi,
    b1,b2,b3;
    


class game {
    constructor() {
        c = document.getElementById("canvas");
        c.width = 400;
        c.height = 600;
        cc = c.getContext("2d");
        document.addEventListener("keydown", this.kontrolDown.bind(this));
        document.addEventListener("keyup", this.kontrolUp.bind(this));
        document.addEventListener("mousedown", this.mouseDown.bind(this));
        //zamanlayıcı
        this.timer = setInterval(this.animate.bind(this), 30);
    }
    init() {
        this.sayac = 0;
        skor = 1;
        // Set up  ayarları
        let x, y, w, h;
        w = 100;
        h = 100;
        x = c.width / 2 - w / 2; w
        y = c.height - h;
        player = new nesne(x, y, w, h, "player", "resimler/player.png");
        enemyArray = [];
        enemyIndex = 0;
        //mermi tanımı set up
        mermiArray = [];
        mermiIndex = 0;
        //meteor tanımı set up
        meteorArray = [];
        meteorIndex = 0;
        //mega düşman mermisi tanımı set up
        mArray = [];
        mIndex = 0;
        playerYazi = new yazi("Health:" + skor, 3, 3, "red", "25px Arial", "left", "hanging");

        arkaplan = new nesne(0, -300, 400, 900, "arkaplan", "resimler/arkaplan.png");
        // düşmanla karşılaşmaya hazır olma koşulu
        hazir = false;
        let mx, my, mw, mh;
        mw = 200;
        mh = 170;
        mx = random(0, c.width - mw);
        my = -mh;
        enemyHealth = 100;
        megaEnemy = new nesne(mx, my, mw, mh, "megaEnemy", "resimler/bigEnemy.png");
        dusmanYazisi = new yazi("Enemy:" + enemyHealth, c.width - 130, 3, "red", "25px Arial", "left", "hanging");
        gameoverYazisi = new yazi("Game Over", c.width / 2, 300, "#fff", "50px Arial", "center", "hanging");
        kazandinYazi = new yazi("Congratulations", c.width / 2, 300, "green", "50px Arial", "center", "hanging");
        b1=new ses("sesler/bom1.mp3");//düşmanı vurdugumuzda;
        b2=new ses("sesler/bom2.mp3");//düşmanı vurdugumuzda;
        b3=new ses("sesler/bom3.mp3");//düşmanı vurdugumuzda;
    }
    clear() {
        cc.clearRect(0, 0, c.width, c.height);
    }
    kontrolDown(event) {
        if (event.keyCode == 65) { //a tuşu
            player.vx = -25;
            player.vy = 0;

        }
        if (event.keyCode == 87) { //w tuşu
            player.vy = -25;
            player.vx = 0;
        }
        if (event.keyCode == 68) { //d tuşu
            player.vx = 25;
            player.vy = 0;
        }
        if (event.keyCode == 83) { //s tuşu
            player.vy = 25;
            player.vx = 0;


        }
        if (event.keyCode == 32) { //space tuşu
            // kanat mermileri
            this.kanatMermi();

        }
    }
    kontrolUp() {
        player.vx = 0;
        player.vy = 0;
    }
    stop() {
        clearInterval(this.timer);
    }
    mouseDown() {
        let x, y, w, h;
        w = 10;
        h = 20;
        x = player.x + player.w / 2 - w / 2;
        y = player.y;
        new nesne(x, y, w, h, "mermi", "resimler/mermi.png");

    }
    kanatMermi() {
        let x, y, w, h;
        w = 10;
        h = 20;
        x = player.x + 5;
        y = player.y + 90;
        new nesne(x, y, w, h, "mermi", "resimler/mermi.png");
        let x2, y2, w2, h2;
        w2 = 10;
        h2 = 20;
        x2 = player.x + 85;
        y2 = player.y + 90;
        new nesne(x2, y2, w2, h2, "mermi", "resimler/mermi.png");
    }
    animate() {
        //sayacı artıralım
        this.sayac++;
        this.clear();
        arkaplan.update();
        //player yazısı
        playerYazi.update();
        if (sure(240)) {
            //Meteor ve Gezegenler
            let x, y, boyut;
            boyut = random(50, 100);
            x = random(0, c.width - boyut);
            y = -boyut;
            new nesne(x, y, boyut, boyut, "meteor", "resimler/meteor" + random(1, 7) + ".png");


        }
        meteorArray.forEach(meteor => {
            meteor.update();
        });

        //mermi güncelleme
        mermiArray.forEach(mermi => {
            mermi.update();
        });

        if (hazir && megaEnemy != null) { //büyük düşman gelsin

            megaEnemy.update();
            mermiArray.forEach(mermi => {
                if (carpisma(mermi, megaEnemy)) {
                    b1.play();
                    mermi.delete();
                    enemyHealth -= 1;
                    dusmanYazisi.text = "Enemy:" + enemyHealth;
                    carpismaResmi(mermi.x, mermi.y - 35, 30, 30);
                }
            });
            // düşman mermileri oluşturma.
            if (sure(300)) {
                let w = 10;
                let h = 40;
                let x = megaEnemy.x + 9;
                let y = megaEnemy.y + 120;
                new nesne(x, y, w, h, "megamermi", "resimler/mermi2.png");
                let w2 = 10;
                let h2 = 40;
                let x2 = megaEnemy.x + 190;
                let y2 = megaEnemy.y + 120;
                new nesne(x2, y2, w2, h2, "megamermi", "resimler/mermi2.png");
            }
            else if (sure(200)) {
                let w = 10;
                let h = 40;
                let x = megaEnemy.x + 50;
                let y = megaEnemy.y + 125;
                new nesne(x, y, w, h, "megamermi", "resimler/mermi2.png");
                let w2 = 5;
                let h2 = 20;
                let x2 = megaEnemy.x + 145;
                let y2 = megaEnemy.y + 125;
                new nesne(x2, y2, w2, h2, "megamermi", "resimler/mermi2.png");
            }
            else if (sure(30)) {
                let w = 10;
                let h = 40;
                let x = megaEnemy.x + 98;
                let y = megaEnemy.y + 135;
                new nesne(x, y, w, h, "megamermi", "resimler/mermi2.png");

            }
            mArray.forEach(megamermi => {
                megamermi.update();
                if (carpisma(megamermi, player)) {
                    megamermi.delete();
                    skor -= 1;
                    carpismaResmi(player.x, player.y, player.w, player.h);
                }
            });
            dusmanYazisi.update();
            if (enemyHealth <= 0) {
                b2.play();
                carpismaResmi(megaEnemy.x, megaEnemy.y, megaEnemy.w, megaEnemy.h);
                megaEnemy = null;
            }

        } else if(megaEnemy == null){
            playerYazi.text="";
        }else {
            enemyArray.forEach(enemy => {
                mermiArray.forEach(mermi => {
                    if (carpisma(enemy, mermi)) {
                        b1.play();
                        enemy.delete();
                        mermi.delete();
                        skor += 1;
                        playerYazi.text = "Health:" + skor;
                        carpismaResmi(enemy.x, enemy.y, enemy.w, enemy.h);

                    }
                });
            });
            //düşman oluşturma 10 saniyede
            if (sure(100)) {
                let x, y, w, h;
                w = 50;
                h = 75;
                x = random(0, c.width - w);
                y = -h;
                new nesne(x, y, w, h, "enemy", "resimler/enemy" + random(1, 6) + ".png");
            }
            enemyArray.forEach(enemy => {
                enemy.update();
                if (carpisma(enemy, player)) {
                    b3.play();
                    enemy.delete();
                    skor -= 1;
                    playerYazi.text = "Health:" + skor;
                    carpismaResmi(player.x, player.y, player.w, player.h);
                }

            });
        }
        if (skor >= 10) {
            hazir = true;
        }

        if (skor == 0) {
            gameoverYazisi.update();
            playerYazi.text = "";
            this.stop();

        }
        player.update();

        if (megaEnemy==null) {
            kazandinYazi.update();
        }
    }
}

ucak = new game();
ucak.init();

