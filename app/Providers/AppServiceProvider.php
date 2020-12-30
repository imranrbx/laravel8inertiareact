<?php

namespace App\Providers;

use Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider {
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register() {
		//
	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot() {
		Inertia::share(['base_url' => env('APP_URL')]);
		Inertia::share('user', function () {
			if (Auth::user()) {
				return [
					'isLoggedIn' => true,
					'name' => Auth::user()->name,
				];
			} else {
				return [
					'isLoggedIn' => false,
				];
			}
		});

	}
}
