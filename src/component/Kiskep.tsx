import './Kep.css'
import type { KepTipus } from "../adat"

interface KepProps{
    kepem: KepTipus,
    index: number,
    kivalasztKezelo:(index:number)=>void
}
export default function KisKep({kepem,index, kivalasztKezelo}:KepProps){
    return(
        <>
            <div>
                <img onClick={()=>{kivalasztKezelo(index)}} src={kepem.src} alt={kepem.title} />
            </div>
        </>
    )
}