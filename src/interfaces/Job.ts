import Icons from "../enumerables/Icons";

export default interface IJob {
    name: string,
    title: string,
    tasks: string[],
    stack: Icons[],
    current?: boolean
}