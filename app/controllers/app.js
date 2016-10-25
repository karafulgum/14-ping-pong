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
    fetch('https://hidden-thicket-10616.herokuapp.com/games')
    .then((res) => res.json())
    .then((data) => {
      this.model = data;

      this.resultView.model = this.model;

      this.resultView.render();
    });
  }

  logGame(players, scores) {
    fetch('https://hidden-thicket-10616.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_1: players[0],
        player_2: players[1],
        score_1: scores[0],
        score_2: scores[1],
      }),

    }).then((res) => res.json())
    .then((data) => {
      this.model.games = [data.game, ...this.model.games];

      this.resultView.model = this.model;


      this.resultView.render();
    });
  }
 }
