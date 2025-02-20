class Cookie {
    constructor() {
        this.count = 0;
        this.autoClickers = 0;
        this.clickValue = 1;
    }

    click() {
        this.count += this.clickValue;
        this.updateUI();
    }

    buyAutoClicker() {
        if (this.count >= 10) {
            this.count -= 10;
            this.autoClickers++;
            this.updateUI();
        }
    }

    buyX5Cookies() {
        if (this.count >= 100) {
            this.count -= 100;
            this.clickValue *= 5;
            this.updateUI();
        }
    }

    autoClick() {
        if (this.autoClickers > 0) {
            this.count += this.autoClickers;
            this.updateUI();
        }
    }

    updateUI() {
        const cookieCountElement = document.getElementById("cookie-count");
        if (cookieCountElement) {
            cookieCountElement.innerText = this.count;
        }
    }
}

class Game {
    constructor() {
        this.cookie = new Cookie();
        this.init();
    }

    init() {
        const cookieButton = document.getElementById("cookie");
        const autoClickerButton = document.getElementById("buy-autoclicker");
        const x5CookiesButton = document.getElementById("buy-x5cookies");
        
        if (cookieButton) {
            cookieButton.addEventListener("click", () => this.cookie.click());
        }
        
        if (autoClickerButton) {
            autoClickerButton.addEventListener("click", () => this.cookie.buyAutoClicker());
        }

        if (x5CookiesButton) {
            x5CookiesButton.addEventListener("click", () => this.cookie.buyX5Cookies());
        }
        
        setInterval(() => this.cookie.autoClick(), 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => new Game());