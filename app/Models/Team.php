<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Team extends Model
{
    // Table Teams

    use HasFactory;

    protected $fillable = [
        'name',
        'position',
        'image'
    ];
}
