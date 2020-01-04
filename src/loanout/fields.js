import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    'ns2:loansout_naturalhistory_extension': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/loanout/domain/naturalhistory_extension',
        },
      },
      numLent: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.loansout_naturalhistory.numLent.name',
              defaultMessage: 'Number lent',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
    },
  };
};
