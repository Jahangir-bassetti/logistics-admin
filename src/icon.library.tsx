import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { fas } from '@fortawesome/free-solid-svg-icons';

const iconList: IconDefinition[] = Object.keys(fas)
  .filter((key) => key !== 'prefix')
  .map((icon) => fas[icon]);

library.add(...iconList);
export default iconList;
