/* ==========================================================================
   APEXTYRE & WHEEL ALIGNMENT CENTER - CONTACT & FORM VALIDATION (contact.js)
   Validation for appointment booking forms, toast alerts, and confirmation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAppointmentForms();
});

function initAppointmentForms() {
  const forms = document.querySelectorAll('.appointment-form-js');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]');
      const phone = form.querySelector('[name="phone"]');
      const email = form.querySelector('[name="email"]');
      const service = form.querySelector('[name="service"]');
      const date = form.querySelector('[name="date"]');

      let isValid = true;
      let errorMsg = '';

      if (!name || name.value.trim().length < 2) {
        isValid = false;
        errorMsg = 'Please enter your full name.';
        markInvalid(name);
      } else {
        markValid(name);
      }

      if (isValid && (!phone || !/^[0-9+\s-]{7,15}$/.test(phone.value.trim()))) {
        isValid = false;
        errorMsg = 'Please enter a valid contact phone number.';
        markInvalid(phone);
      } else if (phone) {
        markValid(phone);
      }

      if (isValid && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))) {
        isValid = false;
        errorMsg = 'Please enter a valid email address.';
        markInvalid(email);
      } else if (email) {
        markValid(email);
      }

      if (isValid && (!service || service.value === '')) {
        isValid = false;
        errorMsg = 'Please select a required service or tyre option.';
        markInvalid(service);
      } else if (service) {
        markValid(service);
      }

      if (!isValid) {
        showToast(errorMsg, 'error');
        return;
      }

      // Success sequence
      showToast('Appointment booked successfully! Our service team will call you back to confirm.', 'success');

      // Close modal if form was inside modal
      const modal = form.closest('.modal-backdrop');
      if (modal) {
        closeModal(modal.id);
      }

      form.reset();
      clearValidations(form);
    });
  });
}

function markInvalid(inputEl) {
  if (!inputEl) return;
  inputEl.style.borderColor = 'var(--primary-red)';
  inputEl.style.boxShadow = '0 0 0 3px var(--primary-red-light)';
}

function markValid(inputEl) {
  if (!inputEl) return;
  inputEl.style.borderColor = 'var(--success-green)';
  inputEl.style.boxShadow = 'none';
}

function clearValidations(form) {
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.style.borderColor = '';
    input.style.boxShadow = '';
  });
}
