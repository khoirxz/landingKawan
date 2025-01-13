<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Product extends Model
{
    // Tabel Products

    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'services_id',
        'slug',
        'content'
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

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
