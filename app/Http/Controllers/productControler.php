<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\{favorate, filter, product, images, shop_user, User, shop, favorate_user, Purchased,};
use Illuminate\Support\Facades\DB;

class productControler extends Controller
{   
    public function search(Request $request)
    {
        return response()->json(['search' => product::Ofsearch($request->search)->get()]);
    }

    public function single_product(Request $request)
    {
        return response()->json(['singleProduct' => product::where('id', $request->id)->get()]);
    }

    public function filter()
    {
        return response()->json(['filter' => filter::all()]);
    }

    // public function product_filter(Request $request)
    // {
    //     $product = product::Offilter($request->filter_id)->get();
    //     return response()->json(["product"=>$product]);
    // }
    public function product_filter(Request $request)
    {
        $product = product::Offilter_name($request->filter_name)->Ofcategory_name($request->category_name)->get();
        return response()->json(['product'=>$product]);
    }

    
    public function product_filter_name(Request $request)
    {
        $products = product::all();

        // Convert the products collection to an array and encode it as JSON
        // $jsonData = $products->toArray();
    
        // Return the JSON response
        // return $jsonData;
        return $products;

        
    }
    public function productFavourite(Request $request)
    {
        
        $userId = $request->userID; // Replace with the actual user ID
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

        return  response()->json([ 
            'products' => $productsData
          ]);
        }
       
        public function SavedProdcuts(Request $request){
            
            $userId = $request->userID; 
    
            $favoritedProducts = DB::table('product')
                ->join('favorate_user', 'product.id', '=', 'favorate_user.id_favorite')
                ->where('favorate_user.id_user', '=', $userId)
                ->select('product.*', DB::raw('true as is_favorited'))
                ->get();

            return response()->json([ 
                'products' => $favoritedProducts
            ]);
        }


    public function shop(Request $request)
    {
      
    $validator = Validator::make($request->all(), [
        'products' => 'required|array',
        'user_id' => 'required',
    ]);
   


    if (!$validator->fails()) {
        $products = $request->input('products');
        $rand_id=rand(1,10000);

        foreach ($products as $productData) {
            $validatorProduct = Validator::make($productData, [
                'id' => 'required',
                'name' => 'required|max:20',
                'title' => 'required|max:100|min:3',
                'price' => 'required|integer',
                'Discound' => 'required',
                'Quantity' => 'required',
            ]);

            if ($validatorProduct->fails()) {
                return response()->json(['error' => $validatorProduct->errors()->all()], 401);
            }

            
            // Insert new shop item
            shop::insert([
                'id_shop' => $productData['id'],
                'name' => $productData['name'],
                'title' => $productData['title'],
                'price' => $productData['price'],
                'Discound' => $productData['Discound'],
                'Quantity' => $productData['Quantity'],
                'id_user' => $request->user_id,
                'order_id'=> $rand_id,
                'image'=>$productData['image']
            ]);

            // Update quantity of product
            $product = product::find($productData['id']);
            $newDecreasedQuantity = $product->Quantity - $productData['Quantity'];
            $product->Quantity = $newDecreasedQuantity;
            $product->save();

                  }
                  if (shop_user::where('id_user', $request->user_id)->exists()) {
                            shop_user::where('id_user', $request->user_id)->delete();}else{
                                return response()->json(['success' => "shopping cart is empty "], 200);

                            }
                  return response()->json(['success' => true], 200);
        } else {
            return response()->json(['error' => [$validator->errors()->all(),"please take a product " ]], 401);
        }
    }

    public function shop_us_pro_set(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'shop_id' => 'required',
                'user_id' => 'required',
            ]
        );

        if (!$validator->fails()) {
            $existingEntry = shop_user::where('id_user', $request->user_id)
                ->where('id_shop', $request->shop_id)
                ->first();

            if ($existingEntry) {
                // shop_user::where('id_user', $request->user_id)
                //     ->where('id_shop', $request->shop_id)
                //     ->delete();
                return response()->json(['success' => " This product exists"], 200);
            } else {
                shop_user::insert([
                    'id_user' => $request->user_id,
                    'id_shop' => $request->shop_id,
                    'quantity'=>1,
                ]);
                return response()->json(['success' => 'Added successfully.'], 200);
            }
        } else {
            return response()->json(['error' => $validator->errors()->all()], 401);
        }
    }
    public function PurchaseProducts(Request $request){
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'product_id' => 'required|integer',
            'quantity' => 'required|integer' 
        ]);
    
        // Create a new purchase record with the provided quantity
        $purchase = Purchased::create([
            'user_id' => $validatedData['user_id'],
            'product_id' => $validatedData['product_id'],
            'quantity' => $validatedData['quantity'] // Assign quantity from request data
        ]);
    
        return response()->json(['message' => 'Purchase saved successfully', 'purchase' => $purchase], 201);
    

    }

    public function PurchasedProducts(Request $request){
        $user_id = $request->user_id;

        // Retrieve all purchased products for the given user ID
        $purchasedItems = Purchased::where('user_id', $user_id)
                                   ->with('product') // Load the associated product data
                                   ->get();
    
        // Ensure that quantity information is included in the response
        foreach ($purchasedItems as $item) {
            $item->product->quantity = $item->quantity; // Assign the quantity to the product object
        }
    
        // Return the response with included quantity information
        return response()->json(['purchased_items' => $purchasedItems], 200);
       
    }

    public function updateQuantity(Request $request) {
        // Validate incoming request data
        $validatedData = $request->validate([
            'quantity' => 'required|integer|min:1', // Add your validation rules here
        ]);

        $purchasedItem = shop_user::where(['id_user'=>$request->user_id,'id_shop'=>$request->product_id]);
    
        // Check if the purchased item exists
        if (!$purchasedItem) {
            return response()->json(['message' => 'Purchased item not found'], 404);
        }
    
        // Update the quantity of the purchased item
        $purchasedItem->quantity = $validatedData['quantity'];
        $purchasedItem->save();
    
        // Return a response indicating success
        return response()->json(['message' => 'Quantity updated successfully', 'purchased_item' => $purchasedItem], 200);
    }

    public function shop_us_pro_get(Request $request)
    {
        $userFavorites = shop_user::where('id_user', $request->id)->pluck('id_shop');
        $products = product::whereIn('id', $userFavorites)->get();

        return response()->json(['products' => $products]);
        
    }
    public function shop_us_pro_get_quanity(Request $request){
$product=shop::where(['id_user'=>$request->user_id,'id_shop'=>$request->shop_id])->get();

$product->Quantity=$request->Quantity;
$quantity=$product->Quantity;
return response()->json(["quantity"=>$quantity]);

    }
    public function PurchaseItems(Request $request)
    {
        $userFavorites = shop_user::where('id_user', $request->id)->pluck('id_shop')->toArray();
        return response()->json(['products' => product::whereIn('id', $userFavorites)->get()]);
    }

    public function getPurchasedItems(Request $request)
    {
        $userFavorites = shop_user::where('id_user', $request->id)->pluck('id_shop')->toArray();
        return response()->json(['products' => product::whereIn('id', $userFavorites)->get()]);
    }


public function get_shop(Request $request){
//->where('id_user',$request->id_user)
$shop = Shop::Ofshop($request->id,$request->order_id);
    
if ($shop->isNotEmpty()) {
    return response()->json(["shop" => $shop]);
} else {
    return response()->json(["error" => "No matching shop found"]);
}


}



public function get_order(Request $request){
    $shop = Shop::Oforder_id($request->id);
    
    if (is_array($shop) && !empty($shop)) {
        return response()->json(["order" => $shop]);
    } else {
        return response()->json(["error" => "No matching shop found"]);
    }
}

    







}
