import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: '',
      type: 'hidden',
      label: (
        <div className="Alert Alert--info">
          <div className="Alert-body">
            {app.translator.trans('mosparo-integration.admin.info_howto', {
              a: <a href="https://mosparo.io/how-to-use/" target="_blank" rel="noopener" />,
            })}
          </div>
        </div>
      ),
    }))

    .setting(() => ({
      setting: 'mosparo.host',
      label: app.translator.trans('mosparo-integration.admin.host_label', {}, true),
      type: 'string',
    }))
    .setting(() => ({
      setting: 'mosparo.uuid',
      label: app.translator.trans('mosparo-integration.admin.uuid_label', {}, true),
      type: 'string',
    }))
    .setting(() => ({
      setting: 'mosparo.publicKey',
      label: app.translator.trans('mosparo-integration.admin.public_key_label', {}, true),
      type: 'string',
    }))
    .setting(() => ({
      setting: 'mosparo.privateKey',
      label: app.translator.trans('mosparo-integration.admin.private_key_label', {}, true),
      type: 'password',
    }))
    .setting(() => ({
      setting: 'mosparo.verifySsl',
      label: app.translator.trans('mosparo-integration.admin.verify_ssl_label', {}, true),
      type: 'bool',
      default: true,
    })),
];
