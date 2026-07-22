<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService {
    public function signin(array $credentials) {

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Incorrect Email or Password'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'token' => $token
        ], 200);
    }
}