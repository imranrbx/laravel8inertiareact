<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {
		$users = User::all();
		return Inertia::render('Users', [
			'users' => $users->map(function ($user) {
				return [
					'id' => $user->id,
					'name' => $user->name,
					'email' => $user->email,
					'edit_url' => $user->can('edit_delete') ? route('users.edit', $user->id) : false,
					'delete_url' => $user->can('edit_delete') ? route('users.destroy', $user->id) : false,
				];
			}),
			'create_url' => route('users.index'),
		])->withViewData(['title' => 'User Crud Operations']);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() {
		return Inertia::render('Create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		if ($request->hasFile('thumbnail')) {
			$thumbnail = $request->thumbnail->store('images', 'public');
		}
		// $this->validate($request, [
		// 	'name' => ['required'],
		// 	'email' => ['required', 'email', 'unique:users'],
		// 	'thumbnail' => ['image', 'mimes:png,jpg,jpeg'],
		// 	'password' => ['required', 'confirmed'],
		// 	'password_confirmation' => ['required'],
		// ]);
		// if ($request->hasFile('thumbnail')) {
		// 	$thumbnail = $request->thumbnail->store('images', 'public');
		// }
		// User::create([
		// 	'name' => $request->name,
		// 	'email' => $request->email,
		// 	'thumbnail' => $thumbnail ?? null,
		// 	'password' => bcrypt($request->password),
		// ]);
		return redirect()->route('users.index');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit(User $user) {
		if ($user->can('edit_delete')) {
			return Inertia::render('Edit', ['id' => $user->id, 'name' => $user->name, 'email' => $user->email]);
		}
		return redirect()->route('users.index');
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {

		$this->validate($request, [
			'id' => ['required'],
			'name' => ['required'],
			'email' => ['required', 'email', 'unique:users,email,' . $id . ',id'],
		]);
		User::find($id)->update($request->all());
		return redirect()->route('users.index');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(User $user) {
		if ($user->can('edit_delete')) {
			$user->delete();
		}

		return redirect()->route('users.index');
	}
}
