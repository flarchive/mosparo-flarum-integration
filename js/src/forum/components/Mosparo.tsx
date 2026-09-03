import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

function loadMosparoScript() {
  if (app.mosparoScriptLoaded) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = app.data['mosparo.host'] + '/build/mosparo-frontend.js';
    script.async = true;
    script.onload = () => {
      app.mosparoScriptLoaded = true;
      resolve(true);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default class Mosparo extends Component {
  view() {
    return (
      <div className="Form-group">
        <div className="mosparo" id={this.attrs.id} />
      </div>
    );
  }

  oncreate(vnode: any) {
    super.oncreate(vnode);

    loadMosparoScript().then(() => {
      const initInterval = setInterval(() => {
        if (typeof window.mosparo !== 'undefined') {
          clearInterval(initInterval);
          this.attrs.state.render(this.attrs.id);
        }
      }, 200);
    });
  }
}
