export default interface ICard {
    heading: string,
    title: string,
    description: string,
    buttonText?: string,
    buttonAction?: () => void
}