<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/store','MainController@store');
Route::get('/show','MainController@show');
Route::post('/delete/{id}','MainController@delete');
Route::post ( '/edititems/{id}', 'MainController@editItem' );
