"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("./constants");
function GetSmartTableConfiguration(entity) {
    const smartTableConfig = {};
    const entityInstance = new entity();
    const configs = Reflect.getMetadata(constants_1.SMART_TABLE_CONFIG_KEY, entityInstance);
    Object.keys(configs).forEach(key => {
        smartTableConfig[key] = configs[key];
    });
    return smartTableConfig;
}
exports.GetSmartTableConfiguration = GetSmartTableConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0U21hcnRUYWJsZUNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0dldFNtYXJ0VGFibGVDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRTFCLDJDQUFxRDtBQUVyRCxTQUFnQiwwQkFBMEIsQ0FBQyxNQUFNO0lBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUFDcEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxrQ0FBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUU1RSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNqQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUM7QUFWRCxnRUFVQyJ9