import { extend } from 'flarum/common/extend';
import Mosparo from './components/Mosparo';
import MosparoState from './states/MosparoState';

export default function extendForgotPasswordModal() {
  extend('flarum/forum/components/ForgotPasswordModal', 'oninit', function () {
    this.mosparo = new MosparoState();
  });

  extend('flarum/forum/components/ForgotPasswordModal', 'requestParams', function (data) {
    if (!this.mosparo) return;

    data['mosparo_submit_token'] = this.mosparo.getSubmitToken();
    data['mosparo_validation_token'] = this.mosparo.getValidationToken();
  });

  extend('flarum/forum/components/ForgotPasswordModal', 'fields', function (fields) {
    fields.add(
      'mosparo',
      Mosparo.component({
        id: 'mosparo-box-forgot-password',
        state: this.mosparo,
      }),
      1
    );
  });
}
