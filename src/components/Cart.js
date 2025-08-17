import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false); // ✅ new state

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total +
          (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) /
            100,
        0
      )
      .toFixed(2);
  };

  const handleCheckout = () => {
    setOrderPlaced(true); // ✅ show success popup
    dispatch(clearCart()); // ✅ empty cart after placing order
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-300 to-orange-400 p-6 border-b border-gray-100 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Your Cart{" "}
              {cartItems.length > 0 && (
                <span className="ml-2 bg-pink-500 text-white text-sm py-1 px-3 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </h1>
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="bg-white text-red-500 border border-red-500 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
              >
                Clear Cart
              </button>
            )}
          </div>

          {/* Cart Items */}
          <div className="p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Your cart is empty
                </h2>
                <p className="text-gray-500">
                  Looks like you haven't added anything yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item?.card?.info?.id}
                    className="p-4 flex justify-between items-start bg-gray-50 border border-gray-200 rounded-xl hover:border-pink-200 hover:shadow-md transition-all"
                  >
                    {/* Item Info */}
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item?.card?.info?.name}
                      </h3>
                      <p className="text-pink-600 font-medium text-lg">
                        ₹
                        {(
                          (item?.card?.info?.price ||
                            item?.card?.info?.defaultPrice) / 100
                        ).toFixed(2)}
                      </p>
                      {item?.card?.info?.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {item?.card?.info?.description}
                        </p>
                      )}
                    </div>

                    {/* Remove Button */}
                    <button
                      className="bg-red-500 text-white py-1.5 px-3 rounded-lg shadow-md text-sm font-medium hover:bg-red-600 transition"
                      onClick={() => handleRemoveItem(item)}
                    >
                      REMOVE
                    </button>
                  </div>
                ))}

                {/* Summary */}
                <div className="mt-8 border-t border-dashed border-gray-300 pt-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>Sub Total</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>Delivery Fee</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="border-t border-gray-200 my-4"></div>
                    <div className="flex justify-between font-bold text-xl text-gray-800">
                      <span>Total Amount</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium text-lg shadow-md"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Success Popup */}
        {orderPlaced && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-3">
                🎉 Order Placed!
              </h2>
              <p className="text-gray-600">
                Your delicious food is on its way 🚀
              </p>
              <button
                onClick={() => setOrderPlaced(false)}
                className="mt-5 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
