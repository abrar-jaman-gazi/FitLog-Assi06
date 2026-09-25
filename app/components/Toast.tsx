'use client'; import {useEffect} from 'react';
export function Toast({message,onClose}:{message:string,onClose:()=>void}){useEffect(()=>{const t=setTimeout(onClose,2400);return()=>clearTimeout(t)},[onClose]);return <div className="toast">✓ {message}</div>}
