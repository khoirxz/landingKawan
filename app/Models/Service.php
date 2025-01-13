<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    // Table Services

    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'description',
        'content',
        'image',
        'icon',
        'slug'
    ];

    protected $casts = [
        'id' => 'string',
        'content' => 'array'
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
