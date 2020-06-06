import React from "react";
import axios from 'axios'

    export async function sendEmail (email,message,total,subtotal,cart) {

        const form = await axios.post('/api/form', {
        email,
        message,
        total,
        subtotal,
        cart
        })
    }

