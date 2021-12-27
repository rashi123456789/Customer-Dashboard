import React from "react";

function CustomersTable(props){
    const {customers,showDetails} = props
    return(
        <table border="1px" class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Show</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer,i)=>{
                    return(
                        <tr key={customer.Phone}>
                            <td>{i+1}</td>
                            <td>{customer.Name}</td>
                            <td>{customer.Phone}</td>
                            <td><button onClick={()=>{
                                showDetails(customer)
                            }} className="btn btn-primary">Show</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CustomersTable;