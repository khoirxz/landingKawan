<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Carousel extends Model
{
    // Table Carousel

    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image'
    ];
}
