<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('theme', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('header');
            $table->string('description', 10000);
            $table->string('image');
            $table->boolean('visible');
            $table->string('note1')->default("");
            $table->string('note2')->default("");
            $table->string('note3')->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('theme');
    }
};
