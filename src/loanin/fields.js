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
    'ns2:loansin_naturalhistory_extension': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/loanin/domain/naturalhistory_extension',
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
                id: 'field.loansin_naturalhistory.returnGroup.fullName',
                defaultMessage: 'Item returned',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          returnObjectNumbers: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.returnObjectNumbers.fullName',
                  defaultMessage: 'Item returned object numbers',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnObjectNumbers.name',
                  defaultMessage: 'Object numbers',
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
                  id: 'field.loansin_naturalhistory.returnQuantity.fullName',
                  defaultMessage: 'Item returned quantity',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnQuantity.name',
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
                  id: 'field.loansin_naturalhistory.returnDate.fullName',
                  defaultMessage: 'Item returned date',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnDate.name',
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
                  id: 'field.loansin_naturalhistory.returnNotes.fullName',
                  defaultMessage: 'Item returned note',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnNotes.name',
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
                  id: 'field.loansin_naturalhistory.returnDetermination.fullName',
                  defaultMessage: 'Item returned new determination',
                },
                name: {
                  id: 'field.loansin_naturalhistory.returnDetermination.name',
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
      transferOutGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        transferOutGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_naturalhistory.transferOutGroup.fullName',
                defaultMessage: 'Item transferred out',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          transferOutDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutDate.fullName',
                  defaultMessage: 'Item transferred out date',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          transferOutQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutQuantity.fullName',
                  defaultMessage: 'Item transferred out quantity',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOutOrg: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutOrg.fullName',
                  defaultMessage: 'Item transferred out institution',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutOrg.name',
                  defaultMessage: 'Institution',
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
          transferOutPerson: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutPerson.fullName',
                  defaultMessage: 'Item transferred out for study by',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutPerson.name',
                  defaultMessage: 'For study by',
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
          transferOutDirector: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutDirector.fullName',
                  defaultMessage: 'Item transferred out under direction of',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutDirector.name',
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
          transferOutNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutNotes.fullName',
                  defaultMessage: 'Item transferred out note',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutNotes.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOutReturnDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnDate.fullName',
                  defaultMessage: 'Item transferred out return date',
                },
                groupName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnDate.groupName',
                  defaultMessage: 'Return date',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutReturnDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          transferOutReturnQuantity: {
            [config]: {
              dataType: DATA_TYPE_INT,
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnQuantity.fullName',
                  defaultMessage: 'Item transferred out return quantity',
                },
                groupName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnQuantity.groupName',
                  defaultMessage: 'Return quantity',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutReturnQuantity.name',
                  defaultMessage: 'Quantity',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          transferOutReturnNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnNotes.fullName',
                  defaultMessage: 'Item transferred out return note',
                },
                groupName: {
                  id: 'field.loansin_naturalhistory.transferOutReturnNotes.groupName',
                  defaultMessage: 'Return note',
                },
                name: {
                  id: 'field.loansin_naturalhistory.transferOutReturnNotes.name',
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
