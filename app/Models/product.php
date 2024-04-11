<?php

namespace App\Models;

use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $table ='product';

    protected $fillable = [
        'name',
        'title',
        'price',
        'discount',
        'quantity',
        'image',
        'filter_name',
        
    ];
    public $timestamps = false;




    public function scopeOffilter_name($quere,$filter_name)// wata  katek klik la filter akain aw productanae ka sar baw naw3a flitaran boman benetawa 
    //$filter_id aw id ka katek clik la filter akain    id war agretw bam   functionae adar ta datae product benetawa 
    {
    if($filter_name)
    { return $quere->where('filter_name',$filter_name);}
       else
    {return $quere;}
   }// bo product ta filtere bkat
   
 public function scopeOffilter($quere,$filter_id)// wata  katek klik la filter akain aw productanae ka sar baw naw3a flitaran boman benetawa 
 //$filter_id aw id ka katek clik la filter akain    id war agretw bam   functionae adar ta datae product benetawa 
 {
 if($filter_id)
 { return $quere->where('filter_id',$filter_id);}
    else
 {return $quere;}
}// bo product ta filtere bkat


// public function scopeOfcategory($quere,$seasion){
//     if($seasion)
//    {$seasion_product=$quere->where('seasion',$seasion);
//    return $seasion_product;}
//    else
//    return $quere;
   
//    }
public function scopeOfcategory_name($quere,$category_name){
  if($category_name)
 {
  $category_product=$quere->where('category_name',$category_name);
 return $category_product;}
 else
 return $quere;
 
 }



public function scopeOfsearch($query, $search)// bo fltar krdne ctegory yan bo aw fltaranae xoman wak bahar hawen pize zstan
{ 
    if($search)
    
    {return $query->where('name','LIKE','%'.$search.'%');}// wata la title   keshae nabe la saratabet yan kotae harwaha la peshe pet habet yan na ba haman shewa bo dwawashe // pem wabe atanen haman nwe pal qweryaka bakar benen 
    
         else

           {return $query;}
}

public function scopeOfsearch2($query, $search)//  haman eshe sarawa balam amayan abe ela bas aw nawabet anja aehenet 
    {if($search)
    
    {return $query->where('name','=',$search);}//
         else

           {return $query;}
}

  public function purchases()
      {
          return $this->hasMany(Purchased::class);
      }

}
