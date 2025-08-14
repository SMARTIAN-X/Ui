// 🌗 Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
});

// 🍞 Show Toast
function showUITestToast() {
  const toast = document.getElementById('ui-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// 📦 Toggle Modal
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('show');
}

// 🧩 Tabs
function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab');

  // Hide all content
  tabs.forEach(tab => tab.classList.add('hidden'));

  // Remove active class
  tabButtons.forEach(btn => btn.classList.remove('active'));

  // Show selected
  document.getElementById(tabId).classList.remove('hidden');
  evt.currentTarget.classList.add('active');
}

// 🪄 Accordion
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  content.classList.toggle('hidden');
}
