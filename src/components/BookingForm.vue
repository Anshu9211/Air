<template>
  <div class="checkout-page">
    <div class="checkout-container">
      <header class="checkout-header">
        <div class="img-back">
          <span class="eyebrow">UDAAN AIRLINES / CHECKOUT</span>
          <h1>Complete your <span>journey.</span></h1>
          <p>Your next destination is just a few steps away.</p>
        </div>
      </header>

      <form @submit.prevent="handleSubmit" novalidate>
        <div class="checkout-layout">
          <main class="checkout-main">

            <!-- Passenger Details -->
            <section class="checkout-card">
              <div class="section-heading">
                <div class="heading-icon">
                  <i class="bi bi-person-fill"></i>
                </div>
                <h2>Passenger details</h2>
              </div>

              <div class="field-grid">
                <div class="field full">
                  <label>Full name</label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    placeholder="Enter your name"
                    autocomplete="name"
                    :class="{ 'input-error': errors.fullName }"
                    @input="clearError('fullName')"
                  />
                  <p v-if="errors.fullName" class="field-error">
                    {{ errors.fullName }}
                  </p>
                </div>

                <div class="field">
                  <label>Age</label>
                  <input
                    v-model="form.age"
                    type="text"
                    inputmode="numeric"
                    maxlength="2"
                    placeholder="Enter your age (1-99)"
                    :class="{ 'input-error': errors.age }"
                    @input="
                      form.age = form.age.replace(/\D/g, '').slice(0, 2);
                      clearError('age');
                    "
                  />
                  <p v-if="errors.age" class="field-error">
                    {{ errors.age }}
                  </p>
                </div>

                <div class="field">
                  <label>Gender</label>
                  <select
                    v-model="form.gender"
                    :class="{ 'input-error': errors.gender }"
                    @change="clearError('gender')"
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <p v-if="errors.gender" class="field-error">
                    {{ errors.gender }}
                  </p>
                </div>

                <div class="field">
                  <label>Email address</label>
                  <input
                    v-model.trim="form.email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@example.com"
                    :class="{ 'input-error': errors.email }"
                    @input="clearError('email')"
                  />
                  <p v-if="errors.email" class="field-error">
                    {{ errors.email }}
                  </p>
                </div>

                <div class="field">
                  <label>Phone number</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    inputmode="numeric"
                    maxlength="10"
                    autocomplete="tel-national"
                    placeholder="10-digit mobile number"
                    :class="{ 'input-error': errors.phone }"
                    @input="
                      form.phone = form.phone.replace(/\D/g, '').slice(0, 10);
                      clearError('phone');
                    "
                  />
                  <p v-if="errors.phone" class="field-error">
                    {{ errors.phone }}
                  </p>
                </div>
              </div>
            </section>

            <!-- Payment Details -->
            <section class="checkout-card">
              <div class="section-heading">
                <div class="heading-icon">
                  <i class="bi bi-credit-card"></i>
                </div>
                <h2>Payment details</h2>
              </div>

              <div class="payment-options">
                <label class="payment-option">
                  <img
                    src="../assets/img/visa-icon.png"
                    alt="Visa"
                    width="65"
                    height="45"
                  />
                  <span>
                    <input
                      type="radio"
                      name="cardType"
                      value="Visa"
                      :checked="selectedCardType === 'Visa'"
                      @change="toggleCardType('Visa')"
                    />
                    Visa
                  </span>
                </label>

                <label class="payment-option">
                  <img
                    src="../assets/img/master.png"
                    alt="Mastercard"
                    width="85"
                    height="45"
                  />
                  <span>
                    <input
                      type="radio"
                      name="cardType"
                      value="Mastercard"
                      :checked="selectedCardType === 'Mastercard'"
                      @change="toggleCardType('Mastercard')"
                    />
                    Mastercard
                  </span>
                </label>
              </div>

              <p v-if="errors.cardType" class="field-error">
                {{ errors.cardType }}
              </p>

              <div v-if="selectedCardType" class="field-grid payment-fields">
                <div class="field full">
                  <label>Cardholder name</label>
                  <input
                    v-model="card.name"
                    type="text"
                    autocomplete="cc-name"
                    placeholder="Name on card"
                    :class="{ 'input-error': errors.name }"
                    @input="
                      card.name = card.name.replace(/[^a-zA-Z\s'-]/g, '');
                      clearError('name');
                    "
                  />
                  <p v-if="errors.name" class="field-error">
                    {{ errors.name }}
                  </p>
                </div>

                <div class="field full">
                  <label>Card number</label>
                  <input
                    v-model="card.number"
                    type="text"
                    inputmode="numeric"
                    autocomplete="cc-number"
                    placeholder="1234 5678 9012 3456"
                    maxlength="19"
                    :class="{ 'input-error': errors.number }"
                    @input="formatCardNumber"
                  />
                  <p v-if="errors.number" class="field-error">
                    {{ errors.number }}
                  </p>
                </div>

                <div class="field">
                  <label>Expiry date</label>
                  <input
                    v-model="card.expiry"
                    type="text"
                    inputmode="numeric"
                    autocomplete="cc-exp"
                    placeholder="MM/YY"
                    maxlength="5"
                    :class="{ 'input-error': errors.expiry }"
                    @input="formatExpiry"
                  />
                  <p v-if="errors.expiry" class="field-error">
                    {{ errors.expiry }}
                  </p>
                </div>

                <div class="field">
                  <label>CVV</label>
                  <input
                    v-model="card.cvv"
                    type="password"
                    inputmode="numeric"
                    autocomplete="cc-csc"
                    placeholder="CVV"
                    maxlength="4"
                    :class="{ 'input-error': errors.cvv }"
                    @input="
                      card.cvv = card.cvv.replace(/\D/g, '').slice(0, 4);
                      clearError('cvv');
                    "
                  />
                  <p v-if="errors.cvv" class="field-error">
                    {{ errors.cvv }}
                  </p>
                </div>
              </div>

              <p v-else class="payment-hint">
                Select Visa or Mastercard to enter card details.
              </p>
            </section>

            <p v-if="error" class="form-error">
              {{ error }}
            </p>

            <button
              class="pay-button air-btn-primary"
              type="submit"
              :disabled="submitting"
            >
              {{ submitting ? 'Processing...' : 'Book Now' }}
            </button>
          </main>

          <!-- Booking Summary -->
          <aside class="summary-column">
            <div class="summary-card">
              <div class="summary-top">
                <img
                  src="../assets/img/1.png"
                  alt="Udaan Airlines"
                  width="200"
                  height="100"
                />
              </div>

              <div class="route">
                <div>
                  <strong>FROM</strong>
                  <h3>{{ flight.fromCode || flight.from || 'DEL' }}</h3>
                  <p>{{ flight.fromCity || flight.from || 'New Delhi' }}</p>
                </div>

                <div class="route-line">
                  <i class="bi bi-airplane"></i>
                  <span></span>
                </div>

                <div class="destination">
                  <strong>TO</strong>
                  <h3>{{ flight.toCode || flight.to || 'BOM' }}</h3>
                  <p>{{ flight.toCity || flight.to || 'Mumbai' }}</p>
                </div>
              </div>

              <div class="summary-divider"></div>

              <div class="fare-heading">
                <h3>Fare summary</h3>
                <span>INR</span>
              </div>

              <div class="fare-row">
                <span>Adult × {{ adult }}</span>
                <strong>{{ money(adultFare * adult) }}</strong>
              </div>

              <div class="fare-row">
                <span>Child × {{ child }}</span>
                <strong>{{ money(childFare * child) }}</strong>
              </div>

              <div class="summary-divider"></div>

              <div class="total-row">
                <span>Total amount</span>
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
import { useRoute } from 'vue-router';
let emit = defineEmits(['submit']);
let props = defineProps({
  submitting: {
    type: Boolean,
    default: false
  },
  flight: {
    type: Object,
    default: () => ({})
  },
  baseFare: {
    type: Number,
    default: 0
  }
});
let route = useRoute();
let form = reactive({
  fullName: '',
  age: '',
  gender: '',
  email: '',
  phone: ''
});
let card = reactive({
  name: '',
  number: '',
  expiry: '',
  cvv: ''
});
let selectedCardType = ref('');
let error = ref('');

let errors = reactive({
  fullName: '',
  age: '',
  gender: '',
  email: '',
  phone: '',
  cardType: '',
  name: '',
  number: '',
  expiry: '',
  cvv: ''
});

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let adult = computed(() =>
  Math.max(1, Number(route.query.adult) || 1)
);
let child = computed(() =>
  Math.max(0, Number(route.query.child) || 0)
);
let adultFare = computed(() =>
  Number(props.baseFare) || Number(props.flight?.price) || 0
);
let childFare = computed(() => adultFare.value * 0.5);

let total = computed(() => {
  let queryTotal = Number(route.query.totalPrice);

  if (
    route.query.totalPrice !== undefined &&
    route.query.totalPrice !== '' &&
    Number.isFinite(queryTotal) &&
    queryTotal >= 0
  ) {
    return queryTotal;
  }

  return adultFare.value * adult.value +
    childFare.value * child.value;
});

let cDetails = [
  {
    type: 'Visa',
    name: 'ANSHUL GARG',
    number: '1234567891234567',
    expiry: '12/28',
    cvv: '123'
  },
  {
    type: 'Visa',
    name: 'AADI',
    number: '1234567891234567',
    expiry: '11/29',
    cvv: '456'
  },
  {
    type: 'Visa',
    name: 'PRIYA SINGH',
    number: '1234567891234567',
    expiry: '10/30',
    cvv: '789'
  },
  {
    type: 'Mastercard',
    name: 'SUMIT',
    number: '1234567891234567',
    expiry: '12/27',
    cvv: '123'
  },
  {
    type: 'Mastercard',
    name: 'VARSHA',
    number: '1234567891234567',
    expiry: '11/35',
    cvv: '456'
  },
  {
    type: 'Mastercard',
    name: 'ASHWANI',
    number: '1234567891234567',
    expiry: '10/99',
    cvv: '789'
  }
];

function money(value) {
  return '₹' + Number(value).toLocaleString('en-IN');
}
function clearError(field) {
  errors[field] = '';
  error.value = '';
}
function clearCardFields() {
  card.name = '';
  card.number = '';
  card.expiry = '';
  card.cvv = '';
  errors.name = '';
  errors.number = '';
  errors.expiry = '';
  errors.cvv = '';
}

function toggleCardType(type) {
  selectedCardType.value = type;
  errors.cardType = '';
  error.value = '';
  clearCardFields();
}
function formatCardNumber() {
  let digits = card.number.replace(/\D/g, '').slice(0, 16);
  card.number = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  errors.number = '';
  error.value = '';
}
function formatExpiry() {
  let digits = card.expiry.replace(/\D/g, '').slice(0, 4);

  card.expiry = digits.length > 2
    ? digits.slice(0, 2) + '/' + digits.slice(2)
    : digits;

  errors.expiry = '';
  error.value = '';
}
function validateExpiry(expiry) {
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
    return false;
  }
  let [month, year] = expiry.split('/').map(Number);
  let now = new Date();
  let currentMonth =
    now.getFullYear() * 12 + now.getMonth();
  let expiryMonth =
    (2000 + year) * 12 + month - 1;
  return expiryMonth >= currentMonth;
}

function validatePassenger() {
  Object.assign(errors, {
    fullName: '',
    age: '',
    gender: '',
    email: '',
    phone: ''
  });

  let name = form.fullName.trim();
  if (!name) {
    errors.fullName = 'Passenger name is fill';
  } else if (!/^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/.test(name)) {
    errors.fullName = 'Enter a valid passenger name using letters only';
  }

  if (!form.age) {
    errors.age = 'Age is required.';
  } else if (
    !/^\d{1,2}$/.test(form.age) ||
    Number(form.age) < 1 ||
    Number(form.age) > 99
  ) {
    errors.age = 'Age must be between 1 and 99.';
  }

 

  if (!form.email.trim()) {
    errors.email = 'Email address must be xyz123@gmail.com';
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!form.phone) {
    errors.phone = 'Mobile number is requir';
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }

  return !(
    errors.fullName ||
    errors.age ||
    errors.gender ||
    errors.email ||
    errors.phone
  );
}

function validateCardInputs() {
  Object.assign(errors, {
    cardType: '',
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

 

  let cardName = card.name.trim();

  if (selectedCardType.value && !cardName) {
    errors.name = 'Holder name is required';
  } else if (
    selectedCardType.value &&
    !/^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/.test(cardName)
  ) {
    errors.name = 'Enter a valid cardholder name.';
  }

  let number = card.number.replace(/\D/g, '');

  if (selectedCardType.value && !number) {
    errors.number = 'Card number is required';
  } else if (
    selectedCardType.value &&
    !/^\d{16}$/.test(number)
  ) {
    errors.number = 'Card number must contain 16 digits.';
  }

  if (selectedCardType.value && !card.expiry) {
    errors.expiry = 'Expiry date is required';
  } else if (
    selectedCardType.value &&
    !validateExpiry(card.expiry)
  ) {
    errors.expiry = 'Enter a valid, unexpired date (MM/YY).';
  }

  if (selectedCardType.value && !card.cvv) {
    errors.cvv = 'CVV is required';
  } else if (
    selectedCardType.value &&
    !/^\d{3,4}$/.test(card.cvv)
  ) {
    errors.cvv = 'CVV must contain 3 or 4 digits.';
  }

  return !(
    errors.cardType ||
    errors.name ||
    errors.number ||
    errors.expiry ||
    errors.cvv
  );
}

function validateTestCard() {
  let enteredNumber = card.number.replace(/\D/g, '');
  let enteredName = card.name.trim()
    .replace(/\s+/g, ' ')
    .toUpperCase();

  let matchedCard = cDetails.find(item =>
    item.type === selectedCardType.value &&
    item.name === enteredName &&
    item.number === enteredNumber &&
    item.expiry === card.expiry &&
    item.cvv === card.cvv
  );

  if (!matchedCard) {
    errors.number = 'Card details do not match a test card.';
    return false;
  }

  return true;
}

function handleSubmit() {
  error.value = '';

  let passengerValid = validatePassenger();
  let cardValid = validateCardInputs();

  if (!passengerValid || !cardValid) {
    return;
  }

  if (!validateTestCard()) {
    return;
  }

  emit('submit', {
    passenger: { ...form },
    paymentMethod: 'Card',
    cardType: selectedCardType.value,
    paymentDetails: {
      cardholderName: card.name.trim(),
      lastFourDigits: card.number.replace(/\D/g, '').slice(-4),
      expiry: card.expiry
    },
    amount: total.value
  });
}
</script>

<style lang="scss" scoped>
.checkout-page {
  --navy: #122b46;
  --blue: #4c91c7;
  --muted: #8290a2;
  --line: #e4eaf1;

  min-height: 100vh;
  padding: 30px 24px 70px;
  color: var(--navy);

  .checkout-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .checkout-header {
    margin-bottom: 36px;

    .eyebrow {
      color: #5b8db6;
      font-size: 12px;
      letter-spacing: 2.5px;
    }

    h1 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: -2px;

      span {
        color: var(--blue);
      }
    }

    p {
      color: var(--muted);
      font-size: 15px;
      margin: 0;
    }
  }

  .checkout-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.65fr) minmax(285px, 0.85fr);
    align-items: start;
    gap: 24px;
  }

  .checkout-main {
    display: grid;
    gap: 20px;
    min-width: 0;
  }

  .checkout-card,
  .summary-card {
    background: #fff;
    border: 1px solid #e5ebf2;
    border-radius: 20px;
    box-shadow: 0 10px 35px rgba(21, 48, 76, 0.035);
  }

  .checkout-card {
    padding: 26px;
  }

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
      background: rgba(221, 160, 221, 0.43);
      color: #233b4e;
      font-size: 19px;
    }

    h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
    }
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

    &.full {
      grid-column: 1 / -1;
    }

    label {
      color: #455a70;
      font-size: 15px;
      font-weight: 700;
    }

    input,
    select {
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
      font-size: 15px;
      transition: border-color 0.25s, box-shadow 0.25s;

      &:focus {
        border-color: #64a8d7;
        background: #fff;
        box-shadow: 0 0 0 4px rgba(76, 145, 199, 0.11);
      }

      &::placeholder {
        color: #a7b2bf;
      }

      &.input-error {
        border-color: #dc2626;
        background: #fffafa;
        animation: shake 0.4s ease-in-out;
      }
    }
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      20%, 60% {
        transform: translateX(-6px);
      }
      40%, 80% {
        transform: translateX(6px);
      }
    }
    input.input-error:focus,
    select.input-error:focus {
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12);
    }
  }

  .field-error {
    color: #dc2626;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
    font-weight: 400;
  }

  .payment-options {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin: 10px 0 20px;
  }

  .payment-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
      object-fit: contain;
    }

    span {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 14px;
      font-weight: 600;
    }

    input {
      accent-color: var(--blue);
    }
  }

  .payment-fields {
    margin-top: 20px;
  }

  .payment-hint {
    margin: 0;
    color: var(--muted);
    font-size: 13px;
  }

  .form-error {
    margin: 0;
    color: #c03942;
    font-size: 13px;
  }
  .summary-column {
    position: sticky;
    top: 24px;
    min-width: 0;
  }

  .summary-card {
    overflow: hidden;
    padding: 25px;
  }

  .summary-top {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }

  .route {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 55px minmax(0, 1fr);
    align-items: center;
    gap: 6px;
    margin: 30px 0 26px;

    strong {
      font-size: 12px;
    }

    h3 {
      margin: 6px 0 3px;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -1px;
    }

    p {
      margin: 0;
      color: var(--muted);
      font-size: 12px;
      overflow-wrap: anywhere;
    }

    .destination {
      text-align: right;
    }

    .route-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: #4b93c4;

      i {
        font-size: 22px;
      }

      span {
        width: 100%;
        border-top: 1px dashed #b4c8d8;
      }
    }
  }

  .summary-divider {
    height: 1px;
    margin: 22px 0;
    background: var(--line);
  }

  .fare-heading,
  .fare-row,
  .total-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .fare-heading {
    margin-bottom: 21px;

    h3 {
      margin: 0;
      font-size: 15px;
      font-weight: 900;
    }

    span {
      color: #8798aa;
      font-size: 12px;
    }
  }

  .fare-row {
    margin: 16px 0;
    color: #78889a;
    font-size: 14px;

    strong {
      color: var(--navy);
      font-size: 14px;
      white-space: nowrap;
    }
  }

  .total-row {
    span {
      font-size: 16px;
      font-weight: 800;
    }

    strong {
      font-size: 20px;
      letter-spacing: -0.5px;
      white-space: nowrap;
    }
  }

}
</style>
