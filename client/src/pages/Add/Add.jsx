import React from 'react'
import styled from './style.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { MdPriceChange } from 'react-icons/md';
import { GrCapacity } from 'react-icons/gr';
import { BiMessageSquareAdd } from 'react-icons/bi';
// import { useState } from 'react';
import Axios from 'axios'
import toast from 'react-hot-toast'
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Add = () => {
//   const [input,setInput] = useState({
//     name:'',
//     sold:'',
//     volume:''
//   })
//  function Submit(e){
//   Axios.post('http://localhost:8080/api/artist',{
//     name:input.name,
//     sold:input.sold,
//     volume:input.volume
//   })
//   .then(res =>{
//     console.log(res.data);
//     toast.success('Successfully added!')
//   })
//  } 
// function handleChange(e){
//   const newInput = {...input}
//   newInput[e.target.id] = e.target.value
//   setInput(newInput)
//   console.log(newInput);
// }



const formik = useFormik({
  initialValues: {
    name: '',
    sold: '',
    volume: '',
  },
  validationSchema: Yup.object({
    name: Yup.string().min(5,'Must be 5 characters or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    sold: Yup.number()
    .min(1, "Must be more than 1 characters")
    .required("Required"),
    volume: Yup.number().min(1, "Must be more than 1 characters")
    .required("Required"),
  }),
  onSubmit: values => {
    // alert(JSON.stringify(values, null, 2));
    
    Axios.post('http://localhost:8080/api/artist',values).then((res)=>{toast.success('Successfully added!')} )
    console.log(values);
  },
});




  return (
    <div className={styled.add_body}>
      <div className={styled.add_body_left}>
        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-84@1x.png" alt="" />
      </div>
      <div className={styled.add_body_right}>
        <h1>Create Artist</h1>
        <p>Welcome! enter your details and start creating, collecting and selling NFTs. </p>
        <form onSubmit={formik.handleSubmit}>
        <div className={styled.userName}>
          <AiOutlineUser/>
          <input   id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.firstName} type="text" placeholder='Username'/> {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
        </div>
        <div className={styled.nftSold}>
          <MdPriceChange/>
          <input   id="sold" name="sold" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.firstName} type="number" placeholder='Sold'/> {formik.touched.sold && formik.errors.sold ? (
         <div>{formik.errors.sold}</div>
       ) : null}
        </div>
        <div className={styled.volume}>
          <GrCapacity/>
          <input   id="volume" name="volume" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.firstName} type="number" placeholder='Volume'/> {formik.touched.volume && formik.errors.volume ? (
         <div>{formik.errors.volume}</div>
       ) : null}
        </div>
        <button type='submit'> <BiMessageSquareAdd/>  <span>Add Artist</span> </button>
        </form>
      </div>
    </div>
  )
}

export default Add