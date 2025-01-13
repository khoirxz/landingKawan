<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // main page
        return inertia('Admin/Services/index', [
            'services' => Service::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // view for creating a new service
        
        return inertia('Admin/Services/form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // store the new service
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'content' => 'required',
            'icon' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload for icon
        if ($request->hasFile('icon')) {
            $iconPath = $request->file('icon')->store('icons', 'public');
        }

        // Handle file upload for image
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        // Create the service with the uploaded file paths
        Service::create([
            'name' => $request->name,
            'description' => $request->description,
            'content' => $request->content,
            'icon' => $iconPath ?? null,
            'image' => $imagePath ?? null,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->route('services.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single service
        return inertia('Admin/Services/show', [
            'service' => Service::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a service
        return inertia('Admin/Services/form', [
            'service' => Service::findOrFail($id),
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update the service

        // logo and image not required to validate
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'content' => 'required',
        ]);

        // Handle file upload for icon
        $iconPath = $request->file('icon') ? $request->file('icon')->store('icons', 'public') : Service::findOrFail($id)->icon;

        // Handle file upload for image
        $imagePath = $request->file('image') ? $request->file('image')->store('images', 'public') : Service::findOrFail($id)->image;

        // Validate the input
        $request->validate([
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Update the service with the uploaded file paths
        Service::findOrFail($id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'content' => $request->content,
            'icon' => $iconPath,
            'image' => $imagePath,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->route('services.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete service
        Service::findOrFail($id)->delete();

        return redirect()->route('services.index');
    }
}
