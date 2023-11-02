<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/themes', 'App\Http\Controllers\ThemeController@getThemes');
Route::get('/advices', 'App\Http\Controllers\AdviceController@getAdvices');

Route::post('/add/theme', 'App\Http\Controllers\ResultsController@store');
Route::post('/get/results', '\App\Http\Controllers\ResultsController@getSessionID');

Route::post('/create/session', '\App\Http\Controllers\SessionController@createNewSession');

//Route::get('/token', function (Request $request) {
//    $token = csrf_token();
//    print($token);
//});


