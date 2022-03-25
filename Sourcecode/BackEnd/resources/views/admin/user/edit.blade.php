@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h4>Edit User</h4>
        </div>
        <div class="card-body">
            <form action="{{ url('update-user/'.$user->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row">
                <div class="col-md-6 mb-3" >
                        <label for="">Name</label>
                        <input value="{{ $user->name }}" id="add-name" type="text" class="form-control" name="name">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Email</label>
                        <input value="{{ $user->email }}" id="add-email" type="text" class="form-control" name="email">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Password</label>
                        <input id="text" type="password" class="form-control" name="password">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Repeat Password</label>
                        <input id="add-rpassword" type="password" class="form-control" name="rpassword">
                        <hr>
                    </div>
                    <div class="col-md-12 mb-3" >
                        <label for="">Admin</label>
                        <input  type="checkbox" name="role_as">
                    </div>
                    <div class="col-mid-12">
                        <button type="submit" class="btn btn-success">Add User</button>
                    </div>


                </div>
            </form>
        </div>
    </div>
@endsection