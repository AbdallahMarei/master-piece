<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $table = 'reviews';
    protected $fillable = [
        'user_name',
        'board_id',
        'review',
    ];

    public function board()
    {
        return $this->belongsTo(Board::class, 'board_id', 'id');
    }
}
