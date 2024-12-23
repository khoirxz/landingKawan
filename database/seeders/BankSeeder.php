<?php

namespace Database\Seeders;

use App\Models\Bank;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Bank::factory()->create([
        //     'id' => 'd0f7472a-c0eb-11ef-b015-0a0027000004',
        //     'name' => 'Bank BPR',
        //     'description' => 'Bank BPR',
        //     'address' => 'Jl. Raya Cileungsi No. 1, Cileungsi, Bogor, Jawa Barat',
        //     'phone' => '021-12345678',
        //     'email' => 'bank@mail.com',
        //     'logo' => 'https://via.placeholder.com/200',
        //     'license_number' => '1234567890',
        // ]);

        Bank::factory()->count(1)->create();
    }
}
