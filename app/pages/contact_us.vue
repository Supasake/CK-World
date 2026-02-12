<template>
  <div id="contact_us" class="mt-12">
    <div class="hero min-h-[70vh] relative">
      <!-- รูปพื้นหลัง -->
      <NuxtImg
        src="/img/Contact_Us.jpg"
        alt="Contact Us Background"
        quality="80"
        format="webp"
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div class="hero-overlay bg-opacity-60 bg-slate-900" />

      <!-- เนื้อหา - ตรงกลางบน Mobile, ซ้ายบน Desktop -->
      <div class="hero-content text-base-content w-full">
        <div class="max-w-md text-center md:text-left mx-auto md:mx-0 md:mr-52 leading-relaxed">
          <h1 class="mb-5 text-5xl font-bold leading-13">เชื่อมต่อธุรกิจไทย<br />ไปไกลทั่วโลก</h1>
          <p class="mb-5 mt-12">
            บริการ Logistics & Freight Forwarding ครบวงจร รวดเร็ว ปลอดภัย ตรวจสอบสถานะได้ 24 ชม.
          </p>
        </div>
      </div>
    </div>
    <ContactUs />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
