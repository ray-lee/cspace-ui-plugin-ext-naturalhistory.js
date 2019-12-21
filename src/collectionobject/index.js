import fields from './fields';
import form from './form';
import messages from './messages';

export default (configContext) => ({
  messages,
  fields: fields(configContext),
  form: form(configContext),
});
