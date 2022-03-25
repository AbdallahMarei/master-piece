@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h4>Edit category</h4>
        </div>
        <div class="card-body">
            <form action="{{ url('update-category/'.$category->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-md-6 mb-3" >
                        <label for="">Name</label>
                        <input value="{{$category->name}}" type="text" class="form-control" name="name">
                    </div>
                    <div class="col-mid-12">
                        <button type="submit" class="btn btn-success">Edit Category</button>
                    </div>


                </div>
            </form>
        </div>
    </div>
@endsection