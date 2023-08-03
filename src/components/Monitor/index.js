import React, { useState } from 'react';
import '../Monitor/Monitor.css';
import Web3 from 'web3';

const rpcServer = 'https://base.blockpi.network/v1/rpc/public';
const chainId = '0x2105';

const web3 = new Web3(new Web3.providers.HttpProvider(rpcServer), null, { chainId });

const Monitor = () => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  function connectMetamask() {
    if (!connected) {
      window.ethereum.enable().then(function (accounts) {
        console.log('Connected with Metamask:', accounts[0]);
        const currentChainId = window.ethereum.chainId;
        if (currentChainId === chainId) {
          setConnected(true);
          setWalletAddress(accounts[0]);
        } else {
          setConnected(false);
          setWalletAddress('');
          alert('Wrong Chain');
        }
      });
    } else {
      setConnected(false);
      setWalletAddress('');
    }
  }

  return (
    <div>

      <div className='ConnectMonitor'>

        <div className='ConnectSection'>

          <button onClick={connectMetamask}>
            {connected ? 'Disconnect' : 'Connect Wallet'}
          </button>
          {walletAddress && (
            <p className='Address'>
              {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)}
            </p>
          )}


        </div>

      </div>

    </div>
  );
};
export default Monitor;