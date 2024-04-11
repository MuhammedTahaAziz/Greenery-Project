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
        Schema::create('shop_user', function (Blueprint $table) {
            $table->id();
             
            //  zead krdne  count bo era 
            // katek klik la icone shop akae agar product habw wata wjude habe la taeble 3 awa cout zead bkat  ka gashta sfr bsretawa   la route set akret 
           
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_shop')->constrained('product')->onDelete('cascade')->onUpdate('cascade'); // Corrected table name to 'favorate'
        
        });
        }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_user');
    }
};
