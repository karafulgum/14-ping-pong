export default class FormView {
  constructor(el, controller) {
    this.el = el;
    this.controller = controller;

    // With a fat arrow this stays the same
    const onsubmit = (ev) => {
      // Stops the form from actually submitting
      ev.preventDefault();

      // Get input values
      const playerOneName = this.el.querySelector('#player-one-name').value;
      const playerTwoName = this.el.querySelector('#player-two-name').value;
      const playerOneScore = this.el.querySelector('#player-one-score').value;
      const playerTwoScore = this.el.querySelector('#player-two-score').value;

      this.controller.logGame([playerOneName, playerTwoName], [playerOneScore, playerTwoScore]);

      // Empty the inputs so the user can type in again
      this.el.querySelector('#player-one-name').value = '';
      this.el.querySelector('#player-two-name').value = '';
      this.el.querySelector('#player-one-score').value = '';
      this.el.querySelector('#player-two-score').value = '';
    };

    this.el.addEventListener('submit', onsubmit);
  }
}
