import { useState } from 'react'
import { KEPTIPUS, type KepTipus } from './adat'
import './App.css'
import KisKep from './component/Galeria'
import NagyKep from './component/NagyKep'

function App() {
  const [lista] =useState<KepTipus[]>(KEPTIPUS)
  function kivalasztKezelo(index:number){
    console.log(index)
  }
  return (
    <>
      <header>Képek</header>
      <section>
        <NagyKep kepem={KEPTIPUS[0]}/>
      </section>
      <article>
        <KisKep lista={lista} kivalasztKezelo={kivalasztKezelo}/>
      </article>
      <footer><p>Szuda Tibor Szilveszter</p></footer>
    </>
  )
}

export default App
