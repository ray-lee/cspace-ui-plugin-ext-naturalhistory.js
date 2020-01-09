import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
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
      returnGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        returnGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_naturalhistory.returnGroup.fullName',
                defaultMessage: 'Item returned',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          returnObjectNumbers: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnObjectNumbers.fullName',
                  defaultMessage: 'Item returned object number(s)',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnObjectNumbers.name',
                  defaultMessage: 'Object number(s)',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnQuantity.fullName',
                  defaultMessage: 'Item returned quantity',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnDate.fullName',
                  defaultMessage: 'Item returned date',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          returnNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnNotes.fullName',
                  defaultMessage: 'Item returned note',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          returnDetermination: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.returnDetermination.fullName',
                  defaultMessage: 'Item returned new determination',
                },
                name: {
                  id: 'field.loansout_naturalhistory.returnDetermination.name',
                  defaultMessage: 'New determination',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
        },
      },
      loanoutItems: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.loansout_naturalhistory.loanoutItems.fullName',
              defaultMessage: 'Items loaned out accession numbers',
            },
            name: {
              id: 'field.loansout_naturalhistory.loanoutItems.name',
              defaultMessage: 'Accession numbers',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      objectGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        objectGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_naturalhistory.objectGroup.fullName',
                defaultMessage: 'Item loaned out',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          objectNumbers: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectNumbers.fullName',
                  defaultMessage: 'Item loaned out object number(s)',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectNumbers.name',
                  defaultMessage: 'Object number(s)',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          objectQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectQuantity.fullName',
                  defaultMessage: 'Item loaned out quantity',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          objectConditions: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectConditions.fullName',
                  defaultMessage: 'Item loaned out condition',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectConditions.name',
                  defaultMessage: 'Condition',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          objectNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.objectNotes.fullName',
                  defaultMessage: 'Item loaned out note',
                },
                name: {
                  id: 'field.loansout_naturalhistory.objectNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      transferGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        transferGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_naturalhistory.transferGroup.fullName',
                defaultMessage: 'Loan transfer',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          transferDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferDate.fullName',
                  defaultMessage: 'Transfer date',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          transferQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferQuantity.fullName',
                  defaultMessage: 'Transfer quantity',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOrg: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferOrg.fullName',
                  defaultMessage: 'Transfer to institution',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferOrg.name',
                  defaultMessage: 'To institution',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local,organization/shared',
                },
              },
            },
          },
          transferPerson: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferPerson.fullName',
                  defaultMessage: 'Transfer to person',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferPerson.name',
                  defaultMessage: 'To person',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
          transferDirector: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferDirector.fullName',
                  defaultMessage: 'Transfer under direction of',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferDirector.name',
                  defaultMessage: 'Under direction of',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
          transferNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansout_naturalhistory.transferNotes.fullName',
                  defaultMessage: 'Transfer note',
                },
                name: {
                  id: 'field.loansout_naturalhistory.transferNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
