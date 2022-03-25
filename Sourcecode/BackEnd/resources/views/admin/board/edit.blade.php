@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h4>Edit Board</h4>
        </div>
        <div class="card-body">
            <form action="{{ url('update-board/'.$board->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-md-6 mb-3" >
                        <label for="">Name</label>
                        <input value="{{ $board->name }}"  type="text" class="form-control" name="name">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">User Email</label>
                        <input value="{{ $board->user_email }}"  type="text" class="form-control" name="user_email">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Category</label>
                        <select name="cat_id" class="form-control">
                            @foreach($category as $item )
                            <option {{ $board->cat_id == $item->id ? 'selected' : '' }} value="{{ $item->id }} ">{{ $item->name }}</option>
                            @endforeach
                        </select>
                        <hr>
                    </div>
                    <div class="col-mid-12 mb-3">
                        <label for="">Brief</label>
                        <textarea class="form-control" name="brief"  rows="5">{{ $board->brief }}</textarea>
                        <hr>
                    </div>
                    <div class="col-mid-12 mb-3">
                        <label for="">Description</label>
                        <textarea class="form-control" name="description"  rows="5">{{ $board->description }}</textarea>
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Stock</label>
                        <input value="{{ $board->stock }}" type="number" name="stock">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Price</label>
                        <input value="{{ $board->price }}" type="number" name="price">
                        <hr>
                    </div>
                    <div class="col-mid-6">
                        <label for="">Image</label>
                        <input value="{{ $board->image }}"  type="text" class="form-control" name="image">
                        <hr>
                    </div>
                    <div class="col-md-12 mb-3" >
                        <label for="">Used</label>
                        <input  type="checkbox" name="condition">
                    </div>
                    <div class="col-mid-12">
                        <button type="submit" class="btn btn-success">Edit board</button>
                    </div>


                </div>
            </form>
        </div>
    </div>
@endsection