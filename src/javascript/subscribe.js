export function campaignMonitorForm () {
  const campaignMonitor = document.querySelector('.campaign-monitor');
  const fieldEmail = campaignMonitor.querySelector('#fieldEmail');
  let emailComplete = false;

  function validate () {
    let emailRegExp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i); // RegExp from http://www.regular-expressions.info/email.html

    if (emailRegExp.test(fieldEmail.value)) {
      emailComplete = true;
      fieldEmail.classList.remove('is-danger');
    } else {
      if (!fieldEmail.classList.contains('is-danger')) {
        fieldEmail.classList.add('is-danger');
      }
    }
  };

  function serialize (input) {
    let serialized = [];

    serialized.push(encodeURIComponent(input.name) + '=' + encodeURIComponent(input.value));

    return serialized.join('&');
  }

  // Submit function
  campaignMonitor.querySelector('.js-cm-submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    validate();

    if (emailComplete) {
      location.href = `https://dewnrcomms.createsend.com/t/r/s/owdlit/?${serialize(fieldEmail)}`;
    } else {
      console.log('Did not post');
    }
    return false;
  });
};
