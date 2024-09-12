// get set token 

resetTokenAsPassword = () => {
    const token = crypto
    .randomBytes(20)
    .toString('hex')
    this.resetPassword  = crypto
    .createhash("sha256")
    .update(token)
    .digest('hex')
}

