import React from 'react'
import '../Dashboard/Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        
    <div className='DashboardMonitor'>
        
    <div className='DashboardButtons'>

        <div className='Buttons'>
            <h3>BOHM Price</h3>
            <p>$0.07</p>
        </div>
        <div className='Buttons'>
            <h3>Market Cap</h3>
            <p>$0.0</p>
        </div>
        <div className='Buttons'>
            <h3>Supply (Staked/Total)</h3>
            <p>0 / 1,000,000</p>
        </div>
        <div className='Buttons'>
            <h3>TVL</h3>
            <p>$0.0</p>
        </div>
        <div className='Buttons'>
            <h3>APY</h3>
            <p>0.0 %</p>
        </div>
        <div className='Buttons'>
            <h3>Current Index</h3>
            <p>0.0 BOHM</p>
        </div>
        
    </div>

    </div>

    </div>
  )
}

export default Dashboard