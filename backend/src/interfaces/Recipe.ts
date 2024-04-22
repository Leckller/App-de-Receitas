export default interface Recipe {
    id: number,
    name: string,
    description: string,
    steps: string[],
    ingredients: string[],
    time: number,
}