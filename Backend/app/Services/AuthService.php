<?php

namespace App\Services;

use App\Models\User;
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
        $role = $user->role;

        return response()->json([
            'status' => 'success',
            'token' => $token,
            'role' => $role
        ], 200);
    }

    public function signUp(array $data) {
        User::create($data);

        return response()->json([
            'status' => 'success',
        ], 200);
    }

    public function signOut() {
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success'
        ], 200);
    }
}