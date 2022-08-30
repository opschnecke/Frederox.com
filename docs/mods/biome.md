# Biomes
To register a biome you can create a file in the `Biomes/` folder with the extension `.biome.json`

```ts
interface Biome {
    identifier: string,
    surface_parameters: {
        top_material: string,
        mid_material: string,
        foundation_material: string
    },
    climate: {
        rainfall: number,
        temperature: number
    },
    flora: Flora[],
    features: Feature[]
}
```

## Flora
Flora is the most simple type of feature, it can be used to place single blocks on the surface, useful for flowers or grass

```ts
interface Flora {
    block: string,
    weight: number
}
```

## Features
There are multiple types of feature, determined by the `feature_type` property

## None
```ts
interface Feature {
    feature_type: "none",
    weight: number
}
```
The `none` feature type is used for reducing the chance of other features from spawning

## Tall Plants
```ts
interface Feature {
    feature_type: "tall_plant",
    weight: number,
    mid_block: string,
    top_block: string
}
```
The `tall_plant` feature type is used for creating plants out of multiple blocks

## Tree
```ts
interface Feature {
    feature_type: "tree",
    weight: number,
    log: string,
    leaves: string
}
```
The `tree` feature creates simple trees