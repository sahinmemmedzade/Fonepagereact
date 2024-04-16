import React from 'react'
import './Checkout.css'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketfromWish, removeWishlist } from '../Slice/WishlistSlice'
import { MdDeleteForever } from 'react-icons/md';


const Wishlist = () => {
 
  const wishlist=useSelector(state=>state.wishlist.wishlist)

  const dispatch =useDispatch()

  const addBasket=(product)=>{
    dispatch(addBasketfromWish(product))
  }
  const remove=(id)=>{
    dispatch(removeWishlist(id))
  }

  return (
    <div className='containtable'>
  <table className='tablewishlist'>
                <thead></thead>
                <tbody>
                    {wishlist && wishlist.map((item) => (
                        <tr key={item.id}>
                            <td className='td'><img src={item.image1} alt="" className='item-images' /></td>
                            <td className='tdname'>{item.name}</td>
                            <td className='tdprice'>{item.price}</td>
                            <td><button className='gototheshopeishlist' onClick={()=>addBasket(item)}>Add to basket</button></td>
                            <td><MdDeleteForever onClick={() => remove(item.id)} className='delete' /></td>

                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Wishlist