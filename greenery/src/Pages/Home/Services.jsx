export default function Service() {
    return(
        <div className="w-full h-auto mt-10 2xl:mt-24">
          <p className="w-full text-center text-2xl 2xl:text-5xl font-bold font-serif">Our Services</p>
          <div className="h-28 2xl:h-64 grid grid-cols-2 2xl:grid-cols-4 gap-4 2xl:gap-6 mt-10 2xl:mt-14">
            <div className="w-full h-full full-shadow rounded-md 2xl:rounded-xl flex flex-col items-center">
              <div className="size-10 2xl:size-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Quick-Order.png"
                  className="size-8 2xl:size-12 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <p className="text-sm 2xl:text-lg font-semibold mt-2 2xl:mt-2">Quick Order</p>
              <p className="w-5/6 h-24 mt-2 2xl:mt-4 text-center text-xs 2xl:text-sm 2xl:font-medium">
                Optimize your online shopping with us, providing a rapid and
                user-friendly way to place orders effortlessly
              </p>
            </div>
            <div className="w-full h-full full-shadow rounded-md 2xl:rounded-xl flex flex-col items-center">
              <div className="size-10 2xl:size-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Home-Delivery.png"
                  className="size-6 2xl:size-10 mx-auto"
                  alt=""
                />
              </div>
              <p className="text-sm 2xl:text-lg font-semibold mt-2 2xl:mt-2">Home-Delivery</p>
              <p className="w-5/6 h-24  h-16 mt-2 2xl:mt-4 text-center text-xs 2xl:text-sm 2xl:font-medium">
                From cart to your door, experience seamless home delivery at
                your fingertips
              </p>
            </div>
            <div className="w-full h-full full-shadow rounded-md 2xl:rounded-xl flex flex-col items-center">
              <div className="size-10 2xl:size-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Price.png"
                  className="size-8 2xl:size-12 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <p className="text-sm 2xl:text-lg font-semibold mt-2 2xl:mt-2">Best Price</p>
              <p className="w-5/6 h-24  mt-2 2xl:mt-4 text-center text-xs 2xl:text-sm 2xl:font-medium">
                We take pride in offering the least prices, always undercutting
                the market for your benefit
              </p>
            </div>
            <div className="w-full h-full full-shadow rounded-md 2xl:rounded-xl flex flex-col items-center">
              <div className="size-10 2xl:size-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Heart.png"
                  className="size-6 2xl:size-9 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <p className="text-sm 2xl:text-lg font-semibold mt-2 2xl:mt-2">Suitable For All</p>
              <p className="w-5/6 h-24  mt-2 2xl:mt-4 text-center text-xs 2xl:text-sm 2xl:font-medium">
                Navigate effortlessly through our platform, crafted for
                stress-free shopping and inclusive accessibility
              </p>
            </div>
          </div>
        </div>
    )
}