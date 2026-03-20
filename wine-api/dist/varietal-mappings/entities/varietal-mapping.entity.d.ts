import { Wine } from '../../wines/entities/wine.entity';
export declare class VarietalMapping {
    id: number;
    varietal: string;
    wineId: number;
    wine: Wine;
    createdAt: Date;
}
