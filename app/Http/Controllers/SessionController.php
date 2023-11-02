<?php

namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function createNewSession(Request $request){
        $session = new Session();

        try{
            $session->gender =$request->input('gender');
            $session->age = $request->input('age');

            $session->save();
            return $session;
        }catch (\Exception $e){
            return $e;
        }
    }
}
