<?php

use App\Http\Controllers\BoardController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("register",[UserController::class,'register']);
Route::post("login",[UserController::class,'login']);
Route::post("order",[OrderController::class,'store']);
Route::get("boards",[BoardController::class,'showBoards']);
Route::get("boards/{id}",[BoardController::class,'ShowDetailedBoard']);
Route::get("category/{id}",[BoardController::class,'getCategory']);


Route::post("reviews",[ReviewController::class,'insert']);
Route::get("reviews/{id}",[ReviewController::class,'show']);

Route::post("password/{id}",[UserController::class,'updatePass']);
Route::post("name/{id}",[UserController::class,'updateName']);
Route::get("profile-boards",[BoardController::class,'profileBoards']);

Route::get('delete-order/{id}', [OrderController::class, 'destroyProfileOrder']);

Route::post("contacts",[ContactController::class,'insert']);