import 'reflect-metadata';

import { SMART_TABLE_CONFIG_KEY } from './constants';

import { SmartTable } from '../interfaces/smart-table';

export function SmartTableConfig(configs: SmartTable) {
  return (target: any, propertyKey: string | symbol) => {
    const allMetadata = Reflect.getMetadata(SMART_TABLE_CONFIG_KEY, target) || {};

    allMetadata[propertyKey] = allMetadata[propertyKey] || {};

    for (const key of Reflect.ownKeys(configs)) {
      allMetadata[propertyKey][key] = configs[key];
    }

    Reflect.defineMetadata(
      SMART_TABLE_CONFIG_KEY,
      allMetadata,
      target,
    );
  }
}
