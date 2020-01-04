import taxonomicIdentGroupList from './taxonomicIdentGroupList';
import typeSpecimenGroupList from './typeSpecimenGroupList';

export default (configContext) => ({
  taxonomicIdentGroupList: taxonomicIdentGroupList(configContext),
  typeSpecimenGroupList: typeSpecimenGroupList(configContext),
});
