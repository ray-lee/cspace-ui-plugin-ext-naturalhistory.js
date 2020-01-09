import collectionobject from './collectionobject';
import loanin from './loanin';
import loanout from './loanout';
import objectexit from './objectexit';

export default () => (configContext) => ({
  extensions: {
    naturalhistory: {
      collectionobject: collectionobject(configContext),
      loanin: loanin(configContext),
      loanout: loanout(configContext),
      objectexit: objectexit(configContext),
    },
  },
});
