<?php

namespace Database\Seeders;
use App\Models\{filter,product,shop,shop_user,categories};

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {    


        categories::factory(3)->create();
        filter::factory(5)->create();  
        product::factory(10)->create();
        //images::factory(10)->create();
        shop::factory(10)->create();  
        shop_user::factory(10)->create();

        // favorate::factory(10)->create();
        // favorate_user::factory(10)->create();


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
