<?php

namespace Database\Factories;
use App\Models\User;
use App\Models\shop;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class shop_userFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userid = User::all()->random();
        $shopid = shop::all()->random();


        return [
            'id_user'=>$userid->id,
            'id_shop'=>$shopid->id     
        
        ];
    }
}
