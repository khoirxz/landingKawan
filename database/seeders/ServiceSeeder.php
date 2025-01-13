<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Service::factory()->create([
            'name' => 'Service 1',
            'description' => 'Service 1 Description',
            'content' => '["Service 1 Content", "Service 1 Content", "Service 1 Content"]',
            'icon' => 'https://via.placeholder.com/200x200?text=Service+1',
            'image' => 'https://via.placeholder.com/400x300?text=Service+1',
            'slug' => 'service-1',
        ]);
    }
}
