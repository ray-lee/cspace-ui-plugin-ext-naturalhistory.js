export default (configContext) => {
  const {
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Field,
  } = recordComponents;

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
