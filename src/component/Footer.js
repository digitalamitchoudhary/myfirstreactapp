import React from 'react'

export default function Footer(props) {
   


  return (
   <div>
    
    <footer className="bg-body-tertiary text-center text-lg-start">
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{backgroundColor:props.mode==='dark'?'#e7b20d':'black', color: props.mode==='dark'?'black':'white'}}
  >
    © 2020 Copyright:{" "}
    <a className="text-body" href="https://mdbootstrap.com/">
      MDBootstrap.com
    </a>
  </div>
  {/* Copyright */}
</footer>

   </div>
  )
}
