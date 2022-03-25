@extends('layouts.admin')

@section('content')
@if ($message = session('success'))
    <div class="alert alert-success">
        {{ $message }}
    </div>
@endif
    <div class="card">
        <div class="card-header">
            <h1>Orders Page</h1>
            <hr>
        </div>
        <div class="card-body table-responsive ">
            <table class="table table-bordered table-striped overflow-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Phone</th>
                        <th>City</th>
                        <th>Card Name</th>
                        <th>Card Number</th>
                        <th>CVV</th>
                        <th>Expire Date</th>
                        <th>Total Price</th>
                        <th>Date of Purchase</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    @foreach($order as $item)
                    <tr class="border">
                        <td>{{ $item->id }}</td>
                        <td >{{ $item->name }}</td>
                        <td >{{ $item->email }}</td>
                        <td >{{ $item->phone }}</td>
                        <td >{{ $item->city }}</td>
                        <td >{{ $item->cardName }}</td>
                        <td >{{ $item->cardNumber }}</td>
                        <td >{{ $item->cvv }}</td>
                        <td >{{ $item->expYear }}</td>
                        <td>${{ $item->total }}</td>
                        <td>{{ date('d-m-Y', strtotime($item->created_at)) }}</td>
                        <td>{{ $item->status }}</td>
                        <td>
                            <a href="{{ url('show-order/'.$item->id) }}" class="btn btn-info">Order Details</a>
                        @if($item->status === 'pending')
                            <a href="{{ url('accept-order/'.$item->id) }}" class="btn btn-primary">Change Status</a>
                            <a href="{{ url('delete-order/'.$item->id) }}" class="btn btn-danger">Delete</a>
                        @endif
                        </td>
                    </tr>
                @endforeach
                </tbody>

            </table>
        </div>
    </div>
@endsection