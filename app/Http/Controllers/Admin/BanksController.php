<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bank;

class BanksController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     // constant variable
    const MAIN_URL = 'Admin/Setting/Banks/index';

    public function index()
    {
        // main page
        // metainfo for this website, its should be the same for all pages and only have one data
        
        $data = Bank::first();

        return inertia(self::MAIN_URL, [
            'bank' => $data,
            'id' => $data->id
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // view for creating a new bank

        return inertia(self::MAIN_URL);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store a new bank

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'logo' => 'required',
            'license_number' => 'required',
        ]);

        // check if there is already a bank
        // this 'bank' model its like metainfo
        // so if there is already a bank, it will redirect to the index page
        if (Bank::exits()) {
            return redirect()->route('banks.index');
        }

        Bank::create([
            'name' => $request->name,
            'description' => $request->description,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'logo' => $request->logo,
            'license_number' => $request->license_number,
        ]);

        return redirect()->route('banks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single bank

        return inertia(self::MAIN_URL, [
            'bank' => Bank::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // view for editing a bank

        return inertia(self::MAIN_URL, [
            'bank' => Bank::findOrFail($id),
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a bank

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'license_number' => 'required',
        ]);

        // handle file upload for logo
        $logoPath = Bank::findOrFail($id)->logo; // get the old logo
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');
        }

        $request->validate([
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,ico|max:2048',
        ]);

        Bank::findOrFail($id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'logo' => $logoPath,
            'license_number' => $request->license_number,
        ]);

        return redirect()->route('banks.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a bank

        Bank::findOrFail($id)->delete();

        return redirect()->route('banks.index');
    }
}
