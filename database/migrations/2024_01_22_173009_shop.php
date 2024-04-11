<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shop', function (Blueprint $table) {
            $table->id();  
            $table->string('name');
            $table->string('title');
            $table->integer('price');
            $table->integer('Discound')->default(0);   
            $table->integer('Quantity')->default(0);
            $table->integer('id_user');
            $table->integer('id_shop');
           // $table->foreignId('filter_id')->constrained('filters')->onDelete('cascade');
        });
       }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop');
    }
};
