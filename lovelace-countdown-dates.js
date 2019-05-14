class CountdownCard extends HTMLElement {

  set hass(hass) {
    if (!this.config.title) {
      this.card.header = "Countdown";
    } else {
      this.card.header = this.config.title;
    }
    if (!this.config.phrase) {
      this.phrase = "days left";
    } else {
      this.phrase = this.config.phrase;
    }
    var line = "";
    this.dates.forEach(element => {
      var daysLeft = this.date_diff(element.date);
      line += `<div>
                  <div class="info" style="float:left; width:65%">${element.name}</div>
                  <div class="info" style="text-align: right;">${daysLeft} ${this.phrase}</div>
                </div>
              `;

    });
      

    this.content.innerHTML = line;
  }

  setConfig(config) {
    this.config = config;
    this.dates = this.config.dates;

    if (!this.content) {
      this.card = document.createElement('ha-card');

      this.card.header = "Countdown";
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      this.card.appendChild(this.content);
      this.appendChild(this.card);
    }

  }

  date_diff(target) {
    var now = new Date();
    var then = new Date(target);
    var timeDiff = Math.abs(then.getTime() - now.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (then.getTime() < now.getTime()) {
      diffDays = diffDays * -1;
    }
    return diffDays;
  }

  getCardSize() {
    return 'getCardSize' in this.lastChild ? this.lastChild.getCardSize() : 1;
  }
}

customElements.define('countdown-dates', CountdownCard);