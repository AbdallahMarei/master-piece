@extends('layouts.admin')

@section('content')
@if ($message = session('success'))
    <div class="alert alert-success">
        {{ $message }}
    </div>
@endif
    <div class="card">
        <div class="card-header">
            <h1>Users Page</h1>
            <a href="{{ url('add-user') }}" class="btn btn-success mt-3">Add User!</a>
            <hr>
        </div>
        <div class="card-body">
            <table class="table table-responsive table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                @foreach($user as $item)
                    <tr class="border">
                        <td>{{ $item->id }}</td>
                        <td>{{ $item->email }}</td>
                        <td >{{ $item->name }}</td>
                        <td>{{ $item->role_as == 1 ? 'Admin' : 'User'}}</td>
                        @if($item->role_as == 0)
                        <td>
                            <a href="{{ url('edit-user/'.$item->id) }}" class="btn btn-info">Edit</a>
                            <a href="{{ url('delete-user/'.$item->id) }}" class="btn btn-danger">Delete</a>
                        </td>
                        @endif
                    </tr>
                @endforeach
                </tbody>

            </table>
        </div>
    </div>
@endsection