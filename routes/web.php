<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Pages\index\HomeContollerRoutes;

use function Termwind\render;

// Rotas principais do usuário
Route::middleware('guest')->group(function () {
    Route::get('/', [HomeContollerRoutes::class, 'index'])->name('index.home');
    Route::get('/about', [HomeContollerRoutes::class, 'about'])->name('index.about');
    Route::get('/contact', [HomeContollerRoutes::class, 'contact'])->name('index.contact');
    Route::get('/project', [HomeContollerRoutes::class, 'project'])->name('index.project');
    Route::get('/education', [HomeContollerRoutes::class, 'education'])->name('index.education');
    Route::get('/experiences', [HomeContollerRoutes::class, 'experiences'])->name('index.experiences');
});
// end rotas


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/test', function(){
    return Inertia::render('Pages/testes/test');
});

require __DIR__.'/auth.php';
