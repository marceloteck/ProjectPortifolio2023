<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class sendEmail extends Controller
{
    public function index(){
        return Inertia::render('Pages/testes/test');
    }
    public function Send(){
        
    }
}
