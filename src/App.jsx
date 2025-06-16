import React from 'react'

import './App.css'
import Header from './components/Header'
import SwitchingEnergy from './components/SwitchingEnergy'
import SimpleSteps from './components/SimpleSteps'
import Comparisons from './components/comparisons'
import CompaniesLogo from './components/common/CompaniesLogo'
import Utilities from './components/Utilities'
function App() {

  return (
    <>
      <Header />
      <CompaniesLogo/>
      <SwitchingEnergy />
      <SimpleSteps />
      <Comparisons />
      <Utilities />
      
    </>
  )
}

export default App
