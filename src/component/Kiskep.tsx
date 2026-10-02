import './Kep.css'
import type { KepTipus } from "../adat"

interface KepProps{
    kepem: KepTipus,
    index: number,
    kepKivalaszt:(index:number)=>void
}
export default function KisKep({kepem,index, kepKivalaszt}:KepProps){
    return(
        <>
            <div>
                <img onClick={()=>{kepKivalaszt(index)}} src={kepem.src} alt={kepem.title} />
            </div>
        </>
    )
}