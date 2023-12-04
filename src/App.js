import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Market20trends from './Market20trends.webp';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencyDropdown from './components/CurrencyDropdown';


const App = () => {
    return (
        <AppProvider >
            <div className='card' style={{backgroundImage:'url("https://g.foolcdn.com/editorial/images/468175/gettyimages-501199714.jpg")',color:"white"}}>
                <h1 className='mt-3'>Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'style={{boxshadow:2,}}>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <div className='row mt-3'><h3>Currency</h3>
                <div className='row'>
                            <CurrencyDropdown />
                            </div>
                        </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>



                </div>
            </div>
        </AppProvider>

    );
};

export default App;
