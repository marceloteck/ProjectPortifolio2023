<?php

namespace App\Http\Controllers;


use App\Mail\Curriculo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Http\Response;

class sendEmailController extends Controller
{

    public $pageIndex;

    public function __construct()
    {
        $this->pageIndex = 'Pages/index/index';
    }
    public function Send(Request $request)
    {
        try {

            $emailRegex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";

            if (preg_match($emailRegex, $request->emailUser)) {
                Mail::to($request->emailUser)->send(new Curriculo([
                    'fromEmail' => 'marcellosh.12@gmail.com',
                    'subject' => 'Curriculo Marcelo henrique - Desenvolvedor Full Stack',
                    // 'message' => 'Segue em anexo o meu curriculo',
                ]));

                return Inertia::render($this->pageIndex, [
                    'resposta' => 'Email enviado com sucesso!',
                    'status' => 'success'
                ]);

            } else {
                return Inertia::render($this->pageIndex, [
                    'resposta' => 'Email não é válido!',
                    'status' => 'error'
                ]);
            }
            ;

        } catch (\Throwable $th) {
            return Inertia::render($this->pageIndex, [
                'resposta' => 'Email não enviado, tente novamente!',
                'status' => 'error'
            ]);
        }
    }
    public function view()
    {
        return view('mails/CurriculoEmail');
    }
}