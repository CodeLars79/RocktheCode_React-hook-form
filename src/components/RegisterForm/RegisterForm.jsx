import { useForm } from 'react-hook-form'
import './RegisterForm.css'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
    alert('Register successful!')
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h2>JOIN US!</h2>

        <div className='field'>
          <label>Username</label>
          <input
            {...register('name', { required: 'El nombre es obligatorio' })}
            placeholder='Your Name'
          />
          {errors.nombre && <p className='error'>{errors.nombre.message}</p>}
        </div>

        <div className='field'>
          <label>Mail</label>
          <input
            {...register('mail', {
              required: 'Mail is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Mail not valid'
              }
            })}
            placeholder='example@mail.com'
          />
          {errors.correo && <p className='error'>{errors.correo.message}</p>}
        </div>

        <div className='field'>
          <label>Password</label>
          <input
            type='password'
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: 'Minimum 6 letters, at least one letter and one number'
              }
            })}
            placeholder='******'
          />
          {errors.password && (
            <p className='error'>{errors.password.message}</p>
          )}
        </div>

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
