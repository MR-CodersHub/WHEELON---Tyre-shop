/* ==========================================================================
   APEXTYRE & WHEEL ALIGNMENT CENTER - SERVICES JAVASCRIPT (services.js)
   Service package triggers, interactive estimator, and quick booking
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initServicePackageTriggers();
  initEstimatorCalculator();
});

function initServicePackageTriggers() {
  const packageBtns = document.querySelectorAll('[data-package-select]');
  packageBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageName = e.target.getAttribute('data-package-select');
      const serviceSelect = document.getElementById('modalServiceSelect');
      const notesField = document.getElementById('modalNotes');

      if (serviceSelect) {
        serviceSelect.value = 'Package: ' + packageName;
      }
      if (notesField) {
        notesField.value = `Selected Service Package: ${packageName}`;
      }

      openModal('appointmentModal');
    });
  });
}

function initEstimatorCalculator() {
  const vehicleSelect = document.getElementById('estVehicle');
  const serviceCheckboxes = document.querySelectorAll('.est-service-check');
  const totalDisplay = document.getElementById('estTotalDisplay');

  if (!totalDisplay || !serviceCheckboxes.length) return;

  const calculateTotal = () => {
    let total = 0;
    const vehicleMultiplier = vehicleSelect ? parseFloat(vehicleSelect.value || 1) : 1;

    serviceCheckboxes.forEach(cb => {
      if (cb.checked) {
        total += parseFloat(cb.getAttribute('data-price') || 0);
      }
    });

    const finalPrice = Math.round(total * vehicleMultiplier);
    totalDisplay.textContent = `$${finalPrice}`;
  };

  if (vehicleSelect) vehicleSelect.addEventListener('change', calculateTotal);
  serviceCheckboxes.forEach(cb => cb.addEventListener('change', calculateTotal));

  calculateTotal();
}
