import Navbar from './components/Navbar'
import OrdersTab from './components/OrdersTab';
import Header from './components/Header'
// import OrderTable from './components/OrderTable';
import './App.css';

const InventoryList = [
  {
    orderNo: "#TKN20203754",
    orderDate: "2022-05-04",
    city: "Hyderabad",
    customerName: "Ravi",
    orderValue: "200",
    status: "Pending",
  },
  {
    orderNo: "#TKN20203754",
    orderDate: "2022-05-04",
    city: "Hyderabad",
    customerName: "Ravi",
    orderValue: "200",
    status: "Pending",
  },
  {
    orderNo: "#TKN20203754",
    orderDate: "2022-05-04",
    city: "Hyderabad",
    customerName: "Ravi",
    orderValue: "200",
    status: "Pending",
  }

]

function App() {
  return (
    <div className='container'>
      <Header />
    <div className="App">
      <Navbar />
      <OrdersTab InventoryList={InventoryList} />
    </div>
    </div>
  )
}

export default App;
