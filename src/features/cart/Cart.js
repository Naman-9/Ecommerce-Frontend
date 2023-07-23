import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { deleteItemFromCartAsync, selectCartLoaded, selectItems, updateCartAsync } from './cartSlice';
import Modal from '../common/Modal';

export default function Cart() {

  const items = useSelector(selectItems);
  const cartLoaded = useSelector(selectCartLoaded)
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(null);

  const totalAmount = items.reduce((amount, item) => (item.product.discountPrice) * item.quantity + amount, 0);
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  }

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  }

  return (
    <>
      {!items.length && cartLoaded && < Navigate to="/" replace={true} ></Navigate>}
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-large text-gray-900 text-center ">Cart</h2>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-5">

          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.product.href}>{item.product.title}</a>
                        </h3>
                        <p className="ml-4">{item.product.discountPrice}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
                          Qty
                        </label>
                        <select className='' onChange={(e) => handleQuantity(e, item)} value={item.quantity}>
                          {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                          ))}
                        </select>

                      </div>

                      <div className="flex">
                        <Modal
                          title={`Remove ${item.product.title} from cart?`}
                          message="Are You sure you want to remove this item from cart."
                          dangerOption="Remove"
                          cancelOption="Cancel"
                          dangerAction={(e) => handleRemove(e, item.product.id)}
                          cancelAction={() => setOpenModal(-1)}
                          showModal={openModal === item.product.id}
                        />
                        <button
                          type="button"
                          onClick={e => { setOpenModal(item.product.id) }}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 mt-6 sm:px-6">
            <div className="flex my-2 justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <div className="flex my-2 justify-between text-base font-medium text-gray-900">
              <p>Total Items</p>
              <p>{totalItems}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6art">
              <Link
                to="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or &nbsp;
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping <span aria-hidden="true"> &rarr;</span>

                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}
