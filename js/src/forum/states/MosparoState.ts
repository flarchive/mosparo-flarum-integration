import app from 'flarum/forum/app';

export default class MosparoState {
  widget: any;

  constructor() {
    this.widget = null;
  }

  render(id: string) {
    this.widget = new mosparo(
      id,
      app.data['mosparo.host'],
      app.data['mosparo.uuid'],
      app.data['mosparo.publicKey'],
      {
        loadCssResource: true,
      }
    );
  }

  getSubmitToken() {
    return this.widget.getSubmitToken();
  }

  getValidationToken() {
    return this.widget.getValidationToken();
  }

  reset() {
    this.widget.resetState();
    this.widget.requestSubmitToken();
  }
}
