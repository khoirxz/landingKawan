<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carousel;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // main page
        return inertia('Admin/Carousel/index', [
            'carousels' => Carousel::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // create page

        return inertia('Admin/Carousel/form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new carousel

        $request->validate([
            'title' => 'required',
            'link' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload for image
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        // Create the product with the uploaded file path
        Carousel::create([
            'title' => $request->title,
            'link' => $request->link,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return redirect()->route('carousels.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single product

        return inertia('Admin/Carousel/show', [
            'carousel' => Carousel::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a product

        return inertia('Admin/Carousel/form', [
            'carousel' => Carousel::findOrFail($id),
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a product

        $request->validate([
            'title' => 'required',
            'link' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload for image
        $imagePath = $request->file('image') ? $request->file('image')->store('images', 'public') : Carousel::findOrFail($id)->image;

        // Validate the input
        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Update the product with the uploaded file path
        Carousel::findOrFail($id)->update([
            'title' => $request->title,
            'link' => $request->link,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return redirect()->route('carousels.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a product

        Carousel::findOrFail($id)->delete();

        return redirect()->route('carousels.index');
    }
}
