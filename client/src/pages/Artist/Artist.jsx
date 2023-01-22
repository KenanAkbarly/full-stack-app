
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from'./style.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { MdDriveFileRenameOutline,MdPriceChange } from 'react-icons/md';
import { IoMdTrendingUp} from 'react-icons/io';
//MdDriveFileRenameOutline
const Artist = () => {
  let num = 1;
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/api/artist')
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
    })
  },[])
 const [isOpen,setIsOpen] = useState(false)
 const [modal,setModal] = useState()
  const formik = useFormik({
    initialValues: {
      nftName: '',
      price: '',
      higBig: '',
    },
    validationSchema: Yup.object({
      nftName: Yup.string().min(5,'Must be 5 characters or more')
      .max(20, 'Must be 15 characters or less')
      .required('Required'),
      price: Yup.number()
    .min(1, "Must be more than 1 characters")
    .required("Required"),
    higBig: Yup.number().min(1, "Must be more than 1 characters")
    .required("Required"),
    }),
    onSubmit: values => {
      axios.post(`http://localhost:8080/api/nft/${modal}`,values).then((res)=>{toast.success('Successfully added!')} )
    },
  });
  return (
    <>
    <div className={styled.artist_body}>
       
      <div className={styled.container}>
        <div className={styled.modal} style={{display:isOpen === false? 'none':'block'}}>
        <button onClick={()=>{setIsOpen(false)}} className={styled.closeBtn}>X</button>
        <h1>Create NFT</h1>
        <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        <form onSubmit={formik.handleSubmit}>
        <div className={styled.nftName}>
          <MdDriveFileRenameOutline/>
       <input
         id="nftName"
         type="text"
         placeholder='NFT Name'
         {...formik.getFieldProps('nftName')}
       />
       {formik.touched.nftName && formik.errors.nftName ? (
         <span>{formik.errors.nftName}</span>
       ) : null}
 </div>
      <div className={styled.nftPrice}>
      {/* <label htmlFor="price">Price</label> */}
        <MdPriceChange/>
       <input id="price" placeholder='NFT Price' type="number" {...formik.getFieldProps('price')} />
       {formik.touched.price && formik.errors.price ? (
         <span>{formik.errors.price}</span>
       ) : null}
 
      </div>
     <div className={styled.highestBid}>
      <IoMdTrendingUp/>
       <input id="higBig" placeholder='NFT Highest Bid' type="number" {...formik.getFieldProps('higBig')} />
       {formik.touched.higBig && formik.errors.higBig ? (
         <span>{formik.errors.higBig}</span>
       ) : null}
     </div>
 
       <button className={styled.submitNft} type="submit">Submit</button>
     </form>
        </div>
        <section className={styled.header}>
          <h2>Top Creators </h2>
          <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </section>
        <section className={styled.header_bottom}>
          <div>Today</div>
          <div>This Week</div>
          <div>This Month</div>
          <div>All Time</div>
        </section>
        <section className={styled.table_header}>
          <div className={styled.number}>#</div>
          <div className={styled.artist}>Artist</div>
          <div className={styled.change}>Change</div>
          <div className={styled.sold}>NFTs Sold</div>
          <div className={styled.volume}>Volume</div>
        </section>
        <section className={styled.artists}>
          {
            data && data.map((item)=>{
              console.log("ITEM",item);
              return(
                <div key={item.id} className={styled.artist}>
            <div className={styled.artist_order}>{num++}</div>
            <div className={styled.artist_info}><img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-130@2x.png" alt="" />
            <span>{item.name}</span></div>
            <div className={styled.artist_chng_numb}>+1.41%</div>
            <div className={styled.artist_sold}>{item.sold}</div>
            <div className={styled.artist_volume}>{item.volume} ETH</div>
           <button onClick={()=>{setIsOpen(true); setModal(item._id)}} >Add NFT</button>
          </div>
              )
            })
          }

         
          
        </section>
      </div>

    </div>
    </>
  )
}

export default Artist