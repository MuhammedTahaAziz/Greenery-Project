import { Link } from "react-router-dom";
import postData from "src/Forms/Post/data";
import useEditProductStore from "../useEditProductStore";
import Button from "src/Components/Button";
import EditProductImage from "src/Images/Edit-Product.png";
import DeleteProductImage from "src/Images/Delete-Product.png";
import axiosClient from "src/axios-client";
import { useEffect, useState } from "react";

export default function SummerTree() {
    const { isIdProduct, setIdProduct } = useEditProductStore();

    const [posts, setPosts] = useState([]);
    const [load, setLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        setPosts([]);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            axiosClient
                .get("/product_filter_name")
                .then(({ data }) => {
                    console.log(data);
                    setPosts(data);
                    setDataFetched(true);
                    setLoading(false);
                })
                .then((error) => {
                    // setLoading(false);
                    // console.error(error)
                });
        } catch (error) {
            // setLoading(false);
            // setLoading(false);
        }
    };
    const deleteData = async (productId) => {
        const payload = {
            id: productId,
        };
        console.log(payload);
        axiosClient
            .post("/delete", payload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const summerTrees = posts.filter(
        (post) => post.category_name === "tree" && post.filter_name === "summer"
    );

    return (
        <div className="">
            <div className="flex gap-4"></div>

            <form
                action=""
                method=""
                className="w-full h-[30rem] overflow-auto scrollbar-hide mt-4 border-y-2"
            >
                <table className="w-full h-auto">
                    <tr className="bg-gray-300">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Photo</th>
                        <th>Quantity</th>
                        <th>Change</th>
                    </tr>
                    {load && (
                        <div>
                            <tr>
                                <td colSpan="5" className="text-center">
                                    Loading
                                </td>
                            </tr>
                        </div>
                    )}
                    {!load && summerTrees.length
                        ? summerTrees.map((post) => (
                              <tr className="odd:bg-gray-300  text-center">
                                  <td>{post.id}</td>
                                  <td>{post.name}</td>
                                  <td>{post.price}</td>
                                  <td>{post.Discound}</td>
                                  <td className="w-auto flex justify-center items-center">
                                      <img
                                          src={
                                              "http://127.0.0.1:8000/products/" +
                                              post.image
                                          }
                                          alt=""
                                          className="size-9 rounded-sm"
                                      />
                                  </td>
                                  <td>{post.Quantity}</td>
                                  <td className="w-auto flex justify-center items-center mt-2">
                                      <Link
                                          to={"/admin/EditProduct"}
                                          className="size-7 bg-slate-00 rounded-sm"
                                          onClick={() => {
                                              setIdProduct(post.id);
                                          }}
                                      >
                                          <img
                                              src={EditProductImage}
                                              alt=""
                                              className="size-full"
                                          />
                                      </Link>
                                      <Button
                                          className="size-7 rounded-sm ml-2"
                                          onClick={() => {
                                              setIdProduct(post.id) ||
                                                  deleteData(post.id);
                                          }}
                                      >
                                          <img
                                              src={DeleteProductImage}
                                              alt=""
                                              className="size-full"
                                          />
                                      </Button>
                                  </td>
                              </tr>
                          ))
                        : "No products yet"}
                </table>
            </form>
        </div>
    );
}
