<template>
  <div class="flex p-3 w-full fixed top-0 left-0 bg-slate-800 text-white z-50">
    <div>
      <span class="uppercase">
        Logo <br />
        Here</span>
    </div>
    <div class="flex grow justify-center">
<<<<<<< HEAD
      <div class="grid grid-cols-4 text-center items-center font-bold relative">
        <div
          :class="{
            'translate-x-0': $route.path === '/',
            'translate-x-[100%]': $route.path === '/competition',
            'translate-x-[200%]': $route.path === '/schedule',
            'translate-x-[300%]': $route.path === '/about',
          }"
          class="duration-300 w-28 text-slate-300 nav-line h-1 absolute -bottom-3 bg-gold-500 left-0"
        ></div>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/competition">Competition</RouterLink>
        <RouterLink class="nav-link" to="/schedule">Schedule</RouterLink>
        <RouterLink class="nav-link w-28" to="/about">About</RouterLink>
=======
      <div :class="{
        'translate-x-0': $route.path === '/',
        'translate-x-0': $route.path === '/',
        'translate-x-0': $route.path === '/',
        'translate-x-0': $route.path === '/',
      }" class="grid grid-cols-4 text-center items-center font-bold relative">
        <div class="w-30 nav-line h-1 absolute -bottom-3 bg-slate-300 left-0"></div>
        <RouterLink class="home" to="/">Home</RouterLink>
        <RouterLink class="comp" to="/competition">Competition</RouterLink>
        <RouterLink class="schedule" to="/schedule">Schedule</RouterLink>
        <RouterLink class="about w-30" to="/about">About</RouterLink>
>>>>>>> 4749d5c7635ce20c2098f1f7071a544723eb4f1e
      </div>
    </div>
  </div>
</template>

<style></style>
