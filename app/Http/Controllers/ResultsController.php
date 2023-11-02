<?php

namespace App\Http\Controllers;

use App\Models\Results;
use Illuminate\Http\Request;
use DB;

class ResultsController extends Controller
{
    public function store(Request $request){
        $result = new Results();

        try{
            $result->session_id = $request->input('session_id');
            $result->theme_name = $request->input('theme_name');
            $number_nu = $request->input('number_nu');
            $number_straks = $request->input('number_straks');
            $number_later = $request->input('number_later');
            $result->number_nu = $number_nu;
            $result->number_straks = $number_straks;
            $result->number_later = $number_later;

            $result->save();
            return $result;
        }catch(Exception $e) {
            return $e;
        }
    }

    public function getSessionID(Request $request){
        try{
            $session_id = $request->input('session_id');
            $results = $this->getAllResults($session_id);
            return $results;
        }catch (\Exception $e){
            return $e;
        }
    }
    public function getAllResults($session_id){
        try{
            $results = DB::table('results')->where('session_id', '=', $session_id)->get()->toArray();
            return $results;
        } catch (\Exception $e){
            return $e;
        }
    }
}
