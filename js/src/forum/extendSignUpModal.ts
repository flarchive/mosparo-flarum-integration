import { extend } from 'flarum/common/extend';
import Mosparo from './components/Mosparo';
import MosparoState from './states/MosparoState';

export default function extendSignUpModal() {
  extend('flarum/forum/components/SignUpModal', 'oninit', function () {
    this.mosparo = new MosparoState();
  });

  extend('flarum/forum/components/SignUpModal', 'submitData', function (data) {
    if (!this.mosparo) return;

    data['mosparo_submit_token'] = this.mosparo.getSubmitToken();
    data['mosparo_validation_token'] = this.mosparo.getValidationToken();
  });

  extend('flarum/forum/components/SignUpModal', 'fields', function (fields) {
    fields.add(
      'mosparo',
      Mosparo.component({
        id: 'mosparo-box-sign-up',
        state: this.mosparo,
      }),
      1
    );
  });

  extend('flarum/forum/components/SignUpModal', 'onerror', function (this: any, error: any) {
    if (!this.mosparo) return;

    this.mosparo.reset();
  });
}
