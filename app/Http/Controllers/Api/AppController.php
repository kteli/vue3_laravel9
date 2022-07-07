<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function index()
    {
        return view('app');
    }
}
