<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LoanSimulation extends Model
{
    // Tabel loan_simulations

    use HasFactory, SoftDeletes;

    protected $fillable = [
        'loan_amount',
        'interest_rate',
        'tenor',
        'monthly_payment',
    ];
}
