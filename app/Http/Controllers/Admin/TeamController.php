<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Team;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // main page
        return inertia('Admin/Team/index', [
            'teams' => Team::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // view for creating a new team
        return inertia('Admin/Team/form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new team

        $request->validate([
            'name' => 'required',
            'position' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload for image
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        // Create the team with the uploaded file path
        Team::create([
            'name' => $request->name,
            'position' => $request->position,
            'image' => $imagePath,
        ]);

        return redirect()->route('teams.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a team
        return inertia('Admin/Team/show', [
            'team' => Team::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a team
        return inertia('Admin/Team/form', [
            'team' => Team::findOrFail($id),
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a team

        $request->validate([
            'name' => 'required',
            'position' => 'required',
        ]);
        
        // handle file upload for image
        $imagePath = Team::findOrFail($id)->image;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        // Update the team with the uploaded file path
        Team::findOrFail($id)->update([
            'name' => $request->name,
            'position' => $request->position,
            'image' => $imagePath,
        ]);

        return redirect()->route('teams.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a team

        Team::findOrFail($id)->delete();

        return redirect()->route('teams.index');
    }
}
