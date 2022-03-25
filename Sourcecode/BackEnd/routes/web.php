<?php

use App\Http\Controllers\BoardController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use Illuminate\Support\Facades\Route;

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


Route::get('dashboard', [DashboardController::class, 'index']);

//users

Route::get('users', [UserController::class, 'index']);
Route::get('add-user', [UserController::class, 'add']);
Route::get('edit-user/{id}', [UserController::class, 'edit']);
Route::put('update-user/{id}', [UserController::class, 'update']);
Route::post('insert-user', [UserController::class, 'insert']);
Route::get('delete-user/{id}', [UserController::class, 'destroy']);


//categories

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('add-category', [CategoryController::class, 'add']);
Route::get('edit-category/{id}', [CategoryController::class, 'edit']);
Route::post('insert-category', [CategoryController::class, 'insert']);
Route::put('update-category/{id}', [CategoryController::class, 'update']);
Route::get('delete-category/{id}', [CategoryController::class, 'destroy']);


///boards

Route::get('boards', [BoardController::class, 'index']);
Route::get('add-board', [BoardController::class, 'add']);
Route::get('edit-board/{id}', [BoardController::class, 'edit']);
Route::put('update-board/{id}', [BoardController::class, 'update']);
Route::post('insert-board', [BoardController::class, 'insert']);
Route::get('delete-board/{id}', [BoardController::class, 'destroy']);

//orders 
Route::get('orders', [OrderController::class, 'index']);
Route::get('delete-order/{id}', [OrderController::class, 'destroy']);
Route::get('show-order/{id}', [OrderController::class, 'show']);
Route::get('accept-order/{id}', [OrderController::class, 'acceptStatus']);

//reviews

Route::get('reviews', [ReviewController::class, 'index']);
Route::get('delete-review/{id}', [ReviewController::class, 'destroy']);

//contacts

Route::get('contacts', [ContactController::class, 'index']);
Route::get('delete-contact/{id}', [ContactController::class, 'destroy']);