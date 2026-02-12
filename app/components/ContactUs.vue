<template>
  <div>
    <section class="py-8 px-4 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center my-12">
        <h1 class="text-5xl font-bold text-primary mb-6">Contact Us</h1>
        <div class="relative border-b-2 border-accent w-84 mx-auto" />
        <p
          class="text-lg bg-base-100 text-accent absolute transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto"
        >
          Get in Touch
        </p>
        <p class="mt-6 text-secondary-content max-w-2xl mx-auto">
          Our team is ready to assist you with innovative solutions and strategic partnerships
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: Contact Information -->
        <div class="space-y-8">
          <h2 class="text-2xl font-semibold text-primary underline">Contact Information</h2>

          <div class="grid xl:grid-cols-[3fr_2fr] gap-5">
            <!-- ALL Contact Information -->
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-center gap-4">
                <Icon name="line-md:map-marker-alt-filled-loop" size="20" />
                <div>
                  <p class="font-bold">Headquarters Office</p>
                  <p class="text-primary mix-blend-difference">
                    45/21 Gp 4 Tuendprakieat<br />
                    Wat Chalor Bang Kruai<br />
                    Nonthaburi, 10700 THAILAND
                  </p>
                </div>
              </div>
              <!-- Phone -->
              <div class="flex items-center gap-4">
                <Icon name="line-md:phone-call-twotone-loop" size="20" />
                <div>
                  <p class="font-bold">Phone</p>
                  <p class="text-primary mix-blend-difference">
                    +66 123-4567<br />
                    24/7 Marketing
                  </p>
                </div>
              </div>
              <!-- Email -->
              <div class="flex items-center gap-4">
                <Icon name="line-md:cloud-alt-print-twotone-loop" size="20" />
                <div>
                  <p class="font-bold">Email</p>
                  <p class="text-primary mix-blend-difference">
                    contact@company.com<br />
                    support@company.com
                  </p>
                </div>
              </div>
              <!-- Office Hours -->
              <div class="flex items-center gap-4">
                <Icon name="line-md:coffee-half-empty-twotone-loop" size="20" />
                <div>
                  <p class="font-bold">Office Hours</p>
                  <p class="text-primary mix-blend-difference">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: By Appointment
                  </p>
                </div>
              </div>
              <!-- LINE OA -->
              <a
                href="https://lin.ee/XUwyD9Zx"
                target="_blank"
                class="btn inline-flex items-center justify-center gap-2 bg-[#03C755] text-white border border-[#00b544] rounded-md px-4 py-2 hover:bg-[#00b544] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03C755] transition"
              >
                <svg
                  aria-label="Line logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fill-rule="evenodd" stroke-linejoin="round" fill="white">
                    <path
                      fill-rule="nonzero"
                      d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"
                    />
                  </g>
                </svg>
                LINE - รับเราเป็นเพื่อน
              </a>
            </div>
            <!-- MAP -->
            <div>
              <iframe
                width="100%"
                height="400"
                style="border: 0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.301415356737!2d100.6416825!3d13.7606881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d616353d94059%3A0xe0f6cfb34ef98509!2sFAMorieZ%20Station!5e0!3m2!1sen!2sth!4v1765764071617!5m2!1sen!2sth"
              />
            </div>
          </div>
        </div>

        <!-- Right: Send a Message Form -->
        <div class="bg-neutral-content rounded-3xl p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-primary-content mb-6">Send a Message</h2>

          <form
            ref="ContactUsForm"
            class="space-y-6 text-accent-content"
            @submit.prevent="Send_Message"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <fieldset class="fieldset">
                <label class="label text-gray-700 font-medium">First Name</label>
                <input
                  v-model="contactUs.first_name"
                  type="text"
                  class="input validator text-primary text-center"
                  required
                />
                <p class="validator-hint hidden text-sm m-0 bg-warning-content text-center">
                  Required
                </p>
              </fieldset>
              <fieldset class="fieldset">
                <label class="label text-gray-700 font-medium">Last Name</label>
                <input
                  v-model="contactUs.last_name"
                  type="text"
                  class="input validator text-primary text-center"
                  required
                />
                <p class="validator-hint hidden text-sm m-0 bg-warning-content text-center">
                  Required
                </p>
              </fieldset>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <fieldset class="fieldset">
                <label class="label text-gray-700 font-medium">Email Address</label>
                <input
                  v-model="contactUs.email"
                  type="email"
                  class="input validator text-primary text-center"
                  required
                />
                <p class="validator-hint hidden text-sm m-0 bg-warning-content text-center">
                  Required
                </p>
              </fieldset>
              <fieldset class="fieldset">
                <label class="label text-gray-700 font-medium">Phone Number</label>
                <input
                  v-model="contactUs.phone"
                  class="input validator text-primary text-center"
                  required
                  type="tel"
                  pattern="[0-9]*"
                  minlength="10"
                  maxlength="10"
                />
                <p class="validator-hint hidden text-sm m-0 bg-warning-content text-center">
                  Required
                </p>
              </fieldset>
            </div>
            <fieldset class="fieldset m-0">
              <legend class="fieldset-legend text-gray-700 font-medium">Inquiry Type</legend>
              <select
                v-model="contactUs.inquiry_type"
                class="select text-primary text-center validator"
              >
                <option value="general_inquiry">General Inquiry</option>
                <option value="bug">Bug Issue</option>
              </select>
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-legend text-gray-700 font-medium">Message</legend>
              <textarea
                v-model="contactUs.message"
                class="textarea h-24 text-primary validator"
                placeholder="Your message..."
                minlength="5"
                maxlength="500"
                required
              />
              <p class="validator-hint hidden text-sm m-0 bg-warning-content text-center">
                Required
              </p>
            </fieldset>

            <div>
              <button
                type="submit"
                class="btn w-full bg-base-200 text-primary font-medium py-3 rounded-md hover:bg-base-300 transition"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const ContactUsForm = ref(null)
const contactUs = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  inquiry_type: 'general_inquiry',
  message: '',
})

function Send_Message() {
  window.alert(`Message Sent!\n\nYour message:\n"${contactUs.message}"`)
  ContactUsForm.value.reset()
}
</script>

<style lang="scss" scoped></style>
