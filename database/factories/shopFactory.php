<?php

namespace Database\Factories;

use App\Models\product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class shopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user=User::all();
        $product=product::all();
        return [
            'name' =>  fake()->name(),
            'title' => fake()->title(),
            'price' => fake()->numberBetween(100,1000),
            'id_user'=>fake()->$user->id,
            'id_shop'=>fake()->$product->id,
                ];
    }
}
