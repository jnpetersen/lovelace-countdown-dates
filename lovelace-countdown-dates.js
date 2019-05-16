class CountdownCard extends HTMLElement {

  set hass(hass) {
    if (this.config.title) {
      this.card.header = this.config.title;
    }
    if (!this.config.phrase) {
      this.phrase = "days left";
    } else {
      this.phrase = this.config.phrase;
    }
    var line = "";
    this.dates.forEach(element => {
      var today = new Date();
      var todayYear = today.getFullYear();
      var eventDate = new Date(element.date);
      var dd = String(eventDate.getDate()).padStart(2, '0');
      var mm = String(eventDate.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = eventDate.getFullYear();

      var age = (todayYear - yyyy) - 1;
      var eventToday = mm + '/' + dd + '/' + (age > -1 ? today.getFullYear() : yyyy);

      // console.log(this.date_diff(eventToday));

      var daysLeft = this.date_diff(eventToday);
      if (daysLeft < 0) {
        age = age + 1;
        daysLeft = this.date_diff(mm + '/' + dd + '/' + parseInt(todayYear+1));
      }

      if (age > -1) {
        var daysLeft = (this.config.show_age ? "age " + age + ", " : "") + daysLeft;
      }
      
      line += `
              <div style="padding: 5px;">
                
                <div class="countdown-name" style="float:left; width:65%"><ha-icon icon="${element.icon ? element.icon : ""}"></ha-icon> ${element.name}</div>
                <div class="countdown-date" style="text-align: right;">${daysLeft} ${this.phrase}</div>
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
    return 1;
  }
}

customElements.define('countdown-dates', CountdownCard);