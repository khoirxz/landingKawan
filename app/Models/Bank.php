<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

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

    protected $casts = [
        'id' => 'string'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
}
