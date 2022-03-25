@extends('layouts.admin')

@section('content')
@if ($message = session('success'))
    <div class="alert alert-success">
        {{ $message }}
    </div>
@endif
    <div class="card">
        <div class="card-header">
            <h1>Reviews Page</h1>
            <hr>
        </div>
        <div class="card-body table-responsive ">
            <table class="table table-bordered table-striped overflow-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Board Name</th>
                        <th>Review</th>
                        <th>Date of Review</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    @foreach($review as $item)
                    <tr class="border">
                        <td>{{ $item->id }}</td>
                        <td >{{ $item->user_name }}</td>
                        <td >{{ $item->email }}</td>
                        <td >{{ $item->name }}</td>
                        <td >{{ $item->review }}</td>
                        <td>{{ date('d-m-Y', strtotime($item->created_at)) }}</td>
                        <td>
                            <a href="{{ url('delete-review/'.$item->id) }}" class="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                @endforeach
                </tbody>

            </table>
        </div>
    </div>
@endsection