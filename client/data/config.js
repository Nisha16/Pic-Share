import Raven from 'raven-js';

const sentry_key = '894d7785a2c941429e5d93848bdc08a6';
const sentry_app = '91517';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  //window && window.console && console.error && console.error(ex);
}
