import { Injectable, signal, computed } from '@angular/core';
import { Wine } from '../models/wine.model';
import { WINES_DATA, VARIETAL_TO_WINES, WINE_RECOMMENDATION_MESSAGE } from '../data/wines.data';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private readonly wines = signal<Wine[]>(WINES_DATA);
  private readonly varietalMapping = VARIETAL_TO_WINES;

  readonly recommendationMessage = WINE_RECOMMENDATION_MESSAGE;

  /**
   * Get all wines
   */
  getAllWines(): Wine[] {
    return this.wines();
  }

  /**
   * Get a single wine by ID
   */
  getWineById(id: number): Wine | undefined {
    return this.wines().find(wine => wine.id === id);
  }

  /**
   * Get wines for a specific varietal suggestion
   * @param varietal - The varietal name (e.g., "Pinot Noir", "Chardonnay")
   * @returns Array of Wine objects matching the varietal
   */
  getWinesForVarietal(varietal: string): Wine[] {
    // Try exact match first
    let wineIds = this.varietalMapping[varietal];

    // If no exact match, try to find a partial match
    if (!wineIds) {
      const varietalLower = varietal.toLowerCase();
      const matchingKey = Object.keys(this.varietalMapping).find(key =>
        key.toLowerCase().includes(varietalLower) ||
        varietalLower.includes(key.toLowerCase())
      );
      if (matchingKey) {
        wineIds = this.varietalMapping[matchingKey];
      }
    }

    if (!wineIds || wineIds.length === 0) {
      return [];
    }

    return wineIds
      .map(id => this.getWineById(id))
      .filter((wine): wine is Wine => wine !== undefined);
  }

  /**
   * Get wine recommendations for multiple varietal suggestions
   * Returns unique wines (no duplicates) limited to specified count
   * @param varietals - Array of varietal names from pairing suggestions
   * @param limit - Maximum number of wines to return (default 10)
   * @returns Array of unique Wine objects
   */
  getWineRecommendations(varietals: string[], limit: number = 10): Wine[] {
    const wineSet = new Map<number, Wine>();

    for (const varietal of varietals) {
      const wines = this.getWinesForVarietal(varietal);
      for (const wine of wines) {
        if (!wineSet.has(wine.id)) {
          wineSet.set(wine.id, wine);
        }
        // Stop if we've reached the limit
        if (wineSet.size >= limit) {
          break;
        }
      }
      if (wineSet.size >= limit) {
        break;
      }
    }

    return Array.from(wineSet.values());
  }

  /**
   * Format price for display
   */
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }

  /**
   * Format year for display (handles NV wines)
   */
  formatYear(year: number | null): string {
    return year ? year.toString() : 'NV';
  }

  /**
   * Get full wine display name
   */
  getWineDisplayName(wine: Wine): string {
    const year = this.formatYear(wine.year);
    return `${wine.wineryName} ${wine.wineName} ${year}`;
  }
}
