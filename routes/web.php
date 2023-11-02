<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
//Route::get('/gegevens', function () {
//    return view('welcome');
//});
//Route::get('/themes', 'App\Http\Controllers\ThemeController@getThemes');
//Route::post('/add/theme', 'App\Http\Controllers\ResultsController@store');
//Route::post('/create/session', '\App\Http\Controllers\SessionController@createNewSession');

