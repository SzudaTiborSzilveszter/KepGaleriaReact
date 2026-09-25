import type { KepTipus } from "../adat";
import KisKep from "./Kiskep";

interface GaleriaProps{
    lista: KepTipus[],
    kivalasztKezelo:(index:number)=>void
}
export default function Kepek({lista,kivalasztKezelo}:GaleriaProps){
    return(
        <>
            {
                lista.map((e,i)=>{
                    return <KisKep kepem={e} key={i} index={i} kivalasztKezelo={kivalasztKezelo}/>
                })
            }
        </>
    )
}