<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shop extends Model
{
    use HasFactory;
    protected $table ='shop';
    public $timestamps = false;


    
    public function scopeOforder_id($query, $id) {
        if ($id) {
            $orderIds = $query->where('id_user', $id)
                              ->orderBy('order_id') // Ensure only unique order_id values
                              ->get();
    
            // Transform the plucked array into an associative array
            $keyedOrderIds = ['order_id' => $orderIds->all()];

            return $keyedOrderIds;
        } else {
            return collect(); 
        }
    }

        public function scopeOfshop($quere,$user_id,$order_id){
            if ($user_id && $order_id) {
                return $quere->where('id_user', $user_id)->where('order_id', $order_id)->get();
            } else {
                return collect(); 
            }}
   

        }
        
        // [
        //     {order_id:5616},
        //     {order_id:6659},
        //     {order_id:8096},
        //     {order_id:9172},
        // ]
        /*
        {


        }
        */