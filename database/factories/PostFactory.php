<?php

namespace Database\Factories;
use App\Models\Post;
use App\Models\User;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */


    public function definition()
    {
        return [
            'user_id' => 20,
            'title' => $this->faker->sentence,
            'post_image' => $this->faker->imageUrl('900','300'),
            'body' => $this->faker->paragraph,

        ];
    }
}
