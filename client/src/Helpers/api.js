import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = https://subsum-server.onrender.com/api/web
//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL

export async function registerUser(formData){
    try {
        const res = await axios.post('/auth/register', formData, {withCredentials: true})
        if(res.data.success){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to register User'
        toast.error(errorMsg)
        //console.log('REGISTER ERROR', error)
    }
}

export async function loginUser(formData){
    try {
        const res = await axios.post('/auth/login', formData, {withCredentials: true})
        return res.data
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to Login User'
        toast.error(errorMsg)
        //console.log('LOGIN ERROR', error)
    }
}

export async function verifyUser({ id, token}){
    try {
        const res = await axios.post(`/auth/${id}/verify/${token}`)
        if(res.data.success){
            toast.success('Email Verified')
            return res
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to Verify Account'
        toast.error(errorMsg)
        //console.log('first', error)
    }
}

export async function forgotPassword(formData){
    try {
        const res = await axios.post('/auth/forgotPassword', formData, {withCredentials: true})
        //console.log('forgot password',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to Proccess forgot password request'
        toast.error(errorMsg)
        //console.log('FORGOT PASSWORD', error)
    }
}

export async function resetPassword(formData){
    try {
        const res = await axios.post(`/auth/resetPassword/${formData.resetToken}`, formData, {withCredentials: true})
        //console.log('reset password',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to Proccess forgot password request'
        toast.error(errorMsg)
        //console.log('RESET PASSWORD', error)
    }
}

export async function createNewPin(formData){
    try {
        const res = await axios.post(`/user/createPin`, formData, {withCredentials: true})
        //console.log('create new pin',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to create new pin'
        toast.error(errorMsg)
        //console.log('CREATE NEW PIN', error)
    }
}

export async function updatePin(formData){
    try {
        const res = await axios.post(`/user/updatePin`, formData, {withCredentials: true})
        //console.log('update pin',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to update new pin'
        toast.error(errorMsg)
        //console.log('UPDATE PIN', error)
    }
}

export async function updatePassword(formData){
    try {
        const res = await axios.post(`/user/updatePassword`, formData, {withCredentials: true})
        //console.log('update password',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to update new password'
        toast.error(errorMsg)
        //console.log('UPDATE PASSWORD', error)
    }
}

export async function updateTransactionPin(formData){
    try {
        const res = await axios.post(`/user/updatePin`, formData, {withCredentials: true})
        //console.log('update new pin',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to update new pin'
        toast.error(errorMsg)
        //console.log('RESET PASSWORD', error)
    }
}

//update user endpoint
export async function updateUser(formData){
    try {
        const res = await axios.post(`/user/updateUser`, formData, {withCredentials: true})
        //console.log('update user',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const errorMsg = error.response.data.data || 'Unable to update user details'
        toast.error(errorMsg)
        //console.log('UPDATE USER', error)
    }
}

//User cashout bounus wallet
export async function cashoutBonus(formData){
    try {
        const res = await axios.post(`/user/cashoutBonus`, formData, {withCredentials: true})
        //console.log('cash out pin',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const res = error.response || 'Unable to cashout bonus'
        toast.error(res.data.data)
        //console.log('RESET PASSWORD', error)
        return res
    }
}

//Pay with paystack
export async function payWithPaystack(formData){
    try {
        const res = await axios.post(`/funding/payWithPaystack`, formData, {withCredentials: true})
        //console.log('cash out pin',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const res = error.response || 'Unable to cashout bonus'
        toast.error(res.data.data)
        //console.log('RESET PASSWORD', error)
        return res
    }
}

//pay with monnify
export async function payWithMonnify(formData){
    try {
        const res = await axios.post(`/funding/payWithMonnify`, formData, {withCredentials: true})
        //console.log('cash out pin',res)
        if(res.data){
            return res.data
        }
    } catch (error) {
        const res = error.response || 'Unable to cashout bonus'
        toast.error(res.data.data)
        //console.log('RESET PASSWORD', error)
        return res
    }
}