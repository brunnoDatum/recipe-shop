import { Ingredient } from './ingredient.model';

export class Recipe {

    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        public imagePath?: string,
        public ingredients?: Ingredient[]
    ) { }

}

// export interface RecipeListResponse {
//     recipes?: Recipe[];
// }

// export interface Recipe {
//     vegetarian?: boolean;
//     vegan?: boolean;
//     glutenFree?: boolean;
//     dairyFree?: boolean;
//     veryHealthy?: boolean;
//     cheap?: boolean;
//     veryPopular?: boolean;
//     sustainable?: boolean;
//     weightWatcherSmartPoints?: number;
//     gaps?: string;
//     lowFodmap?: boolean;
//     aggregateLikes?: number;
//     spoonacularScore?: number;
//     healthScore?: number;
//     creditsText?: string;
//     license?: string;
//     sourceName?: string;
//     pricePerServing?: number;
//     extendedIngredients?: ExtendedIngredient[];
//     id?: number;
//     title?: string;
//     readyInMinutes?: number;
//     servings?: number;
//     sourceUrl?: string;
//     image?: string;
//     imageType?: string;
//     summary?: string;
//     cuisines?: string[];
//     dishTypes?: string[];
//     diets?: string[];
//     occasions?: string[];
//     instructions?: string;
//     analyzedInstructions?: AnalyzedInstruction[];
//     originalId?: null;
//     spoonacularSourceUrl?: string;
// }

// export interface AnalyzedInstruction {
//     name?: string;
//     steps?: Step[];
// }

// export interface Step {
//     number?: number;
//     step?: string;
//     ingredients?: Ent[];
//     equipment?: Ent[];
//     length?: Length;
// }

// export interface Ent {
//     id?: number;
//     name?: string;
//     localizedName?: string;
//     image?: string;
//     temperature?: Length;
// }

// export interface Length {
//     number?: number;
//     unit?: string;
// }

// export interface ExtendedIngredient {
//     id?: number;
//     aisle?: string;
//     image?: string;
//     consistency?: Consistency;
//     name?: string;
//     nameClean?: string;
//     original?: string;
//     originalString?: string;
//     originalName?: string;
//     amount?: number;
//     unit?: string;
//     meta?: string[];
//     metaInformation?: string[];
//     measures?: Measures;
// }

// export enum Consistency {
//     Liquid = 'liquid',
//     Solid = 'solid',
// }

// export interface Measures {
//     us?: Metric;
//     metric?: Metric;
// }

// export interface Metric {
//     amount?: number;
//     unitShort?: string;
//     unitLong?: string;
// }
