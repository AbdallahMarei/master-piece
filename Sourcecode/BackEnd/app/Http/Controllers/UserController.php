<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();
        return view('admin.user.index', compact('user'));
    }

    public function add()
    {
        return view('admin.user.add');
    }

    public function insert(Request $request)
    {

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->role_as = $request->input('role_as') == True ? '1' : '0';
        $user->save();

        return redirect('/users')->with('success', 'User Added Successfully!');
    }

    public function edit($id)
    {
        $user = User::find($id);
        return view('admin.user.edit', compact('user'));
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->role_as = $request->input('role_as') == True ? '1' : '0';
        $user->update();
        return redirect('/users')->with('success', 'User Updated!');
    }

    public function destroy($id){
        $user = User::find($id);
        $user->delete();
        return redirect('/users')->with('success', 'Deleted Successfully!');
    }
    public function register(Request $request){
        $reqEmail = $request["email"];
        $user = User::where("email","=","$reqEmail")->get();
        if(count($user) > 0){
            return response()->json([
                "message"=>"This account already exists"
            ]);
        }
        $newUser = new User();
        $newUser->name = $request['name'];
        $newUser->email = $request['email'];
        $newUser->password = $request['password'];
        $newUser->save();
        return response()->json([
            "message"=>"Account registered successfully",
            "user"=>$newUser
        ]);
    }
    public function login(Request $request){
        $reqEmail = $request["email"];
        $reqPass = $request["password"];
        $user = User::where([["email","=","$reqEmail"],["password","=","$reqPass"]])->first();
        if($user){
            return response()->json([
                "message"=>"Thank you for logging in",
                "user"=>$user
            ]);
        }
        return response()->json([
            "message"=>"This email doesn't exist"
        ]);
    }

    public function updatePass(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->password = $request['password'];
        $user->update();
        return response()->json([
            "message"=>"Password Updated",
            "pass"=>$request['password']
        ]);
    }

    public function updateName(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request['name'];
        $user->update();
        return response()->json([
            "message"=>"Name Updated",
        ]);
    }

}
