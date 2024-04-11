<?php

namespace App\Http\Controllers;
use App\Models\{product,favorate_user};
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class favorate_controler extends Controller
{
    


    public function fav_us_pro_set( Request $request){
        $validator = Validator::make(
        $request->all(), [
        'favorate_id' => 'required', // Validate that 'filter_id' exists in the 'filters' table
        'user_id'=>    'required',]);
    
        if (!$validator->fails()) {   
        $existingEntry = favorate_user::where( // Check if the entry already exists
        'id_user', $request->user_id)
        ->where('id_favorite', $request->favorate_id)
        ->first();

        if ($existingEntry) {//when user id and filter id is exist   data is delete 
        favorate_user::where(
        'id_user', $request->user_id)
        ->where('id_favorite', $request->favorate_id)
        ->delete();

        $userId = $request->user_id; // Replace with the actual user ID
        $products = DB::table('product')
        ->leftJoin('favorate_user', function ($join) use ($userId) {
            $join->on('product.id', '=', 'favorate_user.id_favorite')
                ->where('favorate_user.id_user', '=', $userId);
        })
        ->select('product.*', DB::raw('IF(favorate_user.id IS NOT NULL, true, false) as is_favorited'))
        ->get();

        $productsData = $products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'title' => $product->title,
                'price' => $product->price,
                'Discound' => $product->Discound,
                'Quantity' => $product->Quantity,
                'image' => $product->image,
                'filter_name' => $product->filter_name,
                'category_name' => $product->category_name,
                'is_favorited' => $product->is_favorited,
            ];
        });
        $favoritedProducts = DB::table('product')
                ->join('favorate_user', 'product.id', '=', 'favorate_user.id_favorite')
                ->where('favorate_user.id_user', '=', $userId)
                ->select('product.*', DB::raw('true as is_favorited'))
                ->get();

        return response()->json([
            'delete successfully' => true,
            'products' => $productsData,
            'saved' => $favoritedProducts], 200);
        } else { 

        favorate_user::insert([
        'id_user'=> $request->user_id,
        'id_favorite'=> $request->favorate_id,
        ]);

        $userId = $request->user_id; // Replace with the actual user ID
        $products = DB::table('product')
        ->leftJoin('favorate_user', function ($join) use ($userId) {
            $join->on('product.id', '=', 'favorate_user.id_favorite')
                ->where('favorate_user.id_user', '=', $userId);
        })
        ->select('product.*', DB::raw('IF(favorate_user.id IS NOT NULL, true, false) as is_favorited'))
        ->get();

        $productsData = $products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'title' => $product->title,
                'price' => $product->price,
                'Discound' => $product->Discound,
                'Quantity' => $product->Quantity,
                'image' => $product->image,
                'filter_name' => $product->filter_name,
                'category_name' => $product->category_name,
                'is_favorited' => $product->is_favorited,
            ];
        });
    
            $favoritedProducts = DB::table('product')
                ->join('favorate_user', 'product.id', '=', 'favorate_user.id_favorite')
                ->where('favorate_user.id_user', '=', $userId)
                ->select('product.*', DB::raw('true as is_favorited'))
                ->get();
 
                
        return response()->json([
            'success' => 'Added successfully.',
            'products' => $productsData,
            'saved' => $favoritedProducts],
             200);}
        } else {
        return response()->json(['error' => $validator->errors()->all()], 401);
        }}
   
        public function fav_us_pro_get(Request $request){
        $userFavorites = favorate_user::where('id_user', $request->id)->pluck('id_favorite')->toArray();//datae useraka agarenetawa
        return product::whereIn('id',$userFavorites)->get();
        }

}

