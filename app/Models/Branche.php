<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Branche extends Model
{
    // Table Branches

    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'email',
    ];
}
