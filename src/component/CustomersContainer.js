import React,{useState} from 'react';
import orderTotal from '../commonCalculations/orderTotal';
import uniqueCustomers from '../commonCalculations/uniqueCustomers';
import Search from './Search';
import CustomersTable from './CustomersTable';
import  AlertModal  from '../commonCalculations/Modal';

function CustomersContainer(props){
    const {customers} = props
    const [term,setTerm]=useState('')
    const [isClicked,setIsClicked]=useState(false)
    const [modalData,setModalData]=useState({name:'',count:0,total:0})
    const onlyUniqueCustomers = uniqueCustomers(customers)

    const showDetails = (customer)=>{
        const customerOrders = customers.filter((c) => {
        return c.Phone === customer.Phone
        })
        const customerOrderTotal  = orderTotal(customerOrders)
        /*alert(`
            Name - ${customer.Name}
            Order Count - ${customerOrders.length}
            Order Total - ${customerOrderTotal}
        `)*/
        setModalData({
          name:customer.Name,
          count:customerOrders.length,
          total:customerOrderTotal
        })
        setIsClicked(true)
    }

    const handleHide = ()=>{
      setIsClicked(false)
    }

    const handleChange = (e) =>{
        const term = e.target.value
        setTerm(term)
    }

    const filteredUniqueCustomers = () =>{
        const result = onlyUniqueCustomers.filter((c)=>{
            return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
        })
        return result
    }

    return(
      <div className="mb-3">
        <div className="row">
          <div className="col-md-8">
            <h2>Listing Customers-{onlyUniqueCustomers.length}</h2>
          </div>
          <div className="col-md-4">
            <Search term={term} handleChange={handleChange}/>
          </div>
        </div>    
        <div className="row">  
          <div col="col-md-12">  
            <CustomersTable customers={filteredUniqueCustomers()} showDetails={showDetails}/>
          </div>
          {
            isClicked&&<AlertModal name={modalData.name}
                              count={modalData.count}
                              total={modalData.total}
                              show={isClicked}
                              handleHide={handleHide}
            />
          }
        </div>
      </div>
    )
}

export default CustomersContainer;