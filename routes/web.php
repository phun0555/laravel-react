<?php

use App\Models\Currency;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CurrencyController;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');



Route::get('/fruit', function () {
    return Inertia::render('Fruit');
});


Route::prefix('CurrencyManager')->group(function () {
    Route::get('/{any?}', function () {
        return view('app'); // blade ที่ load React app
    })->where('any', '.*');
});



Route::prefix('CurrencyManager')->group(function () {
    Route::get('/', function () {
        return view('app'); // หรือชื่อ blade ของคุณ
    });

    // API routes
Route::get('/currencies', [Currency::class, 'index']);
    // เพิ่ม routes ตามต้องการ
});
Route::get('/currencies', [CurrencyController::class, 'index']);