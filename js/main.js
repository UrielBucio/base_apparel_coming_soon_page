'use strict';
const input_text = document.querySelector(".input_text");
const error_icon = document.querySelector(".error_icon");
const error_text = document.querySelector(".msg_error");
const btn = document.querySelector(".btn");

const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener('click', () => {
    if (validation.test(input_text.value)) {
        console.log('Email validation successful');
    } else {
        error_text.style.display = 'block';
        error_icon.style.display = 'block';
    }
});