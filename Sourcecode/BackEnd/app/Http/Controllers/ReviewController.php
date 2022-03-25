<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $review = DB::table("reviews")->join("users", "users.name", "=", "reviews.user_name")->join("boards", "boards.id", "=", "reviews.board_id")->select("reviews.*", "users.email","boards.name")->get();
        return view('admin.review.index', compact('review'));
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $review = Review::where('board_id',"=","$id")->get();
        return response()->json([
            "message"=>"reviews fetched",
            "review"=>$review
        ]);
    }

    public function insert(Request $request)
    {
        $checkReview = Review::where([['board_id','=',"{$request['board_id']}"],['user_name',"=","{$request['user_name']}"]])->get();
        if(count($checkReview) > 0){
            return response()->json([
                "message"=>"you already submitted a review",
            ]);
        }
        $review = new Review();
        $review->user_name = $request["user_name"];
        $review->board_id = $request["board_id"];
        $review->review = $request["review"];
        $review->save();
        return response()->json([
            "message"=>"review Submitted",
            "review"=>$review
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $review = Review::find($id);
        $review->delete();
        return redirect('/reviews')->with('success', 'Review Deleted !');
    }
}
