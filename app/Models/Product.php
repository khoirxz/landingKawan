<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    // Tabel Products

    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'service_id',
        'slug'
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
