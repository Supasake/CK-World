<template>
  <!-- MAIN TITLE - Above everything, full width, decorative -->
  <div class="bg-primary py-12 px-6 text-center">
    <h1
      class="text-5xl md:text-6xl font-extrabold text-primary-content tracking-wide"
    >
      {{ $t("checking_price_title") }}
    </h1>
    <div class="mt-6 flex justify-center items-center gap-8">
      <div class="w-24 h-1 bg-primary-content/50 rounded" />
      <div class="text-2xl text-primary-content/80">✈</div>
      <div class="w-24 h-1 bg-primary-content/50 rounded" />
    </div>
    <p class="mt-6 text-xl text-primary-content/90">
      {{ $t("checking_price_quote") }}
    </p>
  </div>

  <!-- Main Content Grid -->
  <div class="grid lg:grid-cols-2 min-h-screen bg-base-200">
    <!-- CHECK PRICE FORM - Vertically & Horizontally Centered -->
    <div class="flex items-center justify-center py-12 px-4">
      <div class="w-full max-w-2xl">
        <div class="card bg-base-100 shadow-2xl">
          <div class="card-body">
            <!-- Section Title & Subtitle - Centered inside card -->
            <div class="text-center mb-10">
              <h2
                id="check_price"
                class="text-4xl font-bold text-primary scroll-mt-55"
              >
                Check Shipping Price
              </h2>
              <p class="text-lg text-base-content/70 mt-4">
                Enter your shipment details to get an instant price estimate
              </p>
            </div>

            <form
              ref="checkPriceForm"
              class="space-y-8"
              @submit.prevent="handleSubmit"
            >
              <!-- Destination -->
              <div class="form-control m-0">
                <fieldset class="fieldset">
                  <legend class="fieldset-legend">Destination Country</legend>
                  <select
                    v-model="formData.destination"
                    class="select validator"
                    required
                  >
                    <option disabled value="">Select a country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>Other</option>
                  </select>
                </fieldset>
              </div>

              <!-- Gross Weight -->
              <fieldset class="fieldset my-3">
                <legend class="fieldset-legend">Gross Weight</legend>
                <input
                  v-model.number="formData.grossWeight"
                  type="number"
                  min="0.1"
                  step="0.1"
                  class="input text-center font-bold"
                  placeholder="Gross Weight in kg"
                  required
                />
                <div class="validator-hint hidden text-sm m-0">
                  something mistake.
                </div>
                <p class="label">kg</p>
              </fieldset>

              <!-- Dimensions -->
              <div>
                <legend class="fieldset-legend mb-0.5">
                  Dimensions (W × H × L)
                </legend>
                <div class="grid grid-cols-3 gap-4">
                  <div class="form-control">
                    <input
                      v-model.number="formData.width"
                      type="number"
                      min="0.1"
                      step="0.1"
                      placeholder="Width (cm.)"
                      class="input text-center font-bold"
                      required
                    />
                    <p class="label">Width (cm.)</p>
                  </div>
                  <div class="form-control">
                    <input
                      v-model.number="formData.height"
                      type="number"
                      min="0.1"
                      step="0.1"
                      placeholder="Height (cm.)"
                      class="input text-center font-bold"
                      required
                    />
                    <p class="label">Height (cm.)</p>
                  </div>
                  <div class="form-control">
                    <input
                      v-model.number="formData.length"
                      type="number"
                      min="0.1"
                      step="0.1"
                      placeholder="Length (cm.)"
                      class="input text-center font-bold"
                      required
                    />
                    <p class="label">Length (cm.)</p>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="card-actions justify-center mt-10">
                <button
                  type="submit"
                  class="btn btn-secondary btn-wide text-lg"
                >
                  Check Price
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- CONDITION DATA SECTION - Vertically Centered -->
    <div class="flex items-center justify-center bg-base-300 py-12 px-8">
      <div class="max-w-lg">
        <h2 class="text-3xl font-bold text-primary mb-6 text-center">
          Shipping Conditions & Notes
        </h2>
        <ol
          class="space-y-5 text-md text-base-content/80 list-decimal list-outside pl-4"
        >
          <li>
            บริการรับสินค้าถึงหน้าบ้านฟรีทั่วไทย ยกเว้น พื้นที่สีแดง
            และพื้นที่ห่างไกล สอบถามรายละเอียดเพิ่มเติมที่ 02-345-6789
            และทางออนไลน์ทุกช่องทาง Free nationwide pickup service excluding
            remote islands, less-accessible location, and red-zone areas. Please
            contact our customer care center for more information at 02-345-6789
            or our online channels.
          </li>
          <li>
            ราคาค่าขนส่งข้างต้นนี้ รวมค่าธรรมเนียมพิเศษต่างๆของประเทศต้นทางแล้ว
            เช่น ค่าธรรมเนียมน้ำมันเชื้อเพลิง ค่าธรรมเนียมสถานการณ์โรคระบาด
            และภาษีมูลค่าเพิ่ม Our rates are inclusive of Fuel Surcharge,
            Emergency Situation Surcharge, and Value Added Tax.
          </li>
          <li>
            การคำนวณค่าบริการ จะยึดตามหลักเกณฑ์ดังต่อไปนี้ <br />
            Rates Calculation:
            <ul class="list-disc pl-5 space-y-5 text-xs">
              <li>
                คิดจากการชั่งน้ำหนักจริงของบรรจุภัณฑ์หน่วยเป็นกิโลกรัมเปรียบเทียบกับการคำนวณน้ำหนักปริมาตรของบรรจุภัณฑ์
                (กว้าง(ซม) คูณ ยาว(ซม) คูณ สูง(ซม) หาร 5000
                ผลลัพธ์ที่ได้มีหน่วยเป็นกิโลกรัม)
                โดยเลือกน้ำหนักอันใดอันหนึ่งที่มากกว่า
              </li>
              <li>
                ช่วงน้ำหนักไม่เกิน30 กิโลกรัมแรก คิดค่าบริการเริ่มต้นที่ 500
                กรัม (0.50กิโลกรัม) และบวกเพิ่มทุกๆ 500 กรัม
                และช่วงน้ำหนักที่มากกว่า 30 กิโลกรัมขึ้นไป บวกค่าบริการเพิ่มทุกๆ
                1 กิโลกรัม ยกตัวอย่างเช่น น้ำหนักรวม เท่ากับ 1.80 กิโลกรัม
                คิดค่าบริการที่ 2.00 กิโลกรัม, น้ำหนักรวม เท่ากับ 34.50 กิโลกรัม
                คิดค่าบริการที่ 35.00 กิโลกรัม เป็นต้น (ยกเว้นบริการ
                ยูเอสเอไดเรคไลน์ คำนวณค่าบริการเริ่มต้น 50 กรัม และบวกเพิ่มทุกๆ
                50 กรัม)
              </li>
              <li>
                The chargeable shipping weight will be based on the actual
                weight of the shipment or its dimensional weight (Multiplying
                width in cm by length in cm by height in cm of the package
                divided by 5000) whichever is greater.
              </li>
              <li>
                Total shipment weight below 30 Kilograms, the minimum rate
                starts from 500 grams and additional 500 grams thereafter.Above
                30 kilograms, the rate will be calculated every 1 Kilogram.
                (Except “US Direct Line” service, the minimum rate starts from
                50 grams and additional 50 grams thereafter.)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = reactive({
  destination: "",
  grossWeight: null as number | null,
  width: null as number | null,
  height: null as number | null,
  length: null as number | null,
});

const handleSubmit = () => {
  window.alert("Success");
  // Add your submission logic here
};
</script>
