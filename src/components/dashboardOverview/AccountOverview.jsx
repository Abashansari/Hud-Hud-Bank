import React from 'react'
import AccountCard from './AccountCard'
import TransactionHistory from './TransactionHistory'
import TransactionGraph from './TransactionGraph'

export default function AccountOverview() {
    return (
        <div className='container'>
            <AccountCard />
            <TransactionHistory />
            <TransactionGraph />
        </div>
    )
}
