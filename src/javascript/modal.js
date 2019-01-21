export function activateModal () {
  let videoId;
  let videoSRC;
  let theModal;
  let videoParams = '?rel=0&showinfo=0&controls=2&autoplay=1';

  document.body.addEventListener('click', (event) => {
    if (event.target.dataset.modalTrigger !== undefined) {
      event.preventDefault();

      // set our predefined variables with the details from the trigger
      videoId = event.target.dataset.modal;
      theModal = document.getElementById(`${videoId}`);
      videoSRC = `//www.youtube.com/embed/${videoId}${videoParams}`;

      if (theModal) {
        showModal();
      } else {
        createModal(videoId);
      }
    }

    if (event.target.classList.contains('modal-close')) {
      closeModal();
    }
  });

  function showModal () {
    // set the source of the iframe video
    theModal.querySelector('iframe').setAttribute('src', videoSRC);

    // show the modal
    theModal.classList.toggle('is-active');
  }

  function closeModal () {
    // reset the iframe src to stop the video
    theModal.querySelector('iframe').setAttribute('src', '');
    // set all modal to hide
    theModal.classList.toggle('is-active');
  }

  function createModal (id) {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', id);
    modal.innerHTML = `<div class="modal-background"></div>
    <div class="modal-content is-fixed-aspect-ratio is-fixed-aspect-ratio--16x9">
      <iframe src="" frameborder="0"></iframe>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>`;
    document.querySelector('body').appendChild(modal);
  };
};
