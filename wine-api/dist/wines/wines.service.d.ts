import { Repository } from 'typeorm';
import { Wine } from './entities/wine.entity';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
export declare class WinesService {
    private readonly wineRepository;
    constructor(wineRepository: Repository<Wine>);
    create(createWineDto: CreateWineDto): Promise<Wine>;
    findAll(): Promise<Wine[]>;
    findOne(id: number): Promise<Wine>;
    findByIds(ids: number[]): Promise<Wine[]>;
    findByVarietal(varietal: string): Promise<Wine[]>;
    update(id: number, updateWineDto: UpdateWineDto): Promise<Wine>;
    remove(id: number): Promise<void>;
    getAvailableVarietals(): Promise<string[]>;
}
