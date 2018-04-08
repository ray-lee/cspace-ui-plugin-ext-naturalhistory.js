export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="taxonomicIdentGroupList" subpath="ns2:collectionobjects_naturalhistory_extension">
      <Field name="taxonomicIdentGroup">
        <Panel>
          <InputTable name="taxonName">
            <Field name="taxon" />
            <Field name="qualifier" />
          </InputTable>

          <InputTable name="taxonIdent">
            <Field name="identBy" />
            <Field name="identDateGroup" />
            <Field name="institution" />
          </InputTable>

          <Cols>
            <Col>
              <Field name="identKind" />

              <InputTable name="taxonReference">
                <Field name="reference" />
                <Field name="refPage" />
              </InputTable>
            </Col>

            <Field name="notes" />
          </Cols>
        </Panel>
      </Field>
    </Field>
  );
};
