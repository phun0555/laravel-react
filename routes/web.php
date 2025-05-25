<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

Route::get('/fruit', function () {
    return Inertia::render('Fruit');
})->name('fruit');

Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::get('/', function () { // ถ้าไม่ใช้ Controller โดยตรง
    $data = [
        'name' => 'ผู้ใช้งาน',
        'items' => ['ปากกา', 'ดินสอ', 'ยางลบ'],
    ];
    return view('welcome', $data);
});


