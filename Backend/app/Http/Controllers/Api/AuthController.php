<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService
    ) {}

    public function signin(Request $request) {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $data = $this->authService->SignIn($credentials);

        return $data;
    } 

    public function signup(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
            'password' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'password' => $request->password,
            'role' => 'user'
        ];

        $result = $this->authService->signUp($data);

        return $result;
    }

    public function signout() {
        return $this->authService->signOut();
    }
}
