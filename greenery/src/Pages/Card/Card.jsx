import Button from "src/Components/Button";
import CartItem from "./cartItem";
import useCardShowStore from "src/Store/useCardShowStore";
import { useEffect, useState } from "react";
import axiosClient from "src/axios-client";
import { useStateContext } from "src/Components/ContextProvider";
import { Link } from "react-router-dom";
import useUpdateQuantity from "./useUpdateQuantity";

export default function AddToCard(className, onClick) {
    const [ids, setIds] = useState([]);
    const [products, setProducts] = useState([]);
    const { purchase, setPurchase } = useStateContext();
    const [load, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const { isOpen, setOpen } = useCardShowStore();

    const { updateQuantity, setUpdateQuantity } = useUpdateQuantity();

    useEffect(() => {
      if (isOpen) {
          
          fetchData();
      }
  }, [isOpen]);

    const fetchData = async () => {
        const payload = {
            id: parseInt(localStorage.getItem("ID")),
        };
        // console.log(payload);
        await axiosClient
            .post("/shop_us_pro_get", payload)
            .then(({ data }) => {
                setLoading(true);
                // console.log(data.products);
                setProducts(data.products);
                // const purchasedProducts = data.purchased_items.map(item => item.product);
                // console.log('Purchased products:', purchasedProducts);
                // const purchasedItemIds = data.purchased_items.map(item => item.id);
                // setPurchase(purchasedProducts)
                // setIds(purchasedItemIds)
                totalUpdate();
            })
            .then((error) => {
                setLoading(true);
                // console.error(error)
            });
    };
    // const postPrice = (price, discount, quantity) => {
    //     let total = 0;

    //     if (discount !== 0) return (total = total + discount + quantity);
    //     else return (total = total + price + quantity);
    // };
    const totalUpdate = () => {
        let total = 0;
        products.map((post) => {
            Number(post.Discound) !== 0
                ? (total =
                      total + Number(post.Discound) * Number(post.Quantity))
                : (total = total + Number(post.price) * Number(post.Quantity));
        });
        setTotalPrice(total);
        // return totalPrice;
    };

    

    products.map((post) =>
        // (updateQuantity.id_shop) maybe null or undefined
        updateQuantity.id_shop == undefined
            ? (post.Quantity = 1)
            : post.id == updateQuantity.id_shop
            ? (post.Quantity = updateQuantity.Quantity)
            : ""
    );

    useEffect(()=>{
      totalUpdate();
    },[updateQuantity,products]);
    // if()


    // console.log(updateQuantity);
    // const total = totalPrice();

    const onOrder = () => {
        const payload = {
            user_id: parseInt(localStorage.getItem("ID")),
            products: products,
            Quantity: updateQuantity,
        };
        console.log(payload);
        axiosClient
            .post("/shop", payload)
            .then(({ data }) => {
                setLoading(true);
                data.error?alert(data.error):alert("Items ordered Successfully")
                console.log(data);
                setProducts([]);
            })
            .catch(error => {
                setLoading(true);
                alert(error.message)
            });
    };

    return (
        <div
            className={`w-[30rem] h-screen bg-green-50 border-l-[1px] fixed right-0 bottom-0 z-10 flex flex-col ${
                isOpen == false
                    ? "translate-x-full duration-300"
                    : " duration-300"
            }`}
        >
            <p className="w-full h-16 bg-green-50 text-2xl font-bold absolute top-0 mt-20 pt-4 pl-4 border-b-[1px]">
                Shopping Cart
            </p>
            <div className="pt-40 scrollbar-hide overflow-scroll">
                <div
                    className="w-full h-auto grid gap-4 scrollbar-hide mb-28"
                    name={`itemContainer`}
                    id={`itemContainer`}
                >
                    {/* {load && (
                    <div>
                        <tr>
                            <td colSpan="5" className="text-center">
                                {load}
                            </td>
                        </tr>
                    </div>
                )} */}
                    {products.map((post) => (
                        <CartItem
                            pro_id={post.id}
                            title={post.name}
                            price={post.price}
                            image={
                                "http://127.0.0.1:8000/products/" + post.image
                            }
                            quant={post.quantity}
                            discount={post.Discound}
                        ></CartItem>
                        // totalPrice(post.price,post.Discound,post.quantity);
                    ))}
                </div>

                <div className="w-full h-auto bg-green-50 border-t-[1px] flex justify-center items-center flex-col  absolute bottom-0">
                    <span
                        className="w-52 h-14 bg-transparent text-black text-2xl font-semibold tracking-wider flex justify-center items-center"
                        name={`totalPrice`}
                        id={`totalPrice`}
                    >
                        {totalPrice}
                    </span>
                    <div className="flex w-full">
                        <Link
                            to={"/MyOrders"}
                            className="w-full h-16 bg-[#133816] text-white text-xl font-semibold tracking-wider flex justify-center items-center"
                            name={`myOrders`}
                            id={`myOrders`}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            My Orders
                        </Link>
                        {products.length == 0 ? (
                            <Button
                                className="w-full h-16 bg-[#088516] text-white text-xl font-semibold tracking-wider"
                                name={`orderBtn`}
                                id={`orderBtn`}
                                onClick={onOrder }
                                disabled={true}
                            >
                                Order Now
                            </Button>
                        ) : (
                            <Button
                                className="w-full h-16 bg-[#088516] text-white text-xl font-semibold tracking-wider"
                                name={`orderBtn`}
                                id={`orderBtn`}
                                onClick={onOrder}
                                disabled={false}
                            >
                                Order Now
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
