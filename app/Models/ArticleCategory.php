<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ArticleCategory extends Model
{
    // Table article_categories

    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
    ];
}
