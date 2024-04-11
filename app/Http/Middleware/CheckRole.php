<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        // Check if user is authenticated and has the required role
        if ($user && in_array($user->role, $roles)) {
            return $next($request);
        }

        // If user doesn't have the required role, redirect or abort as per your requirement
        return abort(403, 'Unauthorized.');
    }
}
