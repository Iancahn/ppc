import React, { useState } from 'react';

function OrderValue() {
    //state management
    const [orderValue, setOrderValue] = useState(10000);
    const [costValue, setCostValue] = useState(5000);
    const [conversionValue, setConversionValue] = useState(2);

    // submit Handler function
    function submitHandler() {
        alert("Your gross profit is: " + grossProfit);
    }

    let grossProfit = orderValue - costValue;
    let adSpend = grossProfit / 2;
    let conversionRate = 100 / conversionValue;
    let maxCostPerClick = adSpend / conversionRate;

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    Order Value:
                    <input onChange={(e) => setOrderValue(e.target.value)} id="ordervalue" type="text" name="ordervalue" value={orderValue} />
                </label>
                <label>
                    Cost:
                    <input onChange={(e) => setCostValue(e.target.value)} type="text" id="costvalue" name="costvalue" value={costValue} />
                </label>
                <label>
                    Projected Conversion Rate:
                    <input onChange={(e) => setConversionValue(e.target.value)} type="text" id="conversionValue" name="conversionValue" value={conversionValue} />
                </label>
            </form>
            <h3>Your gross profit is: R{grossProfit}</h3>
            <h3>You should only spend: R{adSpend}</h3>
            <h3>Your default conversion rate is {conversionValue}%</h3>
            <h3>You can afford clicks up to: R{maxCostPerClick} to compete and stay profitable.</h3>

        </div>
    )
};

export default OrderValue;