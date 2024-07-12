import React from 'react'
import { useForm } from 'react-hook-form'
import edadValidator from './Validators';
const FormHead = () => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        defaultValues: {
            nombre: 'Daniel',
            direccion: 'Cali'
        }
    });
    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

  return (
    <div className='container d-flex justify-content-center'>
        <div className="row">
            <div className="col-12">
                <h1>Formulario</h1>
                <p>Nombre: {watch('nombre')}</p>
            </div>

                
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-2'>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre',{
                        required: true,
                        maxLength: 10
                    })} />
                    {errors.nombre?.type === 'required' && <p className='text-danger'>El campo nombre  es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p className='text-danger'>El campo nombre debe tener menos de 10 caracteres</p>}
                </div>
                <div className='p-2'>
                    <label>Dirección</label>
                    <input type="text" {...register('direccion', {
                        required: true
                    })} />
                    {errors.direccion?.type === 'required' && <p className='text-danger'>El campo direccion es requerido</p>}
                </div>
                <div className='p-2'>
                    <label>Email</label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <p className='text-danger'>El formato del email es invalido </p>}
                </div>
                <div className='p-2'>
                    <label>Edad</label>
                    <input type="number" {...register('edad', {
                        validate: edadValidator
                    })}/>
                    {errors.edad && <p className='text-danger'>La edad debe estar entre 18 y 65</p>}
                </div>
                <div className='p-2'>
                    <label>País</label>
                    <select {...register('país')}>
                        <option value="es">España</option>
                        <option value="it">Italia</option>
                        <option value="fr">Francia</option>
                    </select>
                </div>
                <div>
                    <label>¿Incluir teléfono?</label>
                    <input type="checkbox" {...register('incluirTelefono')} />
                </div>
                {incluirTelefono && (
                <div>
                    <label>Telefono</label>
                    <input type="text" {...register('telefono')} />
                </div>
                )}
                
                <input type='submit' value='Enviar'/>
            </form>
        </div>

    </div>
  )
}

export default FormHead
