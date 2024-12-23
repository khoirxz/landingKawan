<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bank extends Model
{
    // Table Banks
    use HasFactory;

    protected $table = 'banks';
    protected $fillable = [
        'name',
        'description',
        'address',
        'phone',
        'email',
        'logo',
        'license_number'
    ];
}
