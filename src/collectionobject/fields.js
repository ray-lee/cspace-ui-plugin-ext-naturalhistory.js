import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_naturalhistory': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/naturalhistory',
        },
      },
      taxonomicIdentGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        taxonomicIdentGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.taxonomicIdentGroup.name',
                defaultMessage: 'Determination history',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          taxon: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_naturalhistory.taxon.name',
                  defaultMessage: 'Scientific name',
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
          qualifier: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.qualifier.fullName',
                  defaultMessage: 'Taxonomic identification qualifier',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.qualifier.name',
                  defaultMessage: 'Qualifier',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'taxonqualifier',
                },
              },
            },
          },
          identBy: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.identBy.fullName',
                  defaultMessage: 'Taxonomic identification by name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.identBy.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,organization/local',
                },
              },
            },
          },
          identDateGroup: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.identDateGroup.fullName',
                  defaultMessage: 'Taxonomic identification date',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.identDateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
          institution: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.institution.fullName',
                  defaultMessage: 'Taxonomic identification institution',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.institution.name',
                  defaultMessage: 'Institution',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
          identKind: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.identKind.fullName',
                  defaultMessage: 'Taxonomic identification kind',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.identKind.name',
                  defaultMessage: 'Kind',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'taxonkind',
                },
              },
            },
          },
          reference: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.reference.fullName',
                  defaultMessage: 'Taxonomic identification reference source',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.reference.name',
                  defaultMessage: 'Source',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          refPage: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.refPage.fullName',
                  defaultMessage: 'Taxonomic identification reference page',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.refPage.name',
                  defaultMessage: 'Page',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          notes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.notes.fullName',
                  defaultMessage: 'Taxonomic identification note',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.notes.name',
                  defaultMessage: 'Note',
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
          // TODO:
          // taxonomicIdentHybridParentGroupList: {
          //   taxonomicIdentHybridParentGroup: {
          //     taxonomicIdentHybridParent: {
          //     },
          //     taxonomicIdentHybridParentQualifier: {
          //     },
          //   },
          // },
          // taxonomicIdentHybridName: {
          // },
          // affinityTaxon: {
          // },
          // hybridFlag: {
          // },
          //
          // etc
        },
      },
    },
  };
};
