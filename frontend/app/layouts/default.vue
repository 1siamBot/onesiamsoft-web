<template>
  <div class="min-h-screen flex flex-col bg-[#0c1222] text-gray-400">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
