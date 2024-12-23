<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Faq extends Model
{
    // Table faqs

    use HasFactory;

    protected $fillable = [
        'question',
        'answer',
    ];
}
