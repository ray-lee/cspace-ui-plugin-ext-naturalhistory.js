export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="typeSpecimenGroupList" subpath="ns2:collectionobjects_naturalhistory_extension">
      <Field name="typeSpecimenGroup">
        <Field name="typeSpecimenKind" />
        <Field name="typeSpecimenAssertionBy" />
        <Field name="typeSpecimenReference" />
        <Field name="typeSpecimenRefPage" />
        <Field name="typeSpecimenBasionym" />
        <Field name="typeSpecimenNotes" />
      </Field>
    </Field>
  );
};
