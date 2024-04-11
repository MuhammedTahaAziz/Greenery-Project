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
        Schema::create('favorate_user', function (Blueprint $table) {
            $table->id(); 
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade');
            $table->foreignId('id_favorite')->constrained('product')->onDelete('cascade'); // Corrected table name to 'favorate'
        });
     }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorate_user');
    }
};
