
import axios from 'axios'

    export async function sendEmail (email,message,total,subtotal,cart) {

        await axios.post('/api/form', {
        email,
        message,
        total,
        subtotal,
        cart
        })
    }

