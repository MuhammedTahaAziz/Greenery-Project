import { useStateContext } from "src/Components/ContextProvider";
import AccountForm from "src/Pages/Account/AccountForm";
import useCardShowStore from "src/Store/useCardShowStore";

export default function Account() {
  const { user,token,setUser, setToken } = useStateContext();
  const { isOpen , setOpen } = useCardShowStore();
  console.log(user)
  console.log(localStorage.getItem('PHONE'))
  console.log(localStorage.getItem('IMAGE'))
  console.log(localStorage.getItem('ID'))
  console.log(localStorage.getItem('EMAIL'))
  return (
    <AccountForm
      className="w-full h-screen bg-white flex justify-center items-center relative"
      method="post"
      photo={"http://127.0.0.1:8000/profiles/"+localStorage.getItem('IMAGE')}
      name={user}
      number={localStorage.getItem('PHONE')}
      email={localStorage.getItem('EMAIL')}
      placeholder={user}
      onClick={() => {
        setOpen(false);
    }}
    ></AccountForm>
  );
}
