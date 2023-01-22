import React, { useEffect, useState } from 'react'
import styled from './style.module.scss'
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

const Home = () => {
  const [data,setData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:8080/api/nft')
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
    })
  },[])
  return (
    <>
    <div className={styled.top}>
    <div className={styled.container}>
      <section className={styled.header}>
        <h1>Browse Marketplace</h1>
        <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <div className={styled.search}>
          <input type="text" placeholder='Search your favorite NFTs'/>
          <BsSearch/>
        </div>
      </section>
    </div>
    <div className={styled.header_bottom}>
      <div className={styled.header_bottom_content}>
        <div className={styled.nfts}><span>NFTs</span><div className={styled.count}>302</div></div>
        <div className={styled.collections} ><span>Collections</span><div className={styled.count}>67</div></div>
      </div>
    </div>
    </div>
    <div className={styled.body}>
      <div className={styled.container}>
      <div className={styled.cards}>
        {
          data && data.map((item)=>{
            return(
              <div className={styled.card}>
          <div className={styled.card_top}>
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-1@2x.png" alt="" />
          </div>
          <div className={styled.card_middle}>
            <h3>{item.nftName}</h3>
            <div className={styled.card_user}>
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png" alt="" />
              <span>{item.artist?.name}</span>
            </div>
          </div>
          <div className={styled.card_bottom}>
            <div className={styled.card_bottom_left}>
              <p>Price</p>
              <div>{item.price} ETH</div>
              </div>
            <div className={styled.card_bottom_right}>
              <p>Highest Bid</p>
              <div>{item.higBig} wETH</div>
              </div>
          </div>
        </div>
            )
          })
        }
        
        {/* <div className={styled.card}>
          <div className={styled.card_top}>
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-1@2x.png" alt="" />
          </div>
          <div className={styled.card_middle}>
            <h3>Designer Bear</h3>
            <div className={styled.card_user}>
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png" alt="" />
              <span>Mr Fox</span>
            </div>
          </div>
          <div className={styled.card_bottom}>
            <div className={styled.card_bottom_left}>
              <p>Price</p>
              <div>1.63 ETH</div>
              </div>
            <div className={styled.card_bottom_right}>
              <p>Highest Bid</p>
              <div>0.33 wETH</div>
              </div>
          </div>
        </div> */}
      
        
      </div>
      </div>
    </div>
     
    </>
  )
}

export default Home