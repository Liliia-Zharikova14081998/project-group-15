(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".modal-menu-link"), // все пункты меню
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закрывать меню при клике на пункт
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.modal.classList.remove("is-open");
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
