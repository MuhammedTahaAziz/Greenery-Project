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
        return response()->json(['error' => "Deleted Successfully"]);
        } else { 

        favorate_user::insert([
        'id_user'=> $request->user_id,
        'id_favorite'=> $request->favorate_id,
        ]);
        return response()->json(['error' =>"Added Successfully"]);}
        } else {
        return response()->json(['error' => $validator->errors()->all()], );
        }}
   
        public function fav_us_pro_get(Request $request){
        $userFavorites = favorate_user::where('id_user', $request->id)->pluck('id_favorite')->toArray();//datae useraka agarenetawa
        return ['product'=>product::whereIn('id',$userFavorites)->get(),'favorateId'=>$userFavorites];
        }

}
