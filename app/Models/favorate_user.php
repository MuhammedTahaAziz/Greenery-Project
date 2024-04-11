<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorate_user extends Model
{
    use HasFactory;
    protected $table='favorate_user';
    public $timestamps = false;
    public function scopeOfu_fa($query, $user_id)// lera ema  awaman drust krdwa bo henanawae aw favoraitana bapey id useraka 
    {
        if ($user_id) {
            return $query->where('id_user',$user_id);
            //->where('id_shop', $shop_id);
        } else {
            return $query;
        }
    }



}