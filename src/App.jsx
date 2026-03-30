
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Cart from './Component/Cart'
import DigiTools from './Component/DigiTools'
import NavBar from './Component/NavBar'
import Tabs from './Component/Tabs'
import Footer from './Component/Footer'
import Star from './Component/Star'


const getDigiTools = async () => {
  const res = await fetch("../public/digitools.json")
  return res.json()
}
const digiToolsPromise = getDigiTools()
function App() {

const [activeTab,setActiveTab] = useState("products")
const [carts ,setCarts] = useState([])
console.log(carts);
  
  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <Star></Star>
      
        <div className="tabs tabs-box justify-center bg-transparent mt-5">
                <input  onClick={() => setActiveTab("products")}
                 type="radio" name="my_tabs_1" className={`tab rounded-full ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} w-30`} aria-label="Products" defaultChecked />


                <input onClick={() => setActiveTab("cart")}
                 type="radio" name="my_tabs_1" className={`tab  rounded-full w-30 ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`} aria-label={`Cart (${carts.length})`}  />
       </div>
     {activeTab === "products" && <DigiTools carts={carts} setCarts={setCarts} digiToolsPromise={digiToolsPromise}></DigiTools>}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Footer></Footer>
    </>
  )
}

export default App
