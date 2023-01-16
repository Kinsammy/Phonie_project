const form = document.querySelector('form')
form.onsubmit = (e) => {
  e.preventDefault()
}
var input = document.getElementById('phone')
const networkLogoEle = document.getElementById('networkLogo')

var mtnNumbers = ['0703', '0706', '0803', '0806', '0813', '0816', '0810','0814', '0903', '0906']

input.addEventListener('change', () => {
  if (
    input.value.startsWith('0703') || input.value.startsWith('0706') ||
    input.value.startsWith('0803') || input.value.startsWith('0806') ||
    input.value.startsWith('0813') || input.value.startsWith('0816') ||
    input.value.startsWith('0810') || input.value.startsWith('0814') ||
    input.value.startsWith('0903') || input.value.startsWith('0906') ||
    input.value.startsWith('07025') || input.value.startsWith('07026')
  )
  {
    console.log('This is MTN number')
    networkLogoEle.setAttribute('src', '../images/mtn.png')
    networkLogoEle.style.display = "block";
  } else if (
    input.value.startsWith('0802') || input.value.startsWith('0808') ||
    input.value.startsWith('0708') || input.value.startsWith('0812') ||
    input.value.startsWith('0902') || input.value.startsWith('0901') ||
    input.value.startsWith('0907') || input.value.startsWith('0912')
  ) {
    console.log('This is Airtel number')
    networkLogoEle.setAttribute('src', '../images/airtel.png')
    networkLogoEle.style.display = "block";
  }
  else if (
    input.value.startsWith('0705') || input.value.startsWith('0807') ||
    input.value.startsWith('0805') || input.value.startsWith('0811') ||
    input.value.startsWith('0905') || input.value.startsWith('0815') 
  )
  {
    console.log('This is Glo number')
    networkLogoEle.setAttribute('src', '../images/glo.jpeg')
    networkLogoEle.style.display = "block";
  }
  else if (
    input.value.startsWith('0809') || input.value.startsWith('0817') ||
    input.value.startsWith('0818') || input.value.startsWith('0908') ||
    input.value.startsWith('0909')

  ) {
    console.log('This is 9mobile number')
    networkLogoEle.setAttribute('src', '../images/9mobile.png')
    networkLogoEle.style.display = "block";
  } else {
    validate(input)
    console.log('This is international number')
    networkLogoEle.setAttribute('src', '')
    networkLogoEle.style.display = "none";
  }
})



function validate(phone) {
  var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

  if (regex.test(phone)) {
      // Valid international phone number
  } else {
      // Invalid international phone number
  }
}
