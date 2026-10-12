
<template>
  <div class="checkout-page">
    <div class="checkout-container">

      <!-- Header -->
      <header class="checkout-header">
        <div>
          <span class="eyebrow">UDAAN AIRLINES / CHECKOUT</span>
          <h1>Complete your <span>journey.</span></h1>
          <p>Your next destination is just a few steps away.</p>
        </div>
      </header>


      <form @submit.prevent="handleSubmit">
        <div class="checkout-layout">

          <!-- Main Form -->
          <main class="checkout-main">

            <!-- Passenger -->
            <section class="checkout-card">
              <div class="section-heading">
                <div class="heading-icon"><i class="bi bi-person-fill"></i></div>
                <div>
                  <h2>Passenger details</h2>
                </div>
              </div>

              <div class="field-grid">
                <div class="field full">
                  <label>Full name</label>
                  <input v-model.trim="form.fullName" placeholder="Enter your name" required />
                </div>

                <div class="field">
                  <label>Age</label>
                  <input v-model.number="form.age" type="text" min="1" inputmode="numeric" @input="form.age = $event.target.value.replace(/\D/g, '').slice(0, 2)" 
                  placeholder=" Enter your age 1-99"required />
                </div>

                <div class="field">
                  <label>Gender</label>
                  <select v-model="form.gender" required>
                    <option value="" disabled>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div class="field">
                  <label>Email address</label>
                  <input v-model.trim="form.email" type="email" placeholder="you@example.com" required />
                </div>

                <div class="field">
                  <label>Phone number</label>
                  <input v-model.trim="form.phone" type="tel" placeholder="+91 90000 00000" required />
                </div>
              </div>
            </section>

            <!-- Payment -->
            <section class="checkout-card">
              <div class="section-heading">
                <div class="heading-icon"><i class="bi bi-credit-card"></i></div>
                <div>
                  <h2>Payment details</h2>
                </div>
              </div>

              <div class="payment-tabs">
                <button
                  v-for="method in ['Card']"
                  :key="method"
                  type="button"
                  :class="{ active: paymentMethod === method }"
                  @click="paymentMethod = method"
                >
                  {{ method }}
                </button>
              </div>
              <div class="d-flex align-items-center gap-3 mb-5 mt-4">
                <div>
                  <div class="ms-3">
                    <img src="../assets/img/visa-icon.png" alt="100" width="50px" height="50px" style="object-fit: contain;">
                  </div>
                  

                  <input type="checkbox" class="ms-4 mt-2">
                  <label class="mx-2">
                    Visa
                  </label>
                </div>

                <div>
                  <div class="ms-2">
                    <img src="../assets/img/master.png" alt="101" width="90px" height="50px" style="object-fit: contain; ">
                  </div>
                  
                  <input type="checkbox" class=" mt-2">

                  <label class="mx-2">
                    mastercard
                  </label>
                </div>
              </div>
              <template v-if="paymentMethod === 'Card'">

                <div class="field-grid payment-fields">
                  <div class="field full">
                    <label>Cardholder name</label>
                    <input v-model.trim="card.name" autocomplete="cc-name" placeholder="Name on card" required />
                  </div>

                  <div class="field full">
                    <label>Card number</label>
                    <input
                      v-model="card.number"
                      inputmode="numeric"
                      autocomplete="cc-number"
                      placeholder="1234-5678-9012-3456"
                      maxlength="19"
                      @input="formatCardNumber"
                      required
                    />
                  </div>

                  <div class="field">
                    <label>Expiry date</label>
                    <input
                      v-model="card.expiry"
                      autocomplete="cc-exp"
                      placeholder="MM/YY"
                      maxlength="5"
                      @input="formatExpiry"
                      required
                    />
                  </div>

                  <div class="field">
                    <label>CVV</label>
                    <input
                      v-model="card.cvv"
                      type="password"
                      inputmode="numeric"
                      autocomplete="cc-csc"
                      placeholder="***"
                      maxlength="3"
                      @input="card.cvv = card.cvv.replace(/\D/g, '').slice(0, 4)"
                      required
                    />
                  </div>
                </div>
              </template>
            </section>

            <p v-if="error" class="form-error">{{ error }}</p>

            <button class="pay-button air-btn-primary" type="submit" :disabled="submitting">
              <span>{{ submitting ? 'Processing...' : 'Continue to secure payment' }}</span>
            </button>

             
          </main>

          <!-- Booking Summary -->
          <aside class="summary-column">
            <div class="summary-card">
              <div class="summary-top d-flex align-items-center justify-content-center">
                <img src="../assets/img/1.png" alt="1" width="200px" height="100px">
              </div>

              <div class="route">
                <div>
                  <strong>FROM</strong>
                  <h3>{{ flight.from || 'DEL' }}</h3>
                  <p>{{ flight.fromCity || 'New Delhi' }}</p>
                </div>

                <div class="route-line">
                  <i class="bi bi-airplane"></i>
                  <span></span>
                </div>

                <div class="destination">
                  <strong>TO</strong>
                  <h3>{{ flight.to || 'BOM' }}</h3>
                  <p>{{ flight.toCity || 'Mumbai' }}</p>
                </div>
              </div>

              

              <div class="summary-divider"></div>

              <div class="fare-heading">
                <h3>Fare summary</h3>
                <span>INR</span>
              </div>

              <div class="fare-row">
                <span>Adult</span>
                <strong>{{ money(baseFare) }}</strong>
              </div>
              <div class="fare-row">
                <span>Child</span>
                <strong>{{ money(taxes) }}</strong>
              </div>

              <div class="summary-divider"></div>

              <div class="total-row">
                <div>
                  <span>Total amount</span>
                </div>
                <strong>{{ money(total) }}</strong>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
 

const emit = defineEmits(['submit']);

const props = defineProps({
  submitting: { type: Boolean, default: false },
  flight: {
    type: Object,
    default: () => ({})
  },
  baseFare: { type: Number, default: 6500 },
  taxes: { type: Number, default: 850 }
});

const form = reactive({
  fullName: '',
  age: null,
  gender: '',
  email: '',
  phone: '',
  seatPreference: 'Window'
});

const card = reactive({
  name: '',
  number: '',
  expiry: '',
  cvv: ''
});

const paymentMethod = ref('Card');
const upiId = ref('');
const bank = ref('');
const error = ref('');

 

const baseFare = computed(() => props.baseFare);
const taxes = computed(() => props.taxes);
const total = computed(() => baseFare.value + taxes.value);
function money(value) {
  return '₹' + Number(value).toLocaleString('en-IN');
}
function formatCardNumber() {
  card.number = card.number.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry() {
  const digits = card.expiry.replace(/\D/g, '').slice(0, 4);
  card.expiry = digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
}
function handleSubmit() {
  error.value = '';
  if (!form.fullName || !form.age || !form.gender || !form.email || !form.phone) {
    error.value = 'Please complete all passenger details.';
    return;
  }
  if (paymentMethod.value === 'Card') {
    const digits = card.number.replace(/\D/g, '');
    const [month, year] = card.expiry.split('/');
    if (card.name.trim().length < 2 || digits.length < 13 || digits.length > 19) {
      error.value = 'Please check the cardholder name and card number.';
      return;
    }

    if (!month || !year || Number(month) < 1 || Number(month) > 12 || year.length !== 2) {
      error.value = 'Please enter a valid expiry date.';
      return;
    }
    const expiryDate = new Date(2000 + Number(year), Number(month));
    if (expiryDate <= new Date()) {
      error.value = 'This card has expired. Please use a valid card.';
      return;
    }
    if (!/^\d{3,4}$/.test(card.cvv)) {
      error.value = 'Please enter a valid CVV.';
      return;
    }
  }
  if (paymentMethod.value === 'UPI' && !/^[\w.-]+@[\w.-]+$/.test(upiId.value)) {
    error.value = 'Please enter a valid UPI ID.';
    return;
  }

  if (paymentMethod.value === 'Net banking' && !bank.value) {
    error.value = 'Please select your bank.';
    return;
  }

  // Do not send or store CVV/card data through this event.
  // Integrate a PCI-compliant payment gateway for real transactions.
  emit('submit', {
    passenger: { ...form },
    paymentMethod: paymentMethod.value,
    paymentDetails:
      paymentMethod.value === 'Card'
        ? { cardholderName: card.name, expiry: card.expiry }
        : paymentMethod.value === 'UPI'
          ? { upiId: upiId.value }
          : { bank: bank.value },
    amount: total.value
  });
}
</script>





<style lang="scss" scoped>
.error-message {
  color: #ff5b65;
  font-size: 13px;
  margin-top: 6px;
}
.checkout-page {
  --navy: #122b46;
  --blue: #4c91c7;
  --cyan: #80d5e6;
  --muted: #8290a2;
  --line: #e4eaf1;

  min-height: 100vh;
  padding: 30px 24px 70px;
  color: var(--navy);
  // font-family: "Manrope", sans-serif;
}

.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
}

strong
{
  font-size: 14px;
}
.checkout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;

  .eyebrow {
    color: #5b8db6;
    font-size: 12px;
    // font-weight: 800;
    letter-spacing: 2.5px;
  }

  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: -2px;

    span { color: var(--blue); }
  }

  p 
  { color: var(--muted); 
    font-size: 15px; 
    margin: 0; 
  }
}


.checkout-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(285px, .85fr);
  align-items: start;
  gap: 24px;
}

.checkout-main { display: grid; gap: 20px; min-width: 0; }

.checkout-card, .summary-card{
  background: #fff;
  border: 1px solid #e5ebf2;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(21, 48, 76, .035);
}

.checkout-card { padding: 26px; }

.section-heading {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 25px;

  .heading-icon {
    display: grid;
    place-items: center;
    width: 43px;
    height: 43px;
    flex-shrink: 0;
    border-radius: 13px;
    background: rgba(221, 160, 221, 0.432);
    color: #233b4ed2;
    font-size: 19px;
  }

  h2 { margin: 0 0 5px; font-size: 16px; 
    font-weight: 700; 
    }
  p { margin: 0; color: var(--muted); font-size: 11px; }
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 19px 15px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  &.full { grid-column: 1 / -1; }

  label {
    color: #455a70;
    font-size: 15px;
    font-weight: 700;
  }

  input, select {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    height: 46px;
    padding: 0 13px;
    border: 1px solid #dfe6ef;
    border-radius: 10px;
    outline: none;
    background: #fbfcfe;
    color: var(--navy);
    font: inherit;
    font-size: 16px;
    transition: border-color .25s, box-shadow .25s, background .25s;

    &:focus {
      border-color: #64a8d7;
      background: #fff;
      box-shadow: 0 0 0 4px rgba(76,145,199,.11);
    }

    &::placeholder { color: #a7b2bf; }
  }
}


.payment-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 22px;
  padding: 5px;
  border-radius: 11px;
  background: #f3f6fa;

  button {
    flex: 1;
    min-height: 38px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #77869a;
    font: inherit;
    font-size: 11px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s;

    &.active {
      background: #fff;
      color: var(--navy);
      box-shadow: 0 2px 8px rgba(23,44,70,.08);
      font-size: 15px;
    }
  }
}

.bank-card {
  position: relative;
  overflow: hidden;
  max-width: 390px;
  min-height: 205px;
  margin: 0 auto 25px;
  padding: 23px 25px;
  border-radius: 17px;
  color: white;
  background:
    radial-gradient(circle at 90% 10%, rgba(128,213,230,.32), transparent 35%),
    linear-gradient(125deg, #10243b 0%, #1b4265 58%, #28688a 100%);
  box-shadow: 0 15px 28px rgba(17,43,69,.2);

  &::after {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    right: -90px;
    bottom: -150px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 50%;
    box-shadow: 0 0 0 20px rgba(255,255,255,.025), 0 0 0 42px rgba(255,255,255,.025);
  }
}

.bank-card-top, .bank-card-bottom 
{ position: relative; 
  z-index: 1; 
  display: flex; 
  justify-content: 
  space-between; 
  align-items: center; 
}
.bank-name 
{ 
  font-size: 14px; 
  font-weight: 900; 
  letter-spacing: 2px; 
}
.bank-name small 
{ 
  display: block; 
  margin-top: 3px; 
  font-size: 7px; 
  letter-spacing: 3px; 
  opacity: .7; 
}
.card-contactless 
{ 
  font-size: 24px; 
  transform: rotate(90deg);
}

.chip 
{ 
  width: 36px; 
  height: 27px; 
  margin-top: 17px; 
  border-radius: 6px; 
  background: linear-gradient(135deg, #e7d5a2, #b9a36c); 
}
.card-number-preview 
{ position: relative; 
  z-index: 1; 
  margin: 15px 0 17px; 
  font-size: clamp(15px, 2vw, 19px); 
  letter-spacing: 2px;
  white-space: nowrap; 
}
.bank-card-bottom 
{ 
  align-items: 
  flex-end; 
  gap: 8px; 
}
.bank-card-bottom > div 
{ 
  display: grid; 
  gap: 5px; 
  min-width: 0; 
}
.bank-card-bottom small 
{ 
  color: #c3d4e2; 
  font-size: 7px; 
  letter-spacing: 1.5px; 
}
.bank-card-bottom strong 
{ 
  max-width: 180px; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  font-size: 9px; 
  letter-spacing: .8px; 
  white-space: nowrap; 
}
.card-network 
{ 
  font-size: 14px; 
  font-weight: 900; 
  font-style: italic; 
}
.payment-fields 
{ 
  margin-top: 4px; 
}

// .pay-button 
// {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   min-height: 57px;
//   padding: 0 22px;
//   border: 0;
//   border-radius: 12px;
//   background: linear-gradient(110deg, #142c46, #214e72);
//   color: #fff;
//   font: inherit;
//   font-size: 16px;
//   font-weight: 800;
//   cursor: pointer;
//   transition: transform .25s, box-shadow .25s, background .25s;

//   i { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 9px; background: rgba(255,255,255,.12); font-size: 17px; }

//   &:hover:not(:disabled) {
//     transform: translateY(-2px);
//     background: linear-gradient(110deg, #1c4264, #3678a1);
//     box-shadow: 0 12px 24px rgba(20,56,87,.2);
//   }

//   &:disabled { opacity: .6; cursor: wait; }
// }

 
.form-error 
{ 
  margin: 0; 
  color: #c03942; 
  font-size: 12px; 
}

.summary-column 
{ 
  position: sticky; 
  top: 24px; 
  display: grid; 
  gap: 16px; 
}
.summary-card 
{ 
  overflow: hidden; 
  padding: 25px; 
}

.summary-top, 
.fare-heading, 
.fare-row, 
.total-row 
{ 
  display: flex; 
  align-items: center; 
  justify-content: space-between;
}

.summary-top 
{ 
  color: #7890a7; 
  font-size: 10px; 
  font-weight: 900; 
  letter-spacing: 2px; 
}

.summary-top i 
{ 
  font-size: 18px; 
}

.route 
{ display: grid;
  grid-template-columns: 1fr 65px 1fr; 
  align-items: center; 
  gap: 6px; 
  margin: 30px 0 26px; 
}
.route small
{ color: #93a2b2; 
  font-size: 8px; 
  font-weight: 900; 
  letter-spacing: 1.5px; 
}
.flight-meta strong
{
  color: #93a2b2; 
  font-size: 12px; 
  font-weight: 900; 
  letter-spacing: 1.5px; 
}
.route h3 
{
   margin: 6px 0 3px; 
   font-size: 30px; 
   font-weight: 700; 
   letter-spacing: -1px; 
  }
.route p 
{
  margin: 0; 
  color: var(--muted); 
  font-size: 12px; 
}
.destination 
{ 
  text-align: right; 
}
.route-line 
{ 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 8px; 
  color: #4b93c4; 
}
.route-line i 
{ 
  font-size: 22px; 
}
.route-line span 
{ 
  width: 100%;
  border-top: 1px dashed #b4c8d8; 
}

.flight-meta
{ display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 12px; 
  padding: 15px 0; 
  
  border-top: 1px solid var(--line); 
  border-bottom: 1px solid var(--line); 
}
.flight-meta > div 
{ 
  display: grid; gap: 8px; 
}
.flight-meta strong 
{ 
  font-size: 11px; 
}
.summary-divider 
{
   height: 1px; 
   margin: 22px 0; 
   background: var(--line); 
  }
.fare-heading 
{ 
  margin-bottom: 21px;
  
}
.fare-heading h3 
{ 
  margin: 0; 
  font-size: 15px; 
  font-weight: 900; 
}
.fare-heading span 
{ 
  color: #8798aa;
  font-size: 12px; 
}
.fare-row 
{ margin: 16px 0; 
  color: #78889a; 
  font-size: 15px; 
}
.fare-row strong 
{ 
  color: var(--navy); 
  font-size: 14px; 
}
.total-row > div 
{ 
  display: grid; 
  gap: 7px; 
}
.total-row span 
{ 
  font-size: 17px; 
  font-weight: 800; 
}
.total-row small 
{ 
  color: var(--muted);
  font-size: 9px; 
}
.total-row > strong 
{ 
  font-size: 20px; 
  letter-spacing: -1px; 
}

@media (max-width: 850px) 
{
  .checkout-layout { grid-template-columns: 1fr; }
  .summary-column { position: static; grid-row: 1; }
}

@media (max-width: 520px) {
  .checkout-page { padding: 28px 13px 40px; }
  .checkout-header { align-items: flex-start; flex-direction: column; }
  .checkout-header h1 { letter-spacing: -1.3px; }
  .progress-steps { gap: 7px; padding: 13px 9px; }
  .progress-steps .step { gap: 5px; font-size: 9px; }
  .progress-steps .step span { width: 25px; height: 25px; }
  .checkout-card, .summary-card { padding: 18px; border-radius: 15px; }
  .field-grid { gap: 16px 10px; }
  .field input, .field select { font-size: 11px; padding: 0 9px; }
  .seat-option { min-height: 115px; padding: 13px 8px; }
  .seat-option strong { font-size: 10px; }
  .seat-option small { font-size: 9px; }
  .route h3 { font-size: 26px; }
  .bank-card { padding: 20px 17px; }
}
</style>
