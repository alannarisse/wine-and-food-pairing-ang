import { Repository } from 'typeorm';
import { VarietalMapping } from './entities/varietal-mapping.entity';
import { CreateVarietalMappingDto } from './dto/create-varietal-mapping.dto';
import { WinesService } from '../wines/wines.service';
import { Wine } from '../wines/entities/wine.entity';
export declare class VarietalMappingsService {
    private readonly mappingRepository;
    private readonly winesService;
    constructor(mappingRepository: Repository<VarietalMapping>, winesService: WinesService);
    create(dto: CreateVarietalMappingDto): Promise<VarietalMapping>;
    findAll(): Promise<Record<string, number[]>>;
    findByVarietal(varietal: string): Promise<VarietalMapping[]>;
    getWinesForVarietal(varietal: string): Promise<Wine[]>;
    getRecommendations(varietals: string[], limit?: number): Promise<Wine[]>;
    remove(varietal: string, wineId: number): Promise<void>;
    getAvailableVarietals(): Promise<string[]>;
}
