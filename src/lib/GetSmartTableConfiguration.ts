import 'reflect-metadata';

import { SMART_TABLE_CONFIG_KEY } from './constants';

export function GetSmartTableConfiguration(entity) {
  const formlyConfig = [];
  const entityInstance = new entity();
  const configs = Reflect.getMetadata(SMART_TABLE_CONFIG_KEY, entityInstance);

  Object.keys(configs).forEach(key => {
    formlyConfig.push({
      key,
      ...configs[key]
    });
  });

  return formlyConfig;
}
