<?php

namespace App\Http\Controllers\Admin;

use App\Models\ArticleCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticleCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // main page
        return inertia('Admin/ArticleCategory/index', [
            'categories' => ArticleCategory::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // view for creating a new category article
        
        return inertia('Admin/ArticleCategory/form');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new category article

        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        ArticleCategory::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->route('article-categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single category article
        return inertia('Admin/ArticleCategory/show', [
            'category' => ArticleCategory::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a category article

        return inertia('Admin/ArticleCategory/form', [
            'category' => ArticleCategory::findOrFail($id),
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a category article

        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        ArticleCategory::findOrFail($id)->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->route('article-categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a category article
        ArticleCategory::findOrFail($id)->delete();

        return redirect()->route('article-categories.index');
    }
}
