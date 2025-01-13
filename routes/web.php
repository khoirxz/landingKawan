<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\LandingController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\Admin\ArticleCategoryController;
use App\Http\Controllers\Admin\BanksController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\CarouselController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\ArticleController;

// Route::get('/', function () {
//     return Inertia::render('Landing', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [LandingController::class, 'index'])->name('landing');
Route::get('/service/{slug}', [LandingController::class, 'service'])->name('service.page');
Route::get('/product/{slug}', [LandingController::class, 'product'])->name('product.page');
Route::get('/simulation', [LandingController::class, 'simulation'])->name('simulation.page');
Route::get('/article', [LandingController::class, 'article'])->name('article.page');
Route::get('/article/{slug}', [LandingController::class, 'articleShow'])->name('article.show');
Route::get('/career', [LandingController::class, 'career'])->name('career.page');
Route::get('/contact', [LandingController::class, 'contact'])->name('contact.page');
Route::get('/about', [LandingController::class, 'about'])->name('about.page');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    $profileRoute = '/profile';
    Route::get($profileRoute, [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch($profileRoute, [ProfileController::class, 'update'])->name('profile.update');
    Route::delete($profileRoute, [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('services', ServiceController::class);
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('article-categories', ArticleCategoryController::class);
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('products', ProductController::class);
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('carousels', CarouselController::class);
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('teams', TeamController::class);
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('articles', ArticleController::class);
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('admin/settings')->group(function () {
        Route::resource('banks', BanksController::class);
    });
});

require __DIR__.'/auth.php';
