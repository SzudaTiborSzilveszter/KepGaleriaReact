import type { KepTipus } from "../adat";

interface NagyKepProps{
    kepem: KepTipus
}

export default function NagyKep({kepem}:NagyKepProps){
    return(
        <>
            <div className="NagyKepTarolo">
                <img src={kepem.src} alt={kepem.title} />
            </div>
        </>
    )
}