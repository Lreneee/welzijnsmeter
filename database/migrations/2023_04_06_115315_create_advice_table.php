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
        Schema::create('advice', function (Blueprint $table) {
            $table->id();
            $table->string('theme_name');
            $table->string('header_title');
            $table->string('note1')->default("");
            $table->string('note2')->default("");
            $table->string('note3')->default("");
            $table->string('note4')->default("");
            $table->string('image');
            $table->string('button_name')->default("");
            $table->string('button_link')->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advice');
    }
};
