import bcrypt from "bcrypt"

export const hashPassword = async(password) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        return hashed;
    }
    catch(error){
        console.log(error)
    }
}

export const comparePassword = async(password,hashed) =>{
      return bcrypt.compare(password,hashed)
}