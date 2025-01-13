<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Models\Service;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // main page
        return inertia('Admin/Product/index', [
            'products' => Product::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // view for creating a new product

        // get data services
        $services = Service::all();

        return inertia('Admin/Product/form', [
            'services' => $services
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new product

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'services_id' => 'required',
            'content' => 'required',
        ]);

        // Handle file upload for image
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        // Create the product with the uploaded file path
        Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $imagePath,
            'services_id' => $request->services_id,
            'content' => $request->content,
            'slug' => Str::slug($request->name, '-'),
        ]);

        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single product

        return inertia('Admin/Product/show', [
            'product' => Product::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a product

        return inertia('Admin/Product/form', [
            'product' => Product::findOrFail($id),
            'id' => $id,
            'services' => Service::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a product

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'services_id' => 'required',
            'content' => 'required',
        ]);

        // Handle file upload for image
        $imagePath = Product::findOrFail($id)->image;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Update the product with the uploaded file path
        Product::findOrFail($id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $imagePath,
            'content' => $request->content,
            'services_id' => $request->services_id,
            'slug' => Str::slug($request->name, '-'),
        ]);

        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a product

        Product::findOrFail($id)->delete();

        return redirect()->route('products.index');
    }
}
