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
exports.WinesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wine_entity_1 = require("./entities/wine.entity");
let WinesService = class WinesService {
    wineRepository;
    constructor(wineRepository) {
        this.wineRepository = wineRepository;
    }
    async create(createWineDto) {
        const wine = this.wineRepository.create(createWineDto);
        return this.wineRepository.save(wine);
    }
    async findAll() {
        return this.wineRepository.find({
            order: { wineryName: 'ASC', wineName: 'ASC' },
        });
    }
    async findOne(id) {
        const wine = await this.wineRepository.findOne({ where: { id } });
        if (!wine) {
            throw new common_1.NotFoundException(`Wine with ID ${id} not found`);
        }
        return wine;
    }
    async findByIds(ids) {
        return this.wineRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
    }
    async findByVarietal(varietal) {
        return this.wineRepository.find({
            where: { varietal },
            order: { wineryName: 'ASC' },
        });
    }
    async update(id, updateWineDto) {
        const wine = await this.findOne(id);
        Object.assign(wine, updateWineDto);
        return this.wineRepository.save(wine);
    }
    async remove(id) {
        const wine = await this.findOne(id);
        await this.wineRepository.remove(wine);
    }
    async getAvailableVarietals() {
        const result = await this.wineRepository
            .createQueryBuilder('wine')
            .select('DISTINCT wine.varietal', 'varietal')
            .orderBy('varietal', 'ASC')
            .getRawMany();
        return result.map((r) => r.varietal);
    }
};
exports.WinesService = WinesService;
exports.WinesService = WinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wine_entity_1.Wine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WinesService);
//# sourceMappingURL=wines.service.js.map