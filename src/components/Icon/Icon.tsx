import { SVGProps } from "react"
import Icons from "../../enumerables/Icons"
import sprite from '../../img/sprite.svg'

interface Props extends SVGProps<SVGSVGElement> {
    icon: Icons
}

const Icon: React.FC<Props> = ({ icon, ...rest }) => {
    return (
        <svg {...rest}>
            <use href={`${sprite}#${icon}`}></use>
        </svg>
    )
}

export default Icon
