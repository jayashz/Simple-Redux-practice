import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import Cart from "./CartUi/Cart";
import { Link } from "react-router-dom";

const Nav = () => {
    const dispatch =useDispatch();
    const cartVisibility = useSelector(state=>state.ui.cartVisibility);
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
  return ( 
    <>
        <div className='w-full h-12 px-8 bg-[#ecd46b] flex items-center justify-between'>
            <div>
                <Link to='/' className="text-2xl font-bold">CartShop</Link>
            </div>
            <div className='relative'>
            <button className='flex gap-4 bg-blue-400 rounded-lg p-2' onClick={()=>{dispatch(uiActions.toggle())}}>
             <FaCartShopping size={20} />
                <p>{cartQuantity}</p>
            </button>
            {cartVisibility&&<Cart/>
            }
            </div>
        </div>
    </>
  )
}

export default Nav