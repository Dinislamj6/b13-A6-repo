
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Cart from './Component/Cart'
import DigiTools from './Component/DigiTools'
import NavBar from './Component/NavBar'
import Tabs from './Component/Tabs'
import Footer from './Component/Footer'
import Star from './Component/Star'
import Steps from './Component/Steps'
import Pricing from './Component/Pricing'
import WorkFlow from './Component/WorkFlow'


const getDigiTools = async () => {
  const res = await fetch("/digitools.json")
  return res.json()
}
const digiToolsPromise = getDigiTools()
function App() {

  const [activeTab, setActiveTab] = useState("products")
  const [carts, setCarts] = useState([])


  return (
    <>
      <NavBar carts={carts} setActiveTab={setActiveTab}></NavBar>
      <Banner></Banner>
      <Star></Star>
      {activeTab === "products" && <DigiTools activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} setCarts={setCarts} digiToolsPromise={digiToolsPromise}></DigiTools>}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} activeTab={activeTab} setActiveTab={setActiveTab}></Cart>}

      <Steps></Steps>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
