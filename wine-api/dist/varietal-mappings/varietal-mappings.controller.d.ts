import { VarietalMappingsService } from './varietal-mappings.service';
import { CreateVarietalMappingDto } from './dto/create-varietal-mapping.dto';
export declare class VarietalMappingsController {
    private readonly mappingsService;
    constructor(mappingsService: VarietalMappingsService);
    create(dto: CreateVarietalMappingDto): Promise<import("./entities/varietal-mapping.entity").VarietalMapping>;
    findAll(): Promise<Record<string, number[]>>;
    getVarietals(): Promise<string[]>;
    getRecommendations(varietals: string, limit?: string): Promise<import("../wines/entities/wine.entity").Wine[]>;
    findByVarietal(varietal: string): Promise<import("../wines/entities/wine.entity").Wine[]>;
    remove(varietal: string, wineId: number): Promise<void>;
}
