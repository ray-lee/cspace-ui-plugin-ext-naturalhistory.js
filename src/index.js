import collectionobject from './collectionobject';

module.exports = () => configContext => ({
  extensions: {
    naturalhistory: {
      collectionobject: collectionobject(configContext),
    },
  },
});
