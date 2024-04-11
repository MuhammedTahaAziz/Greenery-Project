<?php

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration //implements  MustVerifyEmail // pewestmana bo login system 
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('PhoneNum');
            $table->string('image')->nullable();
            $table->string('email')->unique();
            $table->string('address');
            $table->timestamp('email_verified_at')->nullable();// nabe la bbret
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
