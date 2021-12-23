export interface IJob {
    name: string,
    tasks: string[],
    stack: string[],
    current: boolean,
    order: number
}