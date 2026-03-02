<template>
  <div class="relative min-h-screen flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0 overflow-hidden">
      <img 
        src="https://i.pinimg.com/1200x/31/e6/34/31e634974a91dbb65573ee705795bf1d.jpg" 
        alt="hero" 
        class="w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-10 py-20 text-white max-w-lg">
      <p class="text-rose-300 uppercase tracking-widest text-sm mb-3">New Collection</p>
      <h1 class="text-6xl font-bold mb-4 leading-tight">Feel<br/>Beautiful ✨</h1>
      <p class="text-white/80 text-lg mb-8">Premium makeup for every look, every mood, every you.</p>
      <RouterLink to="/products"
        class="bg-rose-500 text-white px-8 py-3 rounded-full text-lg hover:bg-rose-600 inline-block">
        Shop Now →
      </RouterLink>
    </div>
  </div>
</template>