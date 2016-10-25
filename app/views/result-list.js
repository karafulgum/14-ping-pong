class ResultItemView {
  constructor(model) {
    // Stup the data for our CURREN table row
    this.model = model;

    // Setup our element for THE CURRENT row in our table
    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
      <p class="grid__item--header"></p>
      <div class="grid__item--content">
        <div class="grid__item--players">
          <p class="playerOne"></p>
          <p class="vs">vs</p>
          <p class="playerTwo"></p>
          </div>
          <div class="grid__item--score">
            <p class="playerOneScore"></p>
            <p class="playerTwoScore"></p>
          </div>`;
  }

  render() {
    this.el.querySelector('.grid__item--header').innerText = this.model.time;
    this.el.querySelector('.playerOne').innerText = this.model.players[0].name;
    this.el.querySelector('.playerTwo').innerText = this.model.players[1].name;
    this.el.querySelector('.playerOneScore').innerText = this.model.players[0].score;
    this.el.querySelector('.playerTwoScore').innerText = this.model.players[1].score;
  }
}

export default class ResultList {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.innerHTML = '';

    // Loop through our model
    this.model.games.forEach((result) => {
      // Create a new result item view
      const row = new ResultItemView(result);
      row.render();

      // Append the new result row to the list element
      this.el.appendChild(row.el);
    });
  }
}
