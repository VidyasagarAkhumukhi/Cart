import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h4><a href="https://www.linkedin.com/in/vidyasagar-akhumukhi/" style={{ color: 'white' }}>Cart</a></h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
