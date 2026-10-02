import type { KepTipus } from "../adat";
import KisKep from "./Kiskep";

interface GaleriaProps{
    lista: KepTipus[],
    kepKivalaszt:(index:number)=>void
}
export default function Kepek({lista,kepKivalaszt}:GaleriaProps){
    return(
        <>
            {
                lista.map((e,i)=>{
                    return <KisKep kepem={e} key={i} index={i} kepKivalaszt={kepKivalaszt}/>
                })
            }
        </>
    )
}