<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{favorate, filter,product,images, shop_user, User,shop,favorate_user};

class User_controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function update(Request $request)
    { 
        
    // $id_user=$request->id_user;
    //     $user = User::findOrFail($id_user); 
        
    //     if ($user) { 

    //         $user->name = $request->name; 
    //         $user->email = $request->email;
    //         $user->phone = $request->phone;// abe zeadekam  la database 
    //         $user->image=$request->image;// abe zeadekaen la database 

    //        // abe fltaraka ba chekbox daneen 
            

    //         $user->save();

    //         return "Update successful";
    //     } else {
    //         return "Product not found";
    //     }

    }

}
