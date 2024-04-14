<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shop extends Model
{
    use HasFactory;
    protected $table ='shop';



    
    public function scopeOforder_id($query, $id) {
        if ($id) {
            $orderIds = $query->where('id_user', $id)
            ->orderByRaw('TIME(dateTimeCreate) DESC') 
            ->orderByRaw('DATE(dateTimeCreate) DESC') 
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
                return $query->where('id_user', $user_id)
                ->where('order_id', $order_id)
                 ->orderByRaw('TIME(dateTimeCreate) DESC') // Order by time component in descending order

                ->orderByRaw('DATE(dateTimeCreate) DESC') // Order by date component in descending order
                ->get();
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