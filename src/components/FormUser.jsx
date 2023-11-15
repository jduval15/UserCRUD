import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './style/FormUser.css'

const FormUser = ({ createUser , infoUpdate, updateUser, setInfoUpdate, isDisable, setIsDisable }) => {

        const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)

    }, [infoUpdate])

    const submit = data => {
        if(infoUpdate){
            //Update
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
            
        }
        else{
            //create        
            createUser('/users', data)
        }
        setIsDisable(true)
        reset({
            
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
            
        })
        setInfoUpdate()

    }

    const handleExit = () => {
        setIsDisable(true)
        reset({
            
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
            
        })
    }

    return (

    <div className={`form-container ${isDisable && 'form__disable'}`}>
        <form className="form" onSubmit={handleSubmit(submit)}>            
            <h2 className="form__title">Form User</h2>
            <div onClick={handleExit} className="form__x">
                <i className='bx bx-x-circle'></i>
            </div>
            <label className="form__label">
                <span className="form__span">Email :</span>
                <input className="form__input" {...register('email')} type="email" />
            </label>            
            <label className="form__label">
                <span className="form__span">Password :</span>
                <input className="form__input" {...register('password')} type="password" />
            </label>
            <label className="form__label">
                <span className="form__span">First name :</span>
                <input  className="form__input" {...register('first_name')} type="first_name" />
            </label>
            <label className="form__label">
                <span className="form__span">Last name :</span>
                <input className="form__input" {...register('last_name')} type="last_name" />
            </label>
            <label className="form__label">
                <span className="form__span">Birthday :</span>
                <input  className="form__input" {...register('birthday')} type="date" />
            </label>
            <button className="form__btn">Submit</button>
        </form>
    </div>
    )
}

export default FormUser