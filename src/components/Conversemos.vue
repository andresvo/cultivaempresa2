<template>
  <section class="bg-verde text-white">
    <div class="max-w-screen-xl mx-auto py-20 px-8 xl:px-0 grid xl:grid-cols-12">
      <div class="xl:col-span-5 pb-8">
        <h2 class="text-2xl xl:text-3xl font-medium tracking-wide">
          Conversemos
        </h2>
        <hr class="w-16 border-t-2 border-white my-4" />
        <img src="/img/forestal/elementos/plandemanejo-16.png" alt="planta" width="80" />
      </div>
      <div class="xl:col-span-7">
        <p v-if="responseMessage">Gracias por contactarnos!. Te contactaremos a la brevedad</p>
        <form v-else @submit="submit">
          <div class="flex flex-col items-start max-w-sm tracking-wider">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" class="bg-transparent border-b border-white text-white w-full mb-6"
              required />
            <label for="email">Correo</label>
            <input type="email" name="email" class="bg-transparent border-b border-white text-white w-full mb-6"
              required />
            <label for="telefono">Teléfono</label>
            <input type="text" name="telefono" class="bg-transparent border-b border-white text-white w-full mb-6"
              required />

            <button type="submit" class="bg-white text-verde text-xs uppercase px-6 py-1">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const responseMessage = ref<string>();

async function submit(e: Event) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const response = await fetch("/api/contacto", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  responseMessage.value = data.message;
}
</script>