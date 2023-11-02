<?php

namespace App\Http\Controllers;

use App\Models\Results;
use Illuminate\Http\Request;
Use App\Models\Theme;

class ThemeController extends Controller
{
    public function getThemes() {
        /* Return all possible color choices for hardware */
        $themes = Theme::all();
        return $themes;
    }
}
