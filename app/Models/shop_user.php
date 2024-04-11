<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shop_user extends Model
{
    use HasFactory;
    protected $table ='shop_user';

    public $timestamps = false;



 public function scopeOfu_sh($query, $user_id,)// lera ema  awaman drust krdwa bo henanawae aw shopakan bapey id useraka 
{
    if ($user_id) {
        return $query->where('id_user', $user_id);
        //->where('id_shop', $shop_id);
    } else {
        return $query;
    }
}





}
