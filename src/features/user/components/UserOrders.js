import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoggedInUserOrderAsync, selectUserInfo, selectUserInfoStatus, selectUserOrders } from '../userSlice';
import { Grid } from 'react-loader-spinner';

const UserOrders = () => {

  const dispatch = useDispatch();
  const orders = useSelector(selectUserOrders);
  const status = useSelector(selectUserInfoStatus);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync());
  },[dispatch]);

  return (
    <div>
        {orders && orders.map((order) => (
        <div className="mx-auto mt-10 bg-white max-w-7xl p-3 px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-medium text-gray-900 ">
            Order #{order.id}
          </h2>
          <h2 className="text-xl font-medium text-red-900 mt-2.5 ">
            Order Status: {order.status}
          </h2>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-5">

            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={item.id} className="flex py-6">
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
                          <p className="ml-4">{item.product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
                            Qty: {item.quantity}
                          </label>

                          {/* {product.quantity} */}

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
                <p>${order.totalAmount}</p>
              </div>
              <div className="flex my-2 justify-between text-base font-medium text-gray-900">
                <p>Total Items</p>
                <p>{order.totalItems}</p>
              </div>
              <p className="mt-0.5 text-large text-black">Shipping Address: </p>
              <div className="flex justify-between mt-4 gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                                                <div className="flex gap-x-4">
                                                    <div className="min-w-0 flex-auto">
                                                        <p className="text-sm font-semibold leading-6 text-gray-900">{order.selectedAddress.name}</p>
                                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.selectedAddress.street},{order.selectedAddress.city},{order.selectedAddress.state}</p>
                                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.selectedAddress.pincode}</p>
                                                    </div>
                                                </div>
                                                <div className="hidden sm:flex sm:flex-col sm:items-end">
                                                    <p className="text-sm leading-6 text-gray-900">{order.selectedAddress.phone}</p>

                                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                                        {order.selectedAddress.city}
                                                    </p>


                                                </div>
                                            </div>
            </div>
          </div>

        </div>
      ))}
      {status === 'loading' ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-70">
        <Grid
          height="80"
          width="80"
          color="rgb(79, 70, 229)"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      ) : null}
    </div>
  );
}

export default UserOrders;