<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService {
    public function signIn(array $credentials) {
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

    public function signOut() {
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success'
        ]);
    }
}