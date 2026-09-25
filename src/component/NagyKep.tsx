import type { KepTipus } from "../adat";

interface NagyKepProps{
    kepem: KepTipus
}
export default function NagyKep({kepem}:NagyKepProps){
    return(
        <>
            <div>
                <img src={kepem.src} alt={kepem.title} />
                <h2>{kepem.title}</h2>
            </div>
        </>
    )
}
