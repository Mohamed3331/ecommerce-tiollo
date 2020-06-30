
import axios from 'axios'

export async function sendEmail (email,message,total,subtotal,cart,size) {

    await axios.post('/api/form', {
        email,
        message,
        total,
        subtotal,
        cart,
        size
    })
}

