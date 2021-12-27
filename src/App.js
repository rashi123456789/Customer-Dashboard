import React,{useState} from 'react';
import  {customersData} from './Data/customerData';
import StatsContainer from './component/StatsContainer'
import CustomersContainer from './component/CustomersContainer';
import OrdersContainer from './component/OrdersContainer';

function App() {
    const [customers,setCustomers] = useState(customersData)
    return(
        <div className="container">
            <h1 className="display-4">Customers Dashboard</h1>
            <StatsContainer customers={customers}/>
            <CustomersContainer customers={customers}/>
            <OrdersContainer customers={customers}/>
        </div>
    )
}

export default App;
