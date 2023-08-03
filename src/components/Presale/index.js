import React, { useState, useEffect } from 'react';
import '../Presale/Presale.css'

function getCurrentUTCTime() {
    const date = new Date();
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        timeZoneName: 'short',
    };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
}

const currentTime = getCurrentUTCTime();
console.log(currentTime);

const Presale = () => {

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const currentTime = getCurrentUTCTime();
        setCurrentTime(currentTime);
    }, []);

    return (
        <div>

            <div className='PresaleMonitor'>

                <div className='PresaleBox'>

                    <div className='PresaleTitle'>
                        <h3>BOHM Presale</h3>
                        <p>Purchase tokens at launch price</p>
                    </div>

                    <div className='PresaleTime'>
                        <h3>Presale Time</h3>
                        <p>Start: Mon, 09 Aug 2023, 14:00:00 GMT</p>
                        <p>End: Tue, 10 Aug 2023, 14:00:00 GMT</p>
                    </div>

                    <div className='PresaleCurrentStatus'>

                        <div className='Current'>
                            <h3>Current Time</h3>
                            <p>{currentTime}</p>
                        </div>

                        <div className='Status'>
                            <h3>Presale Status</h3>
                            <p>Soon</p>
                        </div>

                    </div>

                    <div className='Raised'>
                        <h3>USDC Raised</h3>
                        <p>$0.0 / 75,000</p>
                    </div>

                    <div className='PresaleContributionBOHM'>

                        <div className='Contribution'>
                            <h3>Your Contribution</h3>
                            <p>$USDC</p>
                        </div>

                        <div className='BOHM'>
                            <h3>Your BOHM Due</h3>
                            <p>0 BOHM</p>
                        </div>

                    </div>

                    <div className='ButtonDashboard'>
                        <span data-tooltip="Coming soon" data-flow="top"><button>Claim</button></span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Presale