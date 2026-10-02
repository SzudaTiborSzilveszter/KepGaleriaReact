import { useState } from 'react'
import { KEPLISTA} from './adat'
import './App.css'
import KisKep from './component/Galeria'
import NagyKep from './component/NagyKep'

function App() {
  const [i,setI]=useState(0)
  function kepKivalaszt(index:number){
    console.log(index)
    setI(index)
  }
  function kepBalra(){
    setI(index => (index - 1 + KEPLISTA.length) % KEPLISTA.length)
  }
  function kepJobbra(){
    setI(index => (index + 1 + KEPLISTA.length) % KEPLISTA.length)
  }
  return (
    <>
      <header>Képek</header>
      <section>
        <button className="bal" onClick={kepBalra}>🠜</button>        
        <NagyKep kepem={KEPLISTA[i]}/>
        <button className="jobb" onClick={kepJobbra}>🠞</button>
      </section>
      <article>
        <KisKep lista={KEPLISTA} kepKivalaszt={kepKivalaszt}/>
      </article>
      <footer><p>Szuda Tibor Szilveszter</p></footer>
    </>
  )
}

export default App
