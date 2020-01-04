import collectionobject from './collectionobject';
import loanout from './loanout';
import objectexit from './objectexit';

export default () => (configContext) => ({
  extensions: {
    naturalhistory: {
      collectionobject: collectionobject(configContext),
      loanout: loanout(configContext),
      objectexit: objectexit(configContext),
    },
  },
});
