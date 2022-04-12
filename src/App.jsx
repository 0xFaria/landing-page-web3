import { useState } from 'react'
import { ethers } from "ethers"
import logoImg from "./logo.png"
import mainImg from "./10.png"
import "./App.css"




function App() {
  const [userConnected, setUserConnected] = useState(false)
  const [userWallet, setUserWallet] = useState("")
  const [userBalance, setUserBalance] = useState(0)

  async function connectWallet() {
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let accounts = await provider.send("eth_requestAccounts")
    let accountConnected = accounts[0]
    let balance = await provider.getBalance(accountConnected)
    let convertedBalance = ethers.utils.formatEther(balance)
    console.log(userWallet)
    setUserWallet(accountConnected)
    setUserBalance(convertedBalance)
    setUserConnected(true)
  }

  ethereum.on("accountsChanged", (accounts) => {
    connectWallet()
  })

  return (
    <div className='container'>
      <header>
        <div className='searchLogo'>
          <img src={logoImg} alt="" />
          {/* <div className='input'>
            <input type="text" name="" id="" />
          </div> */}

        </div>

        <nav className='menu'>
          <ul>
            <li>Explore</li>
            <li>Resources</li>
            <li><button> {userBalance ? userBalance + " ETH" : "Your Balance"} </button></li>
            <li>
              <button onClick={connectWallet}>{userConnected ? userWallet : "Connect Wallet"}</button>
            </li>
          </ul>
        </nav>

      </header>

      <main>
        <div className="text">
          <div className="main-text">
            <p>Exclusive NFT for Digital and Real-world Assets</p>
            <h1>The world's first non-fungible token (NFT) marketplace for both digital and physical assets.</h1>
          </div>

          <div className='buttons'>
            <button>
              Explore
            </button>

            <button>Create</button>
          </div>
        </div>

        <div className="image">
          <img src={mainImg} alt="" />
        </div>
      </main>
    </div>
  )
}

export default App
