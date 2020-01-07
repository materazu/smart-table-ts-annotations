"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("./constants");
function SmartTableConfig(configs) {
    return (target, propertyKey) => {
        const allMetadata = Reflect.getMetadata(constants_1.SMART_TABLE_CONFIG_KEY, target) || {};
        allMetadata[propertyKey] = allMetadata[propertyKey] || {};
        for (const key of Reflect.ownKeys(configs)) {
            allMetadata[propertyKey][key] = configs[key];
        }
        Reflect.defineMetadata(constants_1.SMART_TABLE_CONFIG_KEY, allMetadata, target);
    };
}
exports.SmartTableConfig = SmartTableConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU21hcnRUYWJsZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvU21hcnRUYWJsZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUUxQiwyQ0FBcUQ7QUFJckQsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBbUI7SUFDbEQsT0FBTyxDQUFDLE1BQVcsRUFBRSxXQUE0QixFQUFFLEVBQUU7UUFDbkQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxrQ0FBc0IsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUM7UUFFRCxPQUFPLENBQUMsY0FBYyxDQUNwQixrQ0FBc0IsRUFDdEIsV0FBVyxFQUNYLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQWhCRCw0Q0FnQkMifQ==