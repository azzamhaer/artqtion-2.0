<template>
  <div class="flex p-3 w-full fixed top-0 left-0 bg-slate-800 text-white">
    <div>
      <span class="uppercase">
        Logo <br />
        Here</span
      >
    </div>
    <div class="flex grow justify-center">
      <div class="grid grid-cols-4 text-center items-center font-bold relative">
        <div
          :class="{
            'translate-x-0': $route.path === '/',
            'translate-x-[100%]': $route.path === '/competition',
            'translate-x-[200%]': $route.path === '/schedule',
            'translate-x-[300%]': $route.path === '/about',
          }"
          class="duration-300 w-28 text-slate-300 nav-line h-1 absolute -bottom-3 bg-gold-400 left-0"
        ></div>
        <RouterLink class=" " to="/">Home</RouterLink>
        <RouterLink class=" " to="/competition">Competition</RouterLink>
        <RouterLink class=" " to="/schedule">Schedule</RouterLink>
        <RouterLink class="w-28" to="/about">About</RouterLink>
      </div>
    </div>
  </div>
</template>

<style></style>
