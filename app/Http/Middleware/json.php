<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class json
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the request expects JSON
        if (!$request->expectsJson()) {
            // If not, return the response as is
            return $next($request);
        }

        // Execute the request and get the response
        $response = $next($request);

        // Check if the response is an exception
        if ($response->exception) {
            // If so, return the exception message as JSON with the appropriate status code
            return response()->json([
                'error' => [
                    'message' => $response->exception->getMessage(),
                    'code' => $response->getStatusCode()
                ]
            ], $response->getStatusCode());
        }

        // Check if the response is not an array or object
        if (!is_array($response->original) && !is_object($response->original)) {
            // If so, wrap the response in a 'data' key and return as JSON
            return response()->json(['data' => $response->original]);
        }

        // If the response is already in JSON format, return it as is
        return $response;
    }
}