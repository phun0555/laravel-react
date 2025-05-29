<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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




Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

