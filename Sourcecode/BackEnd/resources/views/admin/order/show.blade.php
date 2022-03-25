@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h1>Order Details Page</h1>
            <hr>
        </div>
        <div class="card-body table-responsive ">
            <table class="table table-bordered table-striped overflow-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order ID</th>
                        <th>Board Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody >
                    @foreach($order as $item)
                    <tr class="border">
                        <td>{{ $item->id }}</td>
                        <td >{{ $item->order_id }}</td>
                        <td >{{ $item->name }}</td>
                        <td >{{ $item->quantity }}</td>
                    </tr>
                @endforeach
                </tbody>

            </table>
        </div>
    </div>
@endsection