import { extend } from 'flarum/common/extend';
import Mosparo from './components/Mosparo';
import MosparoState from './states/MosparoState';

export default function extendLogInModal() {
  extend('flarum/forum/components/LogInModal', 'oninit', function () {
    this.mosparo = new MosparoState();
  });

  extend('flarum/forum/components/LogInModal', 'loginParams', function (data) {
    if (!this.mosparo) return;

    data['mosparo_submit_token'] = this.mosparo.getSubmitToken();
    data['mosparo_validation_token'] = this.mosparo.getValidationToken();
  });

  extend('flarum/forum/components/LogInModal', 'fields', function (fields) {
    if (this.twoFactorRequired) {
      return;
    }

    fields.add(
      'mosparo',
      Mosparo.component({
        id: 'mosparo-box-login',
        state: this.mosparo,
      }),
      1
    );
  });

  extend('flarum/forum/components/LogInModal', 'onerror', function (this: any, error: any) {
    if (!this.mosparo) return;

    this.mosparo.reset();
  });
}
