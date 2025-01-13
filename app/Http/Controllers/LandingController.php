<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Models\Carousel;
use App\Models\Service;
use App\Models\Team;
use App\Models\Article;
use App\Models\Bank;
use App\Models\Product;

class LandingController extends Controller
{
    //
    private $bank;
    private $menus;

    public function __construct()
    {
        $this->bank = Cache::remember('banks_first', 60 * 60, function () {
            return Bank::first();
        });
        $this->menus = Cache::remember('menus_services', 60 * 60, function () {
            return Service::all();
        });
    }

    public function index()
    {
        return inertia('Landing', [
            'banks' => $this->bank,
            'services' => $this->menus,
            'carousels' => Carousel::all(),
            'teams' => Team::all(),
            'articles' => Article::latest()->limit(4)->get(), // <- get 4 latest article
        ]);
    }

    // Service page have a slug
    public function service(string $slug)
    {
        $service = Service::where('slug', $slug)->first();

        return inertia('Service/index', [
            'banks' => $this->bank,
            'services' => $this->menus,
            'metainfo' => $service,
            'products' => Product::where('services_id', $service->id)->get()
        ]);
    }

    public function article()
    {

        return inertia('Article/index', [
            'banks' => $this->bank,
            'services' => $this->menus,
            'articles' => Article::all(),
        ]);
    }

    public function articleShow(string $slug)
    {

        $article = Article::where('slug', $slug)->first();

        return inertia('Article/show', [
            'banks' => $this->bank,
            'services' => $this->menus,
            'article' => $article
        ]);
    }

    public function product(string $slug)
    {
        $product = Product::where('slug', $slug)->first();

        return inertia('Product/index', [
            'banks' => $this->bank,
            'services' => $this->menus,
            'data' => $product,
        ]);
    }

    public function simulation()
    {
        return inertia('Simulation/index', [
            'banks' => $this->bank,
            'services' => $this->menus,
        ]);
    }

    public function career()
    {
        return inertia('Career/index', [
            'banks' => $this->bank,
            'services' => $this->menus,
        ]);
    }

    public function about()
    {
        return inertia('About/index', [
            'banks' => $this->bank,
            'services' => $this->menus,
        ]);
    }
}
