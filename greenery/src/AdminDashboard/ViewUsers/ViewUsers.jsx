import { useEffect, useState } from "react";
import axiosClient from "src/axios-client";
// import postData from "src/Forms/Post/data";

export default function ViewUsers() {

  const [posts, setPosts] = useState([]);
  const [load, setLoading] = useState(true);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get('/viewUsers')
      .then(async ({data}) => {
        console.log(data);
        setLoading(false);
        setPosts(data);
      })
      .then((error)=>{
        setLoading(false);
        // console.error(error)
      });
    } catch (error) {
      setLoading(false);

      setLoading(false);
    }
  };


  return (
    <div className="w-4/5 h-auto absolute right-0">
      <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
        All Users
      </p>
      <div className="w-11/12 py-10 mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-8">
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
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Password</th>
                  <th>Photo</th>
                </tr>
                {load && <div>
            <tr>
              <td colSpan="5" className="text-center">
                Loading
              </td>
            </tr>
          </div>}
          {!load && 
            posts.map((users) => (
              <tr className="odd:bg-gray-300  text-center">
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.PhoneNum}</td>
                <td>{users.email}</td>
                <td>{users.address}</td>
                <td>...........</td>
                <td className="w-auto flex justify-center items-center">
                  <img
                    src={"http://127.0.0.1:8000/profiles/"+users.image}
                    alt=""
                    className="size-9 rounded-sm"
                  />
                </td>
              </tr>
            ))
          }
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
