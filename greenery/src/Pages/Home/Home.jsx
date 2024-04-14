import HomeSlider from "./HomeSlider";
import "./module.css";
import PlantCollection from "./PlantCollection";
import Service from "./Services";
import DiscountSection from "./DiscountSection";
import ChoosingUs from "./ChoosingUs";
import GiftCollection from "./GiftCollection";
import { useEffect } from "react";
import { useStateContext } from "src/Components/ContextProvider";
import axiosClient from "src/axios-client";
import useCardShowStore from "src/Store/useCardShowStore";
export default function Home({ className = "", children }) {
    const { user, token, setToken, setUser } = useStateContext();
    const { isOpen, setOpen } = useCardShowStore();
    console.log(user);
    console.log(localStorage.getItem("PHONE"));
    console.log(localStorage.getItem("IMAGE"));
    console.log(localStorage.getItem("ID"));
    console.log(localStorage.getItem("EMAIL"));
    useEffect(() => {
        // axiosClient.post('/check',localStorage.getItem("ID"))
        // .then((data)=>{
        // })
        // .catch((error)=>{
        // })
    });
    return (
        <div
            onClick={() => {
                setOpen(false);
            }}
        >
            <HomeSlider></HomeSlider>
            <div className="w-5/6 mx-auto mt-[1rem]">
                <PlantCollection></PlantCollection>
                <Service></Service>
            </div>
            <DiscountSection></DiscountSection>
            <div className="w-5/6 mx-auto mt-[1rem]">
                <ChoosingUs></ChoosingUs>
                <GiftCollection></GiftCollection>
            </div>
        </div>
    );
}



// public function fav_us_pro_set( Request $request){
//     $validator = Validator::make(
//     $request->all(), [
//     'favorate_id' => 'required', // Validate that 'filter_id' exists in the 'filters' table
//     'user_id'=>    'required',]);

//     if (!$validator->fails()) {   
//     $existingEntry = favorate_user::where( // Check if the entry already exists
//     'id_user', $request->user_id)
//     ->where('id_favorite', $request->favorate_id)
//     ->first();

//     if ($existingEntry) {//when user id and filter id is exist   data is delete 
//     favorate_user::where(
//     'id_user', $request->user_id)
//     ->where('id_favorite', $request->favorate_id)
//     ->delete();

    // $userId = $request->user_id; // Replace with the actual user ID
    // $products = DB::table('product')
    // ->leftJoin('favorate_user', function ($join) use ($userId) {
    //     $join->on('product.id', '=', 'favorate_user.id_favorite')
    //         ->where('favorate_user.id_user', '=', $userId);
    // })
    // ->select('product.*', DB::raw('IF(favorate_user.id IS NOT NULL, true, false) as is_favorited'))
    // ->get();


    // $productsData = $products->map(function ($product) {
    //     return [
    //         'id' => $product->id,
    //         'name' => $product->name,
    //         'title' => $product->title,
    //         'price' => $product->price,
    //         'Discound' => $product->Discound,
    //         'Quantity' => $product->Quantity,
    //         'image' => $product->image,
    //         'filter_name' => $product->filter_name,
    //         'category_name' => $product->category_name,
    //         'is_favorited' => $product->is_favorited,
    //     ];
    // });
    // $favoritedProducts = DB::table('product')
    //         ->join('favorate_user', 'product.id', '=', 'favorate_user.id_favorite')
    //         ->where('favorate_user.id_user', '=', $userId)
    //         ->select('product.*', DB::raw('true as is_favorited'))
    //         ->get();

    // return response()->json([
    //     'delete successfully' => true,
    //     'products' => $productsData,
    //     'saved' => $favoritedProducts], 200);
    // } else { 

    // favorate_user::insert([
    // 'id_user'=> $request->user_id,
    // 'id_favorite'=> $request->favorate_id,
    // ]);

    // $userId = $request->user_id; // Replace with the actual user ID
    // $products = DB::table('product')
    // ->leftJoin('favorate_user', function ($join) use ($userId) {
    //     $join->on('product.id', '=', 'favorate_user.id_favorite')
    //         ->where('favorate_user.id_user', '=', $userId);
    // })
    // ->select('product.*', DB::raw('IF(favorate_user.id IS NOT NULL, true, false) as is_favorited'))
    // ->get();

    // $productsData = $products->map(function ($product) {
    //     return [
    //         'id' => $product->id,
    //         'name' => $product->name,
    //         'title' => $product->title,
    //         'price' => $product->price,
    //         'Discound' => $product->Discound,
    //         'Quantity' => $product->Quantity,
    //         'image' => $product->image,
    //         'filter_name' => $product->filter_name,
    //         'category_name' => $product->category_name,
    //         'is_favorited' => $product->is_favorited,
    //     ];
    // });

    //     $favoritedProducts = DB::table('product')
    //         ->join('favorate_user', 'product.id', '=', 'favorate_user.id_favorite')
    //         ->where('favorate_user.id_user', '=', $userId)
    //         ->select('product.*', DB::raw('true as is_favorited'))
    //         ->get();

            
    // return response()->json([
    //     'success' => 'Added successfully.',
    //     'products' => $productsData,
    //     'saved' => $favoritedProducts],
    //      200);
    //     }
    // } else {
    // return response()->json(['error' => $validator->errors()->all()], 401);
    // }}