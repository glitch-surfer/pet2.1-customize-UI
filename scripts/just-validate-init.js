const validate = new window.JustValidate('#form');

var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);

    const validation = new JustValidate('#form');

    validation

      .addField('#name', [
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Имя не менее 2 букв',
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          errorMessage: 'Вы не ввели Имя',
        },

      ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели телефон',
        },

        /* {
          validator: (value, context) => {
            const phone = selector.Inputmask.unmaskedValue()
            console.log(phone)
            return Number(phone) && phone.lenght === 10

          }
        }, */

      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели e-mail',
        },
        {
          rule: 'email',
          errorMessage: 'Неверный e-mail!',
        },
      ]);