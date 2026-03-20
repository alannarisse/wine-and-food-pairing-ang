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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarietalMapping = void 0;
const typeorm_1 = require("typeorm");
const wine_entity_1 = require("../../wines/entities/wine.entity");
let VarietalMapping = class VarietalMapping {
    id;
    varietal;
    wineId;
    wine;
    createdAt;
};
exports.VarietalMapping = VarietalMapping;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VarietalMapping.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VarietalMapping.prototype, "varietal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VarietalMapping.prototype, "wineId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wine_entity_1.Wine, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'wineId' }),
    __metadata("design:type", wine_entity_1.Wine)
], VarietalMapping.prototype, "wine", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VarietalMapping.prototype, "createdAt", void 0);
exports.VarietalMapping = VarietalMapping = __decorate([
    (0, typeorm_1.Entity)('varietal_mappings')
], VarietalMapping);
//# sourceMappingURL=varietal-mapping.entity.js.map