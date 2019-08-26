(()=>{
  const form = document.querySelector('#form')
  const btn = document.querySelector('#sendMail')
  const errorArea = document.querySelector('#errorMessage')

  let name = document.querySelector('#formName')
  let company = document.querySelector('#formCompany')
  let email = document.querySelector('#formEmail')
  let message = document.querySelector('#formMessage')

  form.reset()

  btn.addEventListener('click', ()=>{
    let name = document.querySelector('#formName').value.trim()
    let company = document.querySelector('#formCompany').value.trim()
    let email = document.querySelector('#formEmail').value.trim()
    let message = document.querySelector('#formMessage').value.trim()
    console.log('click')
    if (email == "") {
      errorArea.style.display = 'flex'
      errorArea.innerText = "type email"
      return false
    } else if (name == "") {
      errorArea.style.display = 'flex'
      errorArea.innerText = "type name"
      return false
    } else if (company == "") {
      errorArea.style.display = 'flex'
      errorArea.innerText = "type company name"
      return false
    }else if (message.length < 5) {
      errorArea.style.display = 'flex'
      errorArea.innerText = "message must be at least 5 characters"
      return false
    } else {
      errorArea.style.display = 'none'
      errorArea.innerText = ""
    }

    $.ajax({
      url: 'ajax/mail.php',
      type: 'POST',
      cache: false,
      data: { name, email, message, company },
      dataType: 'html',
      beforeSend: ()=>{
        btn.disabled = true
      },
      success: (data)=>{
        if(!data){
          errorArea.style.display = 'flex'
          errorArea.innerText = "Something went wrong"
        } else {
          btn.disabled = false
          form.reset()
          alert(data)
        }
      }
    })
  })
})()