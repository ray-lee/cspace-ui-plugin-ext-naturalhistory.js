import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_naturalhistory_extension': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/naturalhistory_extension',
        },
      },
      // FIXME: determinationHistoryGroupList appears to be redundant with taxonomicIdentGroupList.
      // taxonomicIdentGroupList is used by the botgarden and anthro profiles.
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
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.taxon.fullName',
                  defaultMessage: 'Taxonomic identification scientific name',
                },
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
                  defaultMessage: 'Taxonomic identification by',
                },
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.identBy.groupName',
                  defaultMessage: 'Identification by',
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
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.identDateGroup.groupName',
                  defaultMessage: 'Identification date',
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
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.institution.groupName',
                  defaultMessage: 'Identification institution',
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
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.reference.groupName',
                  defaultMessage: 'Reference source',
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
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.refPage.groupName',
                  defaultMessage: 'Reference page',
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
          taxonomicIdentHybridParentGroupList: {
            [config]: {
              view: {
                type: CompoundInput,
              },
            },
            taxonomicIdentHybridParentGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_naturalhistory.taxonomicIdentHybridParentGroup.name',
                    defaultMessage: 'Hybrid parent',
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
              taxonomicIdentHybridParent: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.collectionobjects_naturalhistory.taxonomicIdentHybridParent.fullName',
                      defaultMessage: 'Hybrid parent name',
                    },
                    name: {
                      id: 'field.collectionobjects_naturalhistory.taxonomicIdentHybridParent.name',
                      defaultMessage: 'Name',
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
              taxonomicIdentHybridParentQualifier: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.collectionobjects_naturalhistory.taxonomicIdentHybridParentQualifier.fullName',
                      defaultMessage: 'Hybrid parent qualifier',
                    },
                    name: {
                      id: 'field.collectionobjects_naturalhistory.taxonomicIdentHybridParentQualifier.name',
                      defaultMessage: 'Qualifier',
                    },
                  }),
                  view: {
                    type: TermPickerInput,
                    props: {
                      source: 'hybridparentqualifier',
                    },
                  },
                },
              },
            },
          },
          // taxonomicIdentHybridName was configured in 4.5, but doesn't appear to be used.
          // taxonomicIdentHybridName: {
          //   [config]: {
          //     messages: defineMessages({
          //       name: {
          //         id: 'field.collectionobjects_naturalhistory.taxonomicIdentHybridName.name',
          //         defaultMessage: 'Hybrid name',
          //       },
          //     }),
          //     view: {
          //       type: TextInput,
          //     },
          //   },
          // },
          affinityTaxon: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_naturalhistory.affinityTaxon.name',
                  defaultMessage: 'Affinity taxon',
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
          hybridFlag: {
            [config]: {
              dataType: DATA_TYPE_BOOL,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_naturalhistory.hybridFlag.name',
                  defaultMessage: 'Hybrid flag',
                },
              }),
              view: {
                type: CheckboxInput,
              },
            },
          },
        },
      },
      // FIXME: determinationHistoryGroupList appears to be redundant with taxonomicIdentGroupList.
      // determinationHistoryGroupList is used by the herbarium profile.
      determinationHistoryGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        determinationHistoryGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.determinationHistoryGroup.name',
                defaultMessage: 'Determination history',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          determinationTaxon: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationTaxon.fullName',
                  defaultMessage: 'Taxonomic identification scientific name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationTaxon.name',
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
          determinationQualifier: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationQualifier.fullName',
                  defaultMessage: 'Taxonomic identification qualifier',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationQualifier.name',
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
          determinationBy: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationBy.fullName',
                  defaultMessage: 'Taxonomic identification by',
                },
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.determinationBy.groupName',
                  defaultMessage: 'Identification by',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationBy.name',
                  defaultMessage: 'Name',
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
          determinationDateGroup: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationDateGroup.fullName',
                  defaultMessage: 'Taxonomic identification date',
                },
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.determinationDateGroup.groupName',
                  defaultMessage: 'Identification date',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationDateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
          determinationInstitution: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationInstitution.fullName',
                  defaultMessage: 'Taxonomic identification institution',
                },
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.determinationInstitution.groupName',
                  defaultMessage: 'Identification institution',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationInstitution.name',
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
          determinationKind: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationKind.fullName',
                  defaultMessage: 'Taxonomic identification kind',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationKind.name',
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
          determinationReference: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationReference.fullName',
                  defaultMessage: 'Taxonomic identification reference source',
                },
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.determinationReference.groupName',
                  defaultMessage: 'Reference source',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationReference.name',
                  defaultMessage: 'Source',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          determinationRefPage: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationRefPage.fullName',
                  defaultMessage: 'Taxonomic identification reference page',
                },
                groupName: {
                  id: 'field.collectionobjects_naturalhistory.determinationRefPage.groupName',
                  defaultMessage: 'Reference page',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationRefPage.name',
                  defaultMessage: 'Page',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          determinationNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.determinationNote.fullName',
                  defaultMessage: 'Taxonomic identification note',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.determinationNote.name',
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
        },
      },
      typeSpecimenGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        typeSpecimenGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.typeSpecimenGroup.name',
                defaultMessage: 'Type specimen',
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
          typeSpecimenKind: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenKind.fullName',
                  defaultMessage: 'Type specimen kind',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenKind.name',
                  defaultMessage: 'Kind',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'typespecimenkind',
                },
              },
            },
          },
          typeSpecimenAssertionBy: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenAssertionBy.fullName',
                  defaultMessage: 'Type specimen asserted by',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenAssertionBy.name',
                  defaultMessage: 'Asserted by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          typeSpecimenReference: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenReference.fullName',
                  defaultMessage: 'Type specimen reference',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenReference.name',
                  defaultMessage: 'Reference',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          typeSpecimenRefPage: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenRefPage.fullName',
                  defaultMessage: 'Type specimen reference page',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenRefPage.name',
                  defaultMessage: 'Page',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          typeSpecimenBasionym: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenBasionym.fullName',
                  defaultMessage: 'Type specimen verified basionym',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenBasionym.name',
                  defaultMessage: 'Verified basionym',
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
          typeSpecimenNotes: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenNotes.fullName',
                  defaultMessage: 'Type specimen note',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.typeSpecimenNotes.name',
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
      vegetationType: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.vegetationType.name',
              defaultMessage: 'Vegetation type',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'vegetationtype',
            },
          },
        },
      },
      associatedTaxaGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        associatedTaxaGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_naturalhistory.associatedTaxaGroup.name',
                defaultMessage: 'Associated taxa',
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
          associatedTaxon: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.associatedTaxon.fullName',
                  defaultMessage: 'Associated taxon name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.associatedTaxon.name',
                  defaultMessage: 'Name',
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
          commonName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.commonName.fullName',
                  defaultMessage: 'Associated taxon common name',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.commonName.name',
                  defaultMessage: 'Common name',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          interaction: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_naturalhistory.interaction.fullName',
                  defaultMessage: 'Associated taxon interaction',
                },
                name: {
                  id: 'field.collectionobjects_naturalhistory.interaction.name',
                  defaultMessage: 'Interaction',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'assoctaxoninteraction',
                },
              },
            },
          },
        },
      },
    },
  };
};
