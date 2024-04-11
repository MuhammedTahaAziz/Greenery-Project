import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
  user: {},
  token: null,
  notification: null,
  products:[],
  saveds:[],
  purchase:[],
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
  setProduct: () => {},
  setSaved:() => {},
  setPurchase: () => {},
  setSingleProduct:() => {},
});

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = useState(() => localStorage.getItem("USER"));
  const [notification, _setNotification] = useState('');
  const [token, _setToken] = useState(() => localStorage.getItem("ACCESS_TOKEN"));
  const [products, setProduct] = useState([]);
  const [saveds, setSaved] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [SingleProduct, setSingleProduct] = useState();

  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('')
    }, 3000)
  }

  const setUser = (user) =>{
    _setUser(user.name)
    console.log(user)
    if (user) {
      localStorage.setItem('USER', user.name);
      localStorage.setItem('ID', user.id);
      localStorage.setItem('ROLE', user.role);
      localStorage.setItem('EMAIL', user.email);
      localStorage.setItem('PHONE', user.PhoneNum);
      localStorage.setItem('IMAGE', user.image);
    } else {
      localStorage.removeItem('USER');
      localStorage.removeItem('ID');
      localStorage.removeItem('ROLE');
      localStorage.removeItem('EMAIL');
      localStorage.removeItem('PHONE');
      localStorage.removeItem('IMAGE');
    }
  }
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }


  return (
    <StateContext.Provider
      value={{
        user,
        token,
        products,
        saveds,
        purchase,
        setProduct,
        setUser,
        setToken,
        notification,
        setNotification,
        setSaved,
        setPurchase,
        setSingleProduct
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
