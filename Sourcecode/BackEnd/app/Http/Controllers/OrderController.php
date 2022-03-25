<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $order = DB::table("orders")->join("users", "users.id", "=", "orders.user_id")->select("orders.*", "users.name as name","users.email")->get();
        return view('admin.order.index', compact('order'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $order = new Order();
        $order->total = $request["total"];
        $order->user_id = $request["user_id"];
        $order->address = $request["address"];
        $order->phone = $request["phone"];
        $order->city = $request["city"];
        $order->cvv = $request["cvv"];
        $order->expYear = $request["expYear"];
        $order->cardNumber = $request["cardNumber"];
        $order->cardName = $request["cardName"];
        $order->save();
        $cart = $request["cartItems"];
        $newestOrder = $order->id;
        foreach($cart as $val){
            $orderItem = new OrderItem([
                'order_id'=>$newestOrder,
                "board_id"=>$val["id"],
                "quantity"=>$val["quantity"]
            ]);
            $board = Board::where("id","=","{$val['id']}")->first();
            $board["stock"] = $board["stock"] - $val["quantity"];
            $board->update();
            $orderItem->save();
        }
        return response()->json([
            "message"=>"order Submitted",
            "order"=>$order,
            "board"=>$board
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = DB::table("order_items")->join("boards", "boards.id", "=", "order_items.board_id")->select("order_items.*", "boards.name as name",'boards.price')->where('order_id',"=","$id")->get();
        return view('admin.order.show', compact('order'));
    }

    public function acceptStatus ($id){
        $order = Order::find($id);
        $order->status = "accepted";
        $order->update();
        return redirect('/orders')->with('success', 'Order Accepted !');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        $orderDetails = DB::table("order_items")->where('order_id',"=","$id")->get();
        foreach($orderDetails as $val){
            $id =$val->board_id;
            $board = Board::find($id);
            $board->stock = $board->stock + $val->quantity;
            $board->update();
        }
        OrderItem::where('order_id',$order->$id)->delete();
        $order->delete();
        return redirect('/orders')->with('success', 'Order Deleted !');
    }
    public function destroyProfileOrder($id)
    {
        $order = Order::find($id);
        $orderDetails = DB::table("order_items")->where('order_id',"=","$id")->get();
        foreach($orderDetails as $val){
            $id =$val->board_id;
            $board = Board::find($id);
            $board->stock = $board->stock + $val->quantity;
            $board->update();
        }
        $order->delete();
        OrderItem::where('order_id','=',"$id")->delete();
        return response()->json([
            "message"=>"order Deleted"
        ]);
    }
    
}
