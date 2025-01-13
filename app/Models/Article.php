<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Article extends Model
{
    // Table Articles

    use HasFactory;
    // use SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'content',
        'image',
        'slug',
        'category_id',
    ];

    protected $casts = [
        'id' => 'string',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string) Str::uuid();
        });
    }

    public function category()
    {
        return $this->belongsTo(ArticleCategory::class);
    }
}
