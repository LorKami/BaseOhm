import React, { useState } from 'react';
import '../Calculator/Calculator.css'

const Calculator = () => {

    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };

    return (
        <div>

            <div className='CalculatorSection'>
                <div className='CalculatorBox'>

                    <div className='CalculatorTitle'>
                        <h3>BOHM Calculator</h3>
                        <p>Estimate how much you can earn while staking BOHM</p>
                    </div>

                    <div className='CalculatorPriceAPYBalance'>
                        <div className='Price'>
                            <h3>BOHM Price</h3>
                            <p>$0.0</p>
                        </div>
                        <div className='APY'>
                            <h3>Current APY</h3>
                            <p>0.0%</p>
                        </div>
                        <div className='Balance'>
                            <h3>Your sBOHM Balance</h3>
                            <p>0 sBOHM</p>
                        </div>
                    </div>

                    <div className='CalculatorInputs'>

                        <div className='Inputs'>
                            <h3>sBOHM Amount</h3>
                            <div class="InputPosition">
                                <span data-tooltip="Coming soon" data-flow="top"><input placeholder="Amount" type="number" value="0" /></span>
                            </div>
                        </div>

                        <div className='Inputs'>
                            <h3>APY (%)</h3>
                            <span data-tooltip="Coming soon" data-flow="top"><input placeholder="Amount" type="number" value="0" /></span>
                        </div>

                        <div className='Inputs'>
                            <h3>BOHM price at purchase ($)</h3>
                            <span data-tooltip="Coming soon" data-flow="top"><input placeholder="Amount" type="number" value="0" /></span>
                        </div>

                        <div className='Inputs'>
                            <h3>Future BOHM market price ($)</h3>
                            <span data-tooltip="Coming soon" data-flow="top"><input placeholder="Amount" type="number" value="0" /></span>
                        </div>

                    </div>

                    <div className='InputRange'>
                        <h3>{rangeValue} days</h3>
                        <input
                            type='range'
                            min={0}
                            max={365}
                            value={rangeValue}
                            onChange={handleRangeChange}
                        />
                    </div>

                    <div className='CalculatorTime'>
                        <div className='Time'>
                            <p>Your Initial Investment</p>
                            <p>0$</p>
                        </div>
                        <div className='Time'>
                            <p>Current wealth</p>
                            <p>0$</p>
                        </div>
                        <div className='Time'>
                            <p>BOHM rewards estimate</p>
                            <p>0 BOHM</p>
                        </div>
                        <div className='Time'>
                            <p>Potential return</p>
                            <p>0$</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Calculator