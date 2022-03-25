<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Order;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index (){
        $user = User::all();
        $board = Board::all();
        $category = Category::all();
        $order = Order::all();
        $review = Review::all();
        $contact = Contact::all();
        return view('admin.index',compact('user','board','category','order','review','contact'));
    }
}
