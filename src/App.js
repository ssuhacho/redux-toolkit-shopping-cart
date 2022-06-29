import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from './components/Modal';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { openModal, closeModal } from './features/modal/modalSlice';


function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector ((store)=>
  store.modal);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(calculateTotals());
  },[cartItems]);

  return <main>
  {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
