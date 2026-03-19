import arrowDownLeft from '../../assets/arrow-down-left.png'
import './sectionTitle.css'

export default function SectionTitle({title}) {
    return (
        <div className='section-title'>
            <h2>{title}</h2>
            <img src={arrowDownLeft} alt="Seta para baixo e para a esquerda" />
        </div>
    )
}