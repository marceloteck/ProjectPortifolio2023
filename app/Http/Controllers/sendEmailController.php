<?php

namespace App\Http\Controllers;


use App\Mail\Curriculo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Http\Response;

class sendEmailController extends Controller
{
    public function index(){
        return Inertia::render('Pages/testes/test');
    }
    public function Send(Request $request){
        Mail::to($request->emailInput)->send(new Curriculo([
            'fromEmail' => 'marcellosh.12@gmail.com',
            'subject' => 'Curriculo Marcelo henrique - Desenvolvedor Full Stack Junior',
            'message' => 'Segue em anexo o meu curriculo',
        ]));

        return response(['success' => true], Response::HTTP_OK);
        
    }
}