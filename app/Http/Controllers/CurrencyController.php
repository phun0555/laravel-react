<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function index() {
        return response()->json(['message' => 'OK']);
    }
}