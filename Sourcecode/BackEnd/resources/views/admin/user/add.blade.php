@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h4>Add User</h4>
        </div>
        <div class="card-body">
            <form action="{{ url('insert-user') }}" method="POST">
                @csrf
                <div class="row">
                    <div class="col-md-6 mb-3" >
                        <label for="">Name</label>
                        <input id="add-name" type="text" class="form-control" name="name">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Email</label>
                        <input id="add-email" type="text" class="form-control" name="email">
                        <hr>
                    </div>
                    <div class="col-md-6 mb-3" >
                        <label for="">Password</label>
                        <input id="password" type="password" class="form-control" name="password">
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