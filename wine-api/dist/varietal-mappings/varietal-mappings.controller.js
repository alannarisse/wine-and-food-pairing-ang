"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarietalMappingsController = void 0;
const common_1 = require("@nestjs/common");
const varietal_mappings_service_1 = require("./varietal-mappings.service");
const create_varietal_mapping_dto_1 = require("./dto/create-varietal-mapping.dto");
let VarietalMappingsController = class VarietalMappingsController {
    mappingsService;
    constructor(mappingsService) {
        this.mappingsService = mappingsService;
    }
    create(dto) {
        return this.mappingsService.create(dto);
    }
    findAll() {
        return this.mappingsService.findAll();
    }
    getVarietals() {
        return this.mappingsService.getAvailableVarietals();
    }
    getRecommendations(varietals, limit) {
        const varietalList = varietals.split(',').map((v) => v.trim());
        const limitNum = limit ? parseInt(limit, 10) : 10;
        return this.mappingsService.getRecommendations(varietalList, limitNum);
    }
    findByVarietal(varietal) {
        return this.mappingsService.getWinesForVarietal(varietal);
    }
    remove(varietal, wineId) {
        return this.mappingsService.remove(varietal, wineId);
    }
};
exports.VarietalMappingsController = VarietalMappingsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_varietal_mapping_dto_1.CreateVarietalMappingDto]),
    __metadata("design:returntype", void 0)
], VarietalMappingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VarietalMappingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('varietals'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VarietalMappingsController.prototype, "getVarietals", null);
__decorate([
    (0, common_1.Get)('recommendations'),
    __param(0, (0, common_1.Query)('varietals')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VarietalMappingsController.prototype, "getRecommendations", null);
__decorate([
    (0, common_1.Get)(':varietal'),
    __param(0, (0, common_1.Param)('varietal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VarietalMappingsController.prototype, "findByVarietal", null);
__decorate([
    (0, common_1.Delete)(':varietal/:wineId'),
    __param(0, (0, common_1.Param)('varietal')),
    __param(1, (0, common_1.Param)('wineId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], VarietalMappingsController.prototype, "remove", null);
exports.VarietalMappingsController = VarietalMappingsController = __decorate([
    (0, common_1.Controller)('varietal-mappings'),
    __metadata("design:paramtypes", [varietal_mappings_service_1.VarietalMappingsService])
], VarietalMappingsController);
//# sourceMappingURL=varietal-mappings.controller.js.map