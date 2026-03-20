import { WinesService } from './wines.service';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
export declare class WinesController {
    private readonly winesService;
    constructor(winesService: WinesService);
    create(createWineDto: CreateWineDto): Promise<import("./entities/wine.entity").Wine>;
    findAll(): Promise<import("./entities/wine.entity").Wine[]>;
    getVarietals(): Promise<string[]>;
    findByVarietal(varietal: string): Promise<import("./entities/wine.entity").Wine[]>;
    findOne(id: number): Promise<import("./entities/wine.entity").Wine>;
    update(id: number, updateWineDto: UpdateWineDto): Promise<import("./entities/wine.entity").Wine>;
    remove(id: number): Promise<void>;
}
