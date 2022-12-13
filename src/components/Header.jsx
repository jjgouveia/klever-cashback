import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/images/klever_logo.png';
import cash_logo from '../assets/images/swap-secure.png';
import klever from '../providers/klever/index';

function Header() {
  const [kleverConnected, setKleverConnected] = useState(false);
  const [balance, setBalance] = useState();
  const [address, setAddress] = useState();

  const fetchBalance = async () => {
    const amount = await klever.balance();
    const currencyNormalizeMultiplier = Math.pow(10, 6);

    setBalance(amount / currencyNormalizeMultiplier);
  };

  const connectToKlever = async () => {
    const address = await klever.connectWithSdk();
    if (!address.startsWith('klv')) {
      console.log(false);
    }

    setKleverConnected(true);
    setAddress(klever.address);
    await fetchBalance();
  };

  const handleLogout = () => {
    sessionStorage.removeItem('walletAddress');
    sessionStorage.removeItem('privateKey');
    window.location.reload();
  };

  return (
    <header className='fixed w-full top-0 h-20'>
      <div>
        <img src={logo} alt='Klever logo' id='header-klever-logo' />
        <h1 id='cashback-title'>Cashback</h1>
      </div>
      &nbsp;
      <div className='dropdown-explore'>
        <button>Explore</button>
        <div className='dropdown-options'>
          <a href='#'>NFT</a>
          <a href='#'>Exchange</a>
          <a href='#'>Wallet</a>
          <a href='#'>Klever Safe</a>
        </div>
      </div>
      &nbsp;
      <div id='search-container'>
        <i className='bi bi-search'></i>
        <input
          type='text'
          name=''
          id='search-input'
          placeholder='Search Klever'
        />
      </div>
      &nbsp;
      {kleverConnected && (
        <>
          <img src={cash_logo} alt='Cash Logo' id='header-cash-logo' />
          <div id='balance-container'>
            <p>Balance KLV</p>
            <p>{balance}</p>
          </div>
          &nbsp;
          <button onClick={handleLogout}>
            <i className='bi bi-box-arrow-right'></i>
          </button>
        </>
      )}
      &nbsp;
      {!kleverConnected && (
        <button onClick={connectToKlever}>
          <i className='bi bi-wallet'>&nbsp; &nbsp;</i>Connect your wallet
        </button>
      )}
      &nbsp;
    </header>
  );
}

export default Header;
