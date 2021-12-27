import {uniqBy} from 'lodash';

const uniqueCustomers = (customers)=>{
    const result = uniqBy(customers,'Phone')
    return result
}

export default uniqueCustomers;