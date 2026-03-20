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
exports.VarietalMappingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const varietal_mapping_entity_1 = require("./entities/varietal-mapping.entity");
const wines_service_1 = require("../wines/wines.service");
let VarietalMappingsService = class VarietalMappingsService {
    mappingRepository;
    winesService;
    constructor(mappingRepository, winesService) {
        this.mappingRepository = mappingRepository;
        this.winesService = winesService;
    }
    async create(dto) {
        await this.winesService.findOne(dto.wineId);
        const existing = await this.mappingRepository.findOne({
            where: { varietal: dto.varietal, wineId: dto.wineId },
        });
        if (existing) {
            return existing;
        }
        const mapping = this.mappingRepository.create(dto);
        return this.mappingRepository.save(mapping);
    }
    async findAll() {
        const mappings = await this.mappingRepository.find({
            order: { varietal: 'ASC' },
        });
        const result = {};
        for (const mapping of mappings) {
            if (!result[mapping.varietal]) {
                result[mapping.varietal] = [];
            }
            result[mapping.varietal].push(mapping.wineId);
        }
        return result;
    }
    async findByVarietal(varietal) {
        return this.mappingRepository.find({
            where: { varietal },
            relations: ['wine'],
        });
    }
    async getWinesForVarietal(varietal) {
        const mappings = await this.findByVarietal(varietal);
        return mappings.map((m) => m.wine);
    }
    async getRecommendations(varietals, limit = 10) {
        const wineIds = new Set();
        const wines = [];
        for (const varietal of varietals) {
            if (wines.length >= limit)
                break;
            const mappings = await this.mappingRepository.find({
                where: { varietal },
                relations: ['wine'],
            });
            for (const mapping of mappings) {
                if (!wineIds.has(mapping.wineId) && wines.length < limit) {
                    wineIds.add(mapping.wineId);
                    wines.push(mapping.wine);
                }
            }
        }
        return wines;
    }
    async remove(varietal, wineId) {
        const mapping = await this.mappingRepository.findOne({
            where: { varietal, wineId },
        });
        if (!mapping) {
            throw new common_1.NotFoundException(`Mapping for varietal "${varietal}" and wine ID ${wineId} not found`);
        }
        await this.mappingRepository.remove(mapping);
    }
    async getAvailableVarietals() {
        const result = await this.mappingRepository
            .createQueryBuilder('mapping')
            .select('DISTINCT mapping.varietal', 'varietal')
            .orderBy('varietal', 'ASC')
            .getRawMany();
        return result.map((r) => r.varietal);
    }
};
exports.VarietalMappingsService = VarietalMappingsService;
exports.VarietalMappingsService = VarietalMappingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(varietal_mapping_entity_1.VarietalMapping)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wines_service_1.WinesService])
], VarietalMappingsService);
//# sourceMappingURL=varietal-mappings.service.js.map