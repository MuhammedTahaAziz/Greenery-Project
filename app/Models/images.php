<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class images extends Model
{
    use HasFactory;
     
    public $timestamps = false;
    protected $table ='image';
    protected $fillable =[
        'name',
        'id_image'
    ];
}
