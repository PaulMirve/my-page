import Icons from "../enumerables/Icons";

export default interface IProject {
    img: string,
    modalImg: string,
    name: string,
    description: string,
    repo: string,
    live: string,
    orientation?: "right" | "left",
    stack: Icons[]
}