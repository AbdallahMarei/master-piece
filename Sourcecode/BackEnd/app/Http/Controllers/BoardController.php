<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Category;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BoardController extends Controller
{
    public function index (){
        $board = DB::table("boards")->join("categories", "categories.id", "=", "boards.cat_id")->select("boards.*", "categories.name as cat_name")->get();
        return view('admin.board.index', compact('board'));
    }

    public function ShowBoards (){
        $board = DB::table("boards")->join("categories", "categories.id", "=", "boards.cat_id")->select("boards.*", "categories.name as cat_name")->get();
        $category = Category::all();
        return response()->json([
            "message"=>"All boards",
            "boards"=>$board,
            "categories"=>$category
        ]);
    }

    public function ShowDetailedBoard ($id){
        $board = DB::table("boards")->join("categories", "categories.id", "=", "boards.cat_id")->join("users","users.email","=","boards.user_email")->select("boards.*", "categories.name as cat_name","users.name as username")->where('boards.id',"=","$id")->get();
        $boardId = $board[0]->cat_id;
        $recommendedBoards = Board::where("cat_id","=","$boardId")->get();
        return response()->json([
            "message"=>"All boards",
            "board"=>$board,
            "reco"=>$recommendedBoards
        ]);
    }
    
    public function add (){
        $category = Category::all();
        return view('admin.board.add' ,compact('category'));
    }

    public function insert (Request $request ){
        $board = new Board();
        $board->image = $request->input('image');
        $board->cat_id = $request->input('cat_id');
        $board->name = $request->input('name');
        $board->brief = $request->input('brief');
        $board->price = $request->input('price');
        $board->description = $request->input('description');
        $board->stock = $request->input('stock');
        $board->user_email = $request->input('user_email') ? $request->input('user_email') : "snakesandladders@gmail.com";
        $board->condition = $request->input('condition') == True ? 'used' : 'new';
        $board->save();
        return redirect('/boards')->with('status' , "board Added Successfully!!!");
    }

    public function edit($id){
        $board = Board::find($id);
        $category = Category::all();
        return view('admin.board.edit', compact('board','category'));
    }

    public function update(Request $request ,$id){
        $board = Board::findOrFail($id);
        $board->image = $request->input('image');
        $board->cat_id = $request->input('cat_id');
        $board->name = $request->input('name');
        $board->brief = $request->input('brief');
        $board->price = $request->input('price');
        $board->description = $request->input('description');
        $board->stock = $request->input('stock');
        $board->user_email = $request->input('user_email') ? $request->input('user_email') : "snakesandladders@gmail.com";
        $board->condition = $request->input('condition') == True ? 'used' : 'new';
        $board->update();
        return redirect('/boards')->with('success', 'board Updated!');
    }

    public function destroy($id){
        $board = Board::find($id);
        $board->delete();
        return redirect('/boards')->with('success', 'Deleted Successfully!');
    }
    public function profileBoards(Request $request){
        $board = DB::table("boards")->join("categories", "categories.id", "=", "boards.cat_id")->join("users","users.email","=","boards.user_email")->select("boards.*", "categories.name as cat_name","users.name as username")->where('boards.user_email',"=","$request->email")->get();
        $order = Order::where("user_id","=","$request->id")->get();
        return response()->json([
            "message"=>"All boards",
            "board"=>$board,
            "orders"=>$order
        ]);
    }

    public function getCategory($id){
        $board = Board::where("cat_id","=","$id")->get();
        return response()->json([
            "message"=>"All boards",
            "board"=>$board
        ]);
    }
}
