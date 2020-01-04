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
    'ns2:objectexit_naturalhistory_extension': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/objectexit/domain/naturalhistory_extension',
        },
      },
      count: {
        [config]: {
          dataType: DATA_TYPE_INT,
          messages: defineMessages({
            name: {
              id: 'field.objectexit_naturalhistory.count.name',
              defaultMessage: 'Count',
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
