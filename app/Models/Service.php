<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    // Table Services

    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'icon',
        'slug'
    ];
}
