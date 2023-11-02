<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advice;

class AdviceController extends Controller
{
    public function getAdvices()
    {
        $advices = Advice::all();
        return $advices;
    }
}
