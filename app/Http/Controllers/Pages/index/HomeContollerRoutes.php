<?php

namespace App\Http\Controllers\Pages\index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeContollerRoutes extends Controller
{
    public function index(){
        return Inertia::render('Pages/index/index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function about(){
        return Inertia::render('Pages/about/about');
    }
    public function contact(){
        return Inertia::render('Pages/contact/contact');
    }
    public function project(){
        return Inertia::render('Pages/project/project');
    }
    public function education(){
        return Inertia::render('Pages/education/education');
    }
    public function experiences(){
        return Inertia::render('Pages/experiences/experiences');
    }











}
