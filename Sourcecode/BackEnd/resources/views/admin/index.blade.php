@extends('layouts.admin')

@section('content')
<div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="overview-wrap">
                                    <h2 class="title-1">overview</h2>

                                </div>
                            </div>
                        </div>
                        <div class="row m-t-25">
                            <div class="col-sm-6 col-lg-3">
                                <a href="{{ url('users') }}">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>

                                            <div class="text mr-2">

                                            <h2> {{$user->count()}}</h2>
                                            <span>Users</span>

                                            </div>


                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <a href="{{ url('categories') }}">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>

                                            <div class="text mr-2">

                                                <h2> {{$category->count()}}</h2>

                                                <span>Categories</span>
                                            </div>


                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                            <a href="{{ url('boards') }}">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>

                                            <div class="text mr-2">

                                                <h2> {{$board->count()}}</h2>

                                                <span>Board Games</span>
                                            </div>


                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                            <a href="{{ url('orders') }}">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>

                                            <div class="text mr-2">

                                                <h2> {{$order->count()}}</h2>

                                                <span>Orders</span>
                                            </div>


                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                            <a href="{{ url('reviews') }}">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>

                                            <div class="text mr-2">

                                                <h2> {{$review->count()}}</h2>

                                                <span>Reviews</span>
                                            </div>


                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                            <a href="{{ url('contacts') }}">
                                <div class="overview-item overview-item--c1">
                                    <div class="overview__inner">
                                        <div class="overview-box clearfix">
                                            <div class="icon">
                                                <i class="zmdi zmdi-account-o"></i>
                                            </div>

                                            <div class="text mr-2">

                                                <h2> {{$contact->count()}}</h2>

                                                <span>Contacts</span>
                                            </div>


                                        </div>
                                        <div class="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </div>
                           
                           



            <div class="row">
                    <div class="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                </div>
                            </div>
@endsection