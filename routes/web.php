<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');


Route::get('/live-betting', function () {
    return Inertia::render('live-betting');
})->name('live-betting');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

Route::get('/ai-picks', function () {
    return Inertia::render('ai-picks');
});

Route::fallback(function () {
    return Inertia::render('errors/not-found');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
