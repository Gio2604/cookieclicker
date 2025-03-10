// Klasse die de logica van het klikken en automatische klikken beheert
class Cookie {
    constructor() {
        // Aantal verzamelde koekjes
        this.count = 0;
        // Aantal gekochte automatische klikkers
        this.autoClickers1 = 0;
        this.autoClickers2 = 0;
        // Waarde per klik (kan worden verhoogd)
        this.clickValue = 1;
    }

    // Methode om een koekje te klikken en het aantal koekjes te verhogen
    click() {
        this.count += this.clickValue;
        this.updateUI();
    }

    // Methode om een automatische klikker te kopen, kost 10 koekjes
    AutoClicker1() {
        if (this.count >= 10) {
            this.count -= 10;
            this.autoClickers1++;
            this.updateUI();
        }
    }
    
    // Methode om een automatische klikker te kopen, kost 50 koekjes
    AutoClicker2() {
        if (this.count >= 50) {
            this.count -= 50;
            this.autoClickers2++;
            this.updateUI();
        }
    }

    



    // Methode om een upgrade te kopen waarmee elke klik 10 keer zoveel koekjes oplevert, kost 100 koekjes
    buyX5Cookies() {
        if (this.count >= 100) {
            this.count -= 100;
            this.clickValue *= 10;
            this.updateUI();
        }
    }

    // Methode om een upgrade te kopen waarmee elke klik 50 keer zoveel koekjes oplevert, kost 500 koekjes
    buyX10Cookies() {
        if (this.count >= 500) {
            this.count -= 500;
            this.clickValue *= 50;
            this.updateUI();
            
        }
    }


    // Methode waarmee automatische klikkers elke seconde koekjes toevoegen
    autoClick() {
        if (this.autoClickers1 > 0) {
            this.count += this.autoClickers1;
        }
        if (this.autoClickers2 > 0) {
            this.count += this.autoClickers2 * 2;
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
        const autoClickerButton = document.getElementById("autoclicker1");
        const x5CookiesButton = document.getElementById("buy-x5cookies");
        const x10CookiesButton = document.getElementById("buy-x10cookies");
        const autoClicker2Button = document.getElementById("autoclicker2");

        // Koppel de klik-knop aan de click-methode van Cookie
        if (cookieButton) {
            cookieButton.addEventListener("click", () => this.cookie.click());
        }

        // Koppel de "Koop Auto Clicker"-knop aan de juiste methode
        if (autoClickerButton) {
            autoClickerButton.addEventListener("click", () => this.cookie.AutoClicker1());
        }

        if (autoClicker2Button) {
            autoClicker2Button.addEventListener("click", () => this.cookie.AutoClicker2());
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
