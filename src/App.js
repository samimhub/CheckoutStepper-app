
import './App.css';
import CheckoutStepper from './component/Stepper';

function App() {
  const checkout_steps=[
    {
      name:"Customer Info",
      component: ()=> <div>Provide your contact Dtails</div>
  },
  {
    name:"Shipping Info",
    component: ()=> <div>Enter your shippig address</div>
  },
  {
    name:"Payment",
    component: ()=> <div>Complite payment for order</div>
  },
  {
    name:"Delivered",
    component: ()=> <div>Your order has been delivered</div>
  }
]
  return (
    <>
    <h3 className='checkout'>Order Details</h3>
    <div>
      <CheckoutStepper stepsConfig={checkout_steps}/>
    </div>
    </>
  )
}

export default App;
