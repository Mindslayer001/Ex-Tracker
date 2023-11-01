import React from 'react'
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    Description: z.string().min(3, { message: 'Descriptions should be atleast 3 letters' }),
    Amount: z.number({ invalid_type_error: 'Amount is required' })
    //Category: z.drop
})


const handleSubmit = () => {

}

const BalanceTracking = () => {
  return (
      <form action="onSubmit">
          <div  className='form-controll'>
              <label htmlFor='Description' className='form-label'>
                  Description
              </label>
              <input id='Description' type='text' className='form-control'>
              </input>
              <label  htmlFor='Amount' className='form-label'>
                  Amount
              </label>
              <input type='number' className='form-control'>
              </input>
              <label htmlFor='Category' className='form-label'>
                  Category
              </label>
              <select className='form-control'>
              </select>
              <button type='submit' className='btn btn-primary' >Submit</button>
              </div>
      </form>
  )
}

export default BalanceTracking