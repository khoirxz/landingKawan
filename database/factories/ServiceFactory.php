<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // Service
            'id' => $this->faker->uuid,
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
            'icon' => $this->faker->imageUrl(200, 200, 'service', true, 'Service'),
            'image' => $this->faker->imageUrl(400, 300, 'business', true, 'Service'),
            'slug' => $this->faker->slug,
        ];
    }
}
