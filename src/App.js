import { useDispatch, useSelector } from 'react-redux'
import { addCashAction, getCashAction } from './redux/cashReducer'
import {
  addCustomerAction,
  removeCustomerAction,
} from './redux/customerReducer'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customers.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }
  const addCustomer = (name) => {
    dispatch(addCustomerAction(name))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer))
  }

  return (
    <div className="App">
      <h2>Current count: {cash}</h2>
      <button onClick={() => addCash(+prompt())}>Add cash</button>
      <button onClick={() => getCash(+prompt())}>Get cash</button>
      <button onClick={() => addCustomer(prompt())}>Add customer</button>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer, index) => (
            <div key={index}>
              <h2>
                {index + 1}: {customer}
              </h2>
              <button onClick={() => removeCustomer(customer)}>
                Remove customer
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2>No customers</h2>
      )}
    </div>
  )
}

export default App
