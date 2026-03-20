"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarietalMappingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const varietal_mappings_service_1 = require("./varietal-mappings.service");
const varietal_mappings_controller_1 = require("./varietal-mappings.controller");
const varietal_mapping_entity_1 = require("./entities/varietal-mapping.entity");
const wines_module_1 = require("../wines/wines.module");
let VarietalMappingsModule = class VarietalMappingsModule {
};
exports.VarietalMappingsModule = VarietalMappingsModule;
exports.VarietalMappingsModule = VarietalMappingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([varietal_mapping_entity_1.VarietalMapping]), wines_module_1.WinesModule],
        controllers: [varietal_mappings_controller_1.VarietalMappingsController],
        providers: [varietal_mappings_service_1.VarietalMappingsService],
        exports: [varietal_mappings_service_1.VarietalMappingsService],
    })
], VarietalMappingsModule);
//# sourceMappingURL=varietal-mappings.module.js.map