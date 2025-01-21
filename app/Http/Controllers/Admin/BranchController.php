<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Branche;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // main page
        return inertia('Admin/Branch/index', [
            'branches' => Branche::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // create page

        return inertia('Admin/Branch/form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new branch

        $request->validate([
            'name' => 'required',
            'address' => 'required',
        ]);

        Branche::create([
            'name' => $request->name,
            'address' => $request->address,
        ]);

        return redirect()->route('branches.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a sigle branch
        return inertia('Admin/Branch/show', [
            'branch' => Branche::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a branch

        return inertia('Admin/Branch/form', [
            'branch' => Branche::findOrFail($id),
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a branch

        $request->validate([
            'name' => 'required',
            'address' => 'required',
        ]);

        Branche::findOrFail($id)->update([
            'name' => $request->name,
            'address' => $request->address,
        ]);

        return redirect()->route('branches.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a branch
        Branche::findOrFail($id)->delete();

        return redirect()->route('branches.index');
    }
}
