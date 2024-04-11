<?php

namespace Database\Factories;

use App\Models\{filter,categories};
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\product;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class productFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
protected $model=product::class;

    public function definition(): array
    {
      //  $filter = filter::all()->random();
        $categories=categories::all()->random();
        $filter = Filter::all()->random(); // Create a filter
        return [
            'name' => $this->faker->name(),
            'title' => $this->faker->title(),
            'price' => $this->faker->numberBetween(100, 1000),
            'image' => $this->faker->name(),
            'filter_name' => $filter->name, 
            'category_name' => $categories->name, // Use the created category's name
            //'categories_id'=>$categories->id,// Use the created filter's name as the filter name for the product
        ];
    }
}
