<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index (){
        $category = Category::all();
        return view('admin.category.index', compact('category'));
    }
    public function add (){
        return view('admin.category.add');
    }
  
    public function insert (Request $request ){
        $category = new Category();
        $category->name = $request->input('name');
        $category->save();
        return redirect('/categories')->with('status' , "Category Added Successfully!!!");
    }

    public function edit($id){
        $category = Category::find($id);
        return view('admin.category.edit', compact('category'));
    }

    public function update(Request $request ,$id){
        $category = Category::findOrFail($id);
        $category->name = $request->input('name');
        $category->update();
        return redirect('/categories')->with('success', 'Category Updated!');
    }

    public function destroy($id){
        $category = Category::find($id);
        Board::where('cat_id',"=","$id")->delete();
        $category->delete();
        return redirect('/categories')->with('success', 'Deleted Successfully!');
    }
}
