import ResultListView from '../views/result-list';
import FormView from '../views/form-view';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    this.resultView = new ResultListView(this.appElement.querySelector('.grid'), this.model);
    this.formView = new FormView(this.appElement.querySelector('.footer-form'), this);

    // Grab our data from the API
    fetch('https://secure-scrubland-96387.herokuapp.com/games')
    .then((res) => res.json())
    .then((data) => {
      this.model = data;

      this.resultView.model = this.model;

      this.resultView.render();
    });
  }

  logGame(player, score) {
    fetch('https://secure-scrubland-96387.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_1: document.querySelector('#player-one-name').value,
        player_2: document.querySelector('#player-two-name').value,
        score_1: document.querySelector('#player-one-score').value,
        score_2: document.querySelector('#player-two-score').value,
      }),

    }).then((res) => res.json())
    .then((data) => {
      this.model = [data, ...this.model];

      this.resultView.model = this.model;


      this.resultView.render();
    });
  }
 }
