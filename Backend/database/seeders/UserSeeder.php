<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'FindPaw Admin',
            'email' => 'admin@findpaw.com',
            'role' => 'admin',
            'phone_number' => '62-857-1234-5678',
            'password' => 'admin123'
        ]);

        User::create([
            'name' => 'Rafka Dyta',
            'email' => 'rafka@findpaw.com',
            'role' => 'user',
            'phone_number' => '62-857-1234-5678',
            'password' => 'user123'
        ]);
    }
}
