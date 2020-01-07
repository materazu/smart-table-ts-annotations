"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("./constants");
function GetSmartTableConfiguration(entity) {
    const formlyConfig = [];
    const entityInstance = new entity();
    const configs = Reflect.getMetadata(constants_1.SMART_TABLE_CONFIG_KEY, entityInstance);
    Object.keys(configs).forEach(key => {
        formlyConfig.push(Object.assign({ key }, configs[key]));
    });
    return formlyConfig;
}
exports.GetSmartTableConfiguration = GetSmartTableConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0U21hcnRUYWJsZUNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0dldFNtYXJ0VGFibGVDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRTFCLDJDQUFxRDtBQUVyRCxTQUFnQiwwQkFBMEIsQ0FBQyxNQUFNO0lBQy9DLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0NBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDakMsWUFBWSxDQUFDLElBQUksaUJBQ2YsR0FBRyxJQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDZixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBYkQsZ0VBYUMifQ==