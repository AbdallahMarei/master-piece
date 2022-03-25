@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h4>Add Board game</h4>
        </div>
        <div class="card-body">
            <form action="{{ url('insert-board') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="col-md-6 mb-3" >
                        <label for="">Name</label>
                        <input type="text" class="form-control" name="name">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">User Email</label>
                        <input type="text" class="form-control" name="user_email">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Category</label>
                        <select name="cat_id" class="form-control">
                            @foreach($category as $item )
                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                            @endforeach
                        </select>
                        <hr>
                    </div>
                    <div class="col-mid-12 mb-3">
                        <label for="">Brief</label>
                        <textarea class="form-control" name="brief"  rows="5"></textarea>
                        <hr>
                    </div>
                    <div class="col-mid-12 mb-3">
                        <label for="">Description</label>
                        <textarea class="form-control" name="description"  rows="5"></textarea>
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Stock</label>
                        <input type="number" name="stock">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Price</label>
                        <input type="number" name="price">
                        <hr>
                    </div>
                    <div class="col-mid-6">
                        <label>Image</label>
                        <input type="text" name="image" class="form-control">
                        <br>
                    </div>
                    <div class="col-md-12 mb-3" >
                        <label for="">Used</label>
                        <input  type="checkbox" name="condition">
                    </div>
                    <div class="col-mid-12">
                        <button type="submit" class="btn btn-success">Add Board</button>
                    </div>


                </div>
            </form>
        </div>
    </div>
@endsection