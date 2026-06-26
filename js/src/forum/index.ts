import app from 'flarum/forum/app';
import extendSignUpModal from './extendSignUpModal';
import extendLogInModal from './extendLogInModal';
import extendForgotPasswordModal from './extendForgotPasswordModal';

app.initializers.add('mosparo-integration', () => {
  app.mosparoScriptLoaded = false;

  extendSignUpModal();
  extendLogInModal();
  extendForgotPasswordModal();
});
