<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function user() {
        if (auth()->user()->role !== 'admin') {
            return response()->json([
                'message' => 'forbidden'
            ], 403);
        }

        $data = User::all();
        return response()->json($data);
    }
}
