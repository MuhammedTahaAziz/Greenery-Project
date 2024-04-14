<?php

namespace App\Http\Controllers;

use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\File;
use App\Models\{product,images, User,Shop};
use Illuminate\Support\Facades\Validator;

class admincontroller extends Controller
{

    // Inserting a product
    public function insert(Request $request)
    {
        if($request->category != "gift"){
            $validator = Validator::make($request->all(), [
                'image' => 'required|image|mimes:jpeg,png,jpg,webp',
                'title' => 'required|max:250',
                'name' => 'required|max:20',
                'price' => 'required|integer',
                'quantity' => 'required|integer',
                'category' => 'required',
                'season' => 'required',
            ]);
            if (!$validator->fails()) {
                $image = $request->file('image');
                $lastProductId = Product::max('id')+1;
                $filename = "Product-" . $lastProductId . "." . $request->image->getClientOriginalExtension();
                $request->image->move(public_path('/products'), $filename);

           $product =  Product::insert([
                'filter_name' => $request->season,
                'category_name' => $request->category,
                'name' => $request->name,
                'title' => $request->title,
                'price' => $request->price,
                'Quantity' => $request->quantity,
                'Discound' => $request->discount,
                'image' => $filename,

            ]);

            return response()->json(['success' => true], 200);
        } else {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }
        }else{
            $validator = Validator::make($request->all(), [
                'image' => 'required|image|mimes:jpeg,png,jpg',
                'title' => 'required|max:250',
                'name' => 'required|max:20',
                'price' => 'required|integer',
                'quantity' => 'required|integer',
                'category' => 'required',
            ]);
            if (!$validator->fails()) {
                $image = $request->file('image');
                $lastProductId = Product::max('id')+1;
                $filename = "Product-" . $lastProductId . "." . $request->image->getClientOriginalExtension();
                $request->image->move(public_path('/products'), $filename);

           $product =  Product::insert([
                'filter_name' => "",
                'category_name' => $request->category,
                'name' => $request->name,
                'title' => $request->title,
                'price' => $request->price,
                'Quantity' => $request->quantity,
                'Discound' => $request->discount,
                'image' => $filename,
            ]);

            return response()->json(['success' => true], 200);
        } else {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }
        }

        
    }

    // Deleting a product
    public function Delete(Request $Request)
    {
       
        // if ($id->role == 'Admin') {
            $idProduct = $Request->id;
            $dpr = Product::find($idProduct);

            if ($dpr) {
                $imagePath = public_path("Uploads/property/{$dpr->image}");
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }

                $dpr->delete();
                return response()->json(['message' => 'Delete successful'], 200);
            } else {
                return response()->json(['error' => 'Product not found'], 404);
            }
        // } else {
        //     return response()->json(['error' => 'This is not an authenticated ADMIN'], 401);
        // }
    }

    // Updating a product
    public function update(Request $request)
    {
       

            $idProduct = $request->id;
            $product = Product::find($idProduct);

            if ($product) {
                $validator = Validator::make($request->all(), [
                    'image' => 'image|mimes:jpeg,png,jpg',
                    'name' => 'max:20',
                    'title' => 'max:100|min:3',
                    'price' => 'integer',
                    // 'category_name' => 'exists:categories,name',
                ]);

                if ($validator->fails()) {
                    return response()->json(['error' => $validator->errors()->all()], 401);
                }

                $product->name = $request->name;
                $product->title = $request->title;
                $product->price = $request->price;
                $product->Discound = $request->Discound;
                $product->filter_name = $request->filter_name;
                $product->category_name = $request->category_name;
                $product->Quantity = $request->Quantity;

                if ($request->hasFile('image')) {
                    if ($product->image) {
                        $imagePath = public_path("/products/{$product->image}");
                        if (file_exists($imagePath)) {
                            unlink($imagePath);
                        }
                    }

                    $image = $request->file('image');
                    $filename = "Product-" . $product->id . "." . $request->image->getClientOriginalExtension();
                    $request->image->move(public_path('/products'), $filename);

                    $product->image = $filename;
                }

                $product->save();

                return response()->json(['success' => true], 200);
            } else {
                return response()->json(['error' => 'Product not found'], 404);
            }
    }


    public function ViewUsers(Request $request){
        $users = User::all();
        return $users;
    }


    public function get_shop(){
        $shop = shop::all();
            
        if ($shop->isNotEmpty()) {
            return response()->json(["shop" => $shop]);
        } else {
            return response()->json(["error" => "No matching shop found"]);
        }
        
        
        }
        
}


