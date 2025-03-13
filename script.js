class AutoClicker{
    constructor(price) {
        this.autoClickers = 0;
        this.price = price;
    }

    AutoClicker(game) {
        if (game.count >= this.price) {
            game.count -= this.price;
            this.autoClickers++;
            game.updateUI();
        } else {
            alert("Je hebt niet genoeg cookies!!");}
        }
    }


// Klasse die de logica van het klikken en automatische klikken beheert
class Cookie {
    constructor() {
        // Aantal verzamelde koekjes
        this.count = 0;
        this.clicker1 = new AutoClicker(10);
        this.clicker2 = new AutoClicker(50);
        this.clicker3 = new AutoClicker(80);
        this.clickValue = 1;
    }

    // Methode om een koekje te klikken en het aantal koekjes te verhogen
    click() {
        this.count += this.clickValue;
        this.updateUI();
    }

    // Methode om een automatische klikker te kopen, kost 10 koekjes
    AutoClicker1() {
        this.clicker1.AutoClicker(this);
    }
    
    AutoClicker2() {
        this.clicker2.AutoClicker(this);
    }
    
    AutoClicker3() {
        this.clicker3.AutoClicker(this);
    }

    // Methode om een automatische klikker te kopen, kost 50 koekjes


    /**
     * prijs is anders
     * aantal
     * 
     * method koop is verder hetzefde
     */
    

    // Methode om een upgrade te kopen waarmee elke klik 10 keer zoveel koekjes oplevert, kost 100 koekjes
    buyX5Cookies() {
        if (this.count >= 100) {
            this.count -= 100;
            this.clickValue *= 10;
            this.updateUI();
        }
    else {
        alert("Je hebt niet genoeg cookies!!");}
    }
    

    // Methode om een upgrade te kopen waarmee elke klik 50 keer zoveel koekjes oplevert, kost 500 koekjes
    buyX10Cookies() {
        if (this.count >= 500) {
            this.count -= 500;
            this.clickValue *= 50;
            this.updateUI();
            
        }
    else {
        alert("Je hebt niet genoeg cookies!!");}
    }
    

    // Methode waarmee automatische klikkers elke seconde koekjes toevoegen
    autoClick() {
        if (this.clicker1.autoClickers > 0) {
            this.count += this.clicker1.autoClickers;
        }
        if (this.clicker2.autoClickers > 0) {
            this.count += this.clicker2.autoClickers * 2;
        }
        if (this.clicker3.autoClickers > 0) {
            this.count += this.clicker3.autoClickers * 4;
        }
        this.updateUI();
    }


    // Methode om de gebruikersinterface bij te werken met het huidige aantal koekjes
    updateUI() {
        const cookieCountElement = document.getElementById("cookie-count");
        if (cookieCountElement) {
            cookieCountElement.innerText = this.count;
        }
    }
}


// Klasse die het spel initialiseert en de knoppen koppelt aan acties
class Game {
    constructor() {
        this.cookie = new Cookie();
        this.init();
    }

    // Methode om event listeners toe te voegen aan de knoppen en de automatische klikfunctie te starten
    init() {
        const cookieButton = document.getElementById("cookie");
        const autoClicker1Button = document.getElementById("autoclicker1");
        const x5CookiesButton = document.getElementById("buy-x5cookies");
        const x10CookiesButton = document.getElementById("buy-x10cookies");
        const autoClicker2Button = document.getElementById("autoclicker2");
        const autoClicker3Button = document.getElementById("autoclicker3");
        // Koppel de klik-knop aan de click-methode van Cookie
        if (cookieButton) {
            cookieButton.addEventListener("click", () => this.cookie.click());
        }

        // Koppel de "Koop Auto Clicker"-knop aan de juiste methode
        if (autoClicker1Button) {
            autoClicker1Button.addEventListener("click", () => this.cookie.AutoClicker1());
        }

        if (autoClicker2Button) {
            autoClicker2Button.addEventListener("click", () => this.cookie.AutoClicker2());
        }

        if (autoClicker3Button) {
            autoClicker3Button.addEventListener("click", () => this.cookie.AutoClicker3());
        }
        

        // Koppel de "Koop x5 Click Upgrade"-knop aan de juiste methode
        if (x5CookiesButton) {
            x5CookiesButton.addEventListener("click", () => this.cookie.buyX5Cookies());
        }

        // Koppel de "Koop x10 Click Upgrade"-knop aan de juiste methode
        if (x10CookiesButton) {
            x10CookiesButton.addEventListener("click", () => this.cookie.buyX10Cookies());
        }

        // Start een interval om elke seconde automatische kliks uit te voeren
        setInterval(() => this.cookie.autoClick(), 1000);
    }
}

// Wacht tot de pagina is geladen en start vervolgens het spel
document.addEventListener("DOMContentLoaded", () => new Game());
